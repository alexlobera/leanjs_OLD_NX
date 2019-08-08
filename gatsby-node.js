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
              frontmatter {
                city
                coaches
                subTitle
              }
            }
          }
        }
      }
    `).then(result => {
      const blogPaths = /(^\/blog\/|^\/react\/|^\/graphql\/)/g
      const coachPath = /^\/coaches/
      const locationPath = /^\/locations\//g
      const instancePath = /^\/(react|graphql)\/training\/.*(london|berlin|amsterdam|lisbon|barcelona|paris).*/
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.fields
        if (slug.match(instancePath)) {
          const slugNoTrailingSlash = slug.replace(/\/$/g, '')
          const slugArray = slugNoTrailingSlash.split('/')
          const city = slugArray.pop()
          const titleCaseCity = titleCase(city)
          const instancesToCreate = [1, 2, 3, 4, 5, 6, 7, 8, 9]
          const pathConfig = path.resolve(`./src/pages/${slug}../config.json`)
          const { instanceTemplate, ...restConfig } = require(pathConfig)
          instancesToCreate.forEach(nth => {
            const pagePath = `${slug}${nth > 1 ? `${nth}/` : ''}`
            createPage({
              path: pagePath,
              component: path.resolve(
                `./src/templates/instance/${instanceTemplate}.js`
              ),
              context: {
                city: titleCaseCity,
                instanceTitle: `${restConfig.title} in ${titleCaseCity}`,
                nth,
                coaches: (node.frontmatter && node.frontmatter.coaches) || [],
                subTitle: (node.frontmatter && node.frontmatter.subTitle) || '',
                canonical: `https://reactgraphql.academy${slug}`,
                ...restConfig,
              },
            })
          })
        } else if (slug.match(blogPaths)) {
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
              slug,
            },
          })
        } else if (slug.match(coachPath)) {
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/coach.js`),
            context: {
              slug,
              imgMaxWidth: 1000,
            },
          })
        } else if (node.fields.slug.match(locationPath)) {
          createPage({
            path: slug,
            component: path.resolve(`./src/templates/location.js`),
            context: {
              slug,
              imgMaxWidth: 1000,
              regex: `.src/pages/locations/${node.frontmatter.city.toLowerCase()}/gallery_images/`,
            },
          })
        } else {
          createPage({
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
