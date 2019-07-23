/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

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

// regex: "/(react|graphql)/training/.*/(london|berlin|amsterdam|lisbon|barcelona)/index.js$/"
// regex: "/(react)/training/bootcamp.*/(london)/index.js$/"

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        getInstancePages: allFile(
          filter: {
            relativePath: {
              regex: "/(react)/training/bootcamp.*/(london)/index.js$/"
            }
          }
        ) {
          nodes {
            relativePath
          }
        }
      }
    `).then(result => {
      const blogPaths = /(^\/blog\/|^\/react\/|^\/graphql\/)/g
      const coachPath = /^\/coaches/
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.match(blogPaths)) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        } else if (node.fields.slug.match(coachPath)) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/coach.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        } else {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/landing.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        }
      })

      result.data.getInstancePages.nodes.forEach(node => {
        const { relativePath } = node
        const component = path.resolve(`src/${relativePath}`)
        const instanceBasePath = relativePath
          .substring(0, relativePath.lastIndexOf('/') + 1)
          .substring(relativePath.indexOf('/'))

        const instancesToCreate = [2, 3, 4, 5, 6, 8, 9]
        instancesToCreate.forEach(nth => {
          const instancePath = `${instanceBasePath}${nth}/`
          createPage({
            path: instancePath,
            component,
            context: {
              nth,
              canonicalSlug: instanceBasePath,
              slug: instancePath,
            },
          })
        })
      })

      resolve()
    })
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
