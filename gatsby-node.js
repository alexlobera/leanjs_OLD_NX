/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { titleCase } = require('./src/components/utils/text')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages/bootcamp-landing-content`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

function getLastPathFromSlug(slug) {
  const slugNoTrailingSlash = slug.replace(/\/$/g, '')
  const slugArray = slugNoTrailingSlash.split('/')
  const city = slugArray.pop()

  return city
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const getPosts = async ({ tagsIn = [], tagsNin = '', limit = 3, author }) => {
    const queryPosts = `
      query getPosts($limit: Int = ${limit}) {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              contentType: { eq: "blog" }
              ${author ? `author: { eq: "${author}" }` : ''}
              ${
                tagsNin || tagsIn.length
                  ? `tags: { in: ["${tagsIn.join('","')}"], nin: "${tagsNin}" }`
                  : ''
              }
            }
          }
          sort: { fields: [frontmatter___order], order: DESC }
          limit: $limit
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                imageUrl
                tags
              }
              excerpt
            }
          }
        }
      }
    `
    const { data } = await graphql(queryPosts)

    return (
      (data && data.allMarkdownRemark && data.allMarkdownRemark.edges) || []
    )
  }

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                contentType
                city
                coaches
                subtitle
                author
                tags
                videoOneId
                videoOneQuote
                videoOneFullname
                videoOneJob
                videoOneCompany
                videoTwoId
                videoTwoQuote
                videoTwoFullname
                videoTwoJob
                videoTwoCompany
              }
            }
          }
        }
      }
    `).then(async result => {
      const coachPath = /^\/coaches/
      const locationPath = /^\/locations\//g
      const instancePath = /^\/(react|graphql)\/training\/.*(london|berlin|amsterdam|lisbon|barcelona|paris).*/
      const citiesFinanceAvailable = ['london']
      await result.data.allMarkdownRemark.edges.forEach(async ({ node }) => {
        const { slug } = node.fields
        const { contentType } = node.frontmatter
        if (slug.match(instancePath)) {
          const city = getLastPathFromSlug(slug)
          const titleCaseCity = titleCase(city)
          const instancesToCreate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          const pathConfig = path.resolve(`./src/pages/${slug}../config.json`)
          const {
            instanceTemplate,
            tagsIn = [],
            tagsNin = '',
            ...restConfig
          } = require(pathConfig)
          const financeAvailable = !!citiesFinanceAvailable.find(
            c => city.toLowerCase() === c.toLowerCase()
          )
          const posts = await getPosts({ tagsIn, tagsNin })
          const {
            videoOneId,
            videoOneQuote,
            videoOneFullname,
            videoOneJob,
            videoOneCompany,
            videoTwoId,
            videoTwoQuote,
            videoTwoFullname,
            videoTwoJob,
            videoTwoCompany,
          } = node.frontmatter

          await Promise.all(
            instancesToCreate.map(async nth => {
              const pagePath = `${slug}${nth > 1 ? `${nth}/` : ''}`
              await createPage({
                path: pagePath,
                component: path.resolve(
                  `./src/templates/instance/${instanceTemplate}.js`
                ),
                context: {
                  videoOneId,
                  videoOneQuote,
                  videoOneFullname,
                  videoOneJob,
                  videoOneCompany,
                  videoTwoId,
                  videoTwoQuote,
                  videoTwoFullname,
                  videoTwoJob,
                  videoTwoCompany,
                  posts,
                  city: titleCaseCity,
                  financeAvailable,
                  instanceTitle: `${restConfig.title} ${titleCaseCity}`,
                  nth,
                  coaches: (node.frontmatter && node.frontmatter.coaches) || [],
                  subtitle:
                    (node.frontmatter && node.frontmatter.subtitle) || '',
                  canonical: `https://reactgraphql.academy${slug}`,
                  ...restConfig,
                },
              })
            })
          )
        } else if (contentType === 'blog') {
          const relatedPosts = await getPosts({
            tagsIn: [node.frontmatter.tags],
          })
          await createPage({
            path: slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              relatedPosts,
              slug,
            },
          })
        } else if (slug.match(coachPath)) {
          const author = getLastPathFromSlug(slug)
          const posts = author ? await getPosts({ author }) : []
          await createPage({
            path: slug,
            component: path.resolve(`./src/templates/coach.js`),
            context: {
              posts,
              slug,
              imgMaxWidth: 1000,
            },
          })
        } else if (node.fields.slug.match(locationPath)) {
          const city = getLastPathFromSlug(slug)
          const posts = city ? await getPosts({ tagsIn: [city] }) : []
          await createPage({
            path: slug,
            component: path.resolve(`./src/templates/location.js`),
            context: {
              posts,
              slug,
              imgMaxWidth: 1000,
              regex: `.src/pages/locations/${node.frontmatter.city.toLowerCase()}/gallery_images/`,
            },
          })
        } else {
          await createPage({
            path: slug,
            component: path.resolve(`./src/templates/landing.js`),
            context: {
              slug,
            },
          })
        }
      })

      resolve()
    })
  })
}

// onCreatePage is used to access the variable "imgMaxWidth" in page queries, as per: https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#pass-context-to-pages
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      imgMaxWidth: 1000,
    },
  })
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-regenerator',
    name: '@babel/plugin-transform-runtime',
  })
}

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          use: [`graphql-tag/loader`],
        },
      ],
    },
  })

  const timestamp = Date.now()
  const config = getConfig()
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        output: {
          filename: `[name]-${timestamp}-[chunkhash].js`,
          chunkFilename: `[name]-${timestamp}-[chunkhash].js`,
        },
      })
      break
  }
  return config
}
