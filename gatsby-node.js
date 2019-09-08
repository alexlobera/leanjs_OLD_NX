/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { titleCase } = require('./src/components/utils/text')
const getPostsFromNodes = require('./src/components/blog/getPostsFromNodes')

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
  return slugArray.pop()
}

function getFirstPathFromSlug(slug) {
  const slugArray = slug.split('/')
  return slugArray[1]
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const getPosts = async ({ tagsIn = [], tagsNin = '', limit = 3 }) => {
    // TODO move this getPosts function to src/templates/baseTemplate somehow.
    // It's not clear at this point how to do it because baseTemplate is not really a template and so it's not treated as such by Gatsby.
    // The problem with this code is that we are duplicating the fragments defined in PostCard component
    const queryPosts = `
      query getPosts($limit: Int = ${limit}) {
        sanityNodes: allSanityPost(
          filter: {   
            ${
              tagsNin || tagsIn.length
                ? `tags: { elemMatch: { name: { in : ["${tagsIn.join(
                    '","'
                  )}"], nin: "${tagsNin}" }}}`
                : ''
            }
          }
          sort: { fields: publishedAt, order: DESC }
          limit: 3
        ) {
          nodes {
            title
            excerpt
            category
            mainImage {
              asset {
                localFile(width: 500, height: 333) {
                  publicURL
                }
              }
            }
            slug {
              current
            }
          }
        }
        markdownPosts: allMarkdownRemark(
          filter: {
            frontmatter: {
              contentType: { eq: "blog" }
              ${
                tagsNin || tagsIn.length
                  ? `tags: { in: ["${tagsIn.join('","')}"], nin: "${tagsNin}" }`
                  : ''
              }
            }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: $limit
        ) {
          nodes {
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
    `

    const { data } = await graphql(queryPosts)

    return getPostsFromNodes({
      markdownNodes: data.markdownPosts && data.markdownPosts.nodes,
      sanityNodes: data.sanityNodes && data.sanityNodes.nodes,
    })
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

        teamPages: allSanityPerson {
          nodes {
            username {
              current
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
      const locationPath = /^\/locations\//g
      const instancePath = /^\/(react|graphql)\/training\/.*(london|berlin|amsterdam|lisbon|barcelona|paris).*/
      const citiesFinanceAvailable = ['london']

      await Promise.all(
        result.data.teamPages.nodes.map(({ username: { current } }) =>
          createPage({
            path: `/team/${current}`,
            component: path.resolve(`./src/templates/team-member.js`),
            context: {
              username: current,
            },
          })
        )
      )

      await Promise.all(
        result.data.allSanityPost.nodes.map(
          async ({
            id,
            slug: { current: currentSlug },
            category,
            tags = [],
            _rawBody = [],
          }) => {
            const sanityImageAssetIds = _rawBody.reduce(
              (images, { _type, asset = {} }) => {
                if (_type === 'image' && asset._id) {
                  return [...images, asset._id]
                }
                return images
              },
              []
            )
            const tagsNoDuplicates = [
              ...new Set([...tags.map(t => t.name), category]),
            ]

            await createPage({
              path: `/${category}/${currentSlug}`,
              component: path.resolve(`./src/templates/blog-post-sanity.js`),
              context: {
                tags: tagsNoDuplicates,
                id,
                slug: currentSlug,
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
            const tagsInNoDuplicates = [
              ...new Set([...tagsIn, restConfig.tech.toLowerCase()]),
            ]
            const posts = await getPosts({
              tagsIn: tagsInNoDuplicates,
              tagsNin,
            })
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
            const category = getFirstPathFromSlug(slug)
            const tagsInNoDuplicates = [
              ...new Set([...node.frontmatter.tags, category]),
            ]
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/blog-post-markdown.js`),
              context: {
                tags: tagsInNoDuplicates,
                slug,
              },
            })
          } else if (node.fields.slug.match(locationPath)) {
            const citySlug = getLastPathFromSlug(slug)
            await createPage({
              path: slug,
              component: path.resolve(`./src/templates/location.js`),
              context: {
                citySlug,
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
