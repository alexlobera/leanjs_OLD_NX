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
      }
    `).then(result => {
      const blogPaths = /(\/blog\/|\/react\/|\/graphql\/)/g
      const meetupPath = /meetup/
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields.slug.match(blogPaths)) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug: node.fields.slug,
            },
          })
        } else if (node.fields.slug.match(meetupPath)) {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/meetup.js`),
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
      resolve()
    })
  })
}

// Webpack config

const Webpack = require('webpack')

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
