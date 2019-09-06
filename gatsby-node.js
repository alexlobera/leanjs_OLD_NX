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
        allSanityPost(sort: { order: ASC, fields: order }) {
          nodes {
            _rawBody(resolveReferences: { maxDepth: 5 })
            readingTimeInMinutes
            id
            category
            slug {
              current
            }
            tags {
              name
            }
          }
        }

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
                videoOneTime
                videoOneId
                videoOneQuote
                videoOneFullname
                videoOneJob
                videoOneCompany
                videoTwoTime
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
      const coachPath = /^\/team/
      const locationPath = /^\/locations\//g
      const instancePath = /^\/(react|graphql)\/training\/.*(london|berlin|amsterdam|lisbon|barcelona|paris).*/
      const citiesFinanceAvailable = ['london']

      await Promise.all(
        result.data.allSanityPost.nodes.map(
          async ({
            id,
            slug: { current: currentSlug },
            category,
            tags = [],
            _rawBody = [],
            readingTimeInMinutes,
          }) => {
            const relatedPosts = await getPosts({
              tagsIn: tags.map(t => t.name),
            })

            const sanityImageAssetIds = _rawBody.reduce(
              (images, { _type, asset = {} }) => {
                if (_type === 'image' && asset._id) {
                  return [...images, asset._id]
                }
                return images
              },
              []
            )

            await createPage({
              path: `/${category}/${currentSlug}`,
              component: path.resolve(`./src/templates/blog-post-sanity.js`),
              context: {
                relatedPosts,
                id,
                slug: currentSlug,
                timeToRead: readingTimeInMinutes,
                sanityImageAssetIds,
              },
            })
          }
        )
      )

      await Promise.all(
        result.data.allMarkdownRemark.edges.map(async ({ node }) => {
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
              videoOneTime,
              videoOneId,
              videoOneQuote,
              videoOneFullname,
              videoOneJob,
              videoOneCompany,
              videoTwoTime,
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
                    videoOneTime,
                    videoOneId: videoOneId ? videoOneId : '6hmKu1-vW-8',
                    videoOneQuote,
                    videoOneFullname,
                    videoOneJob,
                    videoOneCompany,
                    videoTwoTime,
                    videoTwoId: videoTwoId ? videoTwoId : 'blg40SCle7I',
                    videoTwoQuote: videoTwoQuote
                      ? videoTwoQuote
                      : "We're moving to React so I've looked at the codebase to identify where we could be using advanced patterns...",
                    videoTwoFullname: videoTwoFullname
                      ? videoTwoFullname
                      : 'Lara Ramey',
                    videoTwoJob: videoTwoJob
                      ? videoTwoJob
                      : 'Software Developer',
                    videoTwoCompany: videoTwoCompany
                      ? videoTwoCompany
                      : 'Meredith Corporation',
                    posts,
                    city: titleCaseCity,
                    financeAvailable,
                    instanceTitle: `${restConfig.title} ${titleCaseCity}`,
                    nth,
                    coaches:
                      (node.frontmatter && node.frontmatter.coaches) || [],
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
              component: path.resolve(`./src/templates/blog-post-markdown.js`),
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
              component: path.resolve(`./src/templates/team.js`),
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
      )

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
