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
              }
            }
          }
        }

        getTrainingPages: allFile(
          filter: {
            relativePath: { regex: "/(react|graphql)/training/.*/index2.js/" }
          }
        ) {
          nodes {
            relativePath
          }
        }
        # getInstancePages: allFile(
        #   filter: {
        #     relativePath: {
        #       regex: "/(react|graphql)/training/.*/?!(london|berlin|amsterdam|lisbon|barcelona)/index.js$/"
        #     }
        #   }
        # ) {
        #   nodes {
        #     relativePath
        #   }
        # }
      }
    `).then(result => {
      const blogPaths = /(^\/blog\/|^\/react\/|^\/graphql\/)/g
      const coachPath = /^\/coaches/
      const locationPath = /^\/locations\//g
      const instancePath = /\/(react|graphql)\/training\/.*\/(london|berlin|amsterdam|lisbon|barcelona)/
      // /react/training/workshops/redux/london/"
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const { slug } = node.fields
        if (slug.match(instancePath)) {
          const slugNoTrailingSlash = slug.replace(/\/$/g, '')
          const slugArray = slugNoTrailingSlash.split('/')
          const city = slugArray.pop()
          const titleCaseCity = titleCase(city)
          const {
            TargetAudienceList,
            Curriculum,
            title,
            type,
            crossSellTypes,
            WORKSHOP_TRAINING_ID,
            trainingType,
            tech,
            trainingName,
          } = require(`./src/pages${slugArray.join('/')}/training.config.jsx`)

          const instanceBasePath = slugNoTrailingSlash
            .substring(0, slugNoTrailingSlash.lastIndexOf('/') + 1)
            .substring(slugNoTrailingSlash.indexOf('/'))
          /*
        
const pathTech = `/${tech.toLowerCase()}/`
const pathTraining = `${pathTech}training/`
const pathTrainingType = `/${pathTraining}/${trainingType.toLowerCase()}/`
const pathTrainingName = `/${pathTrainingType}/${trainingName.toLowerCase()}/`
const subtitle =
  'Learn how Redux and React work together in practice in this 1-day workshop in London, from Redux fundamentals and FP through to Redux Middlewares'
const coaches = [ALEX_LOBERA, RICHARD_MOSS]
const Curriculum = CurriculumOneDayRedux
          */

          createPage({
            path: slug,
            component: path.resolve(`./src/templates/training-instance.js`),
            context: {
              trainingId: WORKSHOP_TRAINING_ID,
              instanceTitle: `${title} In ${titleCaseCity}`,
              crossSellTypes,
              city: titleCaseCity,
              TargetAudienceList,
              Curriculum,
              type,
              trainingType,
              tech,
              trainingName,
              canonical: `https://reactgraphql.academy${instanceBasePath}`,
            },
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

      result.data.getTrainingPages.nodes.forEach(node => {
        const { relativePath } = node
        const template = path.resolve(`./src/templates/training.js`)
        if (!relativePath.match(instancePath)) {
          //const instancePath = `${instanceBasePath}${nth}/`
          console.log('noooooo matcg')
          const path = relativePath
            .substring(0, relativePath.lastIndexOf('/') + 1)
            .substring(relativePath.indexOf('/'))
          const p = `./src/${relativePath}`
          const comp = require(p)
          console.log('ddddsadfads fasd f', comp)
          createPage({
            component: template,
            path,
            context: {
              childrenComponent: comp,
              A: {
                b: 'asfadsf',
                c: () => {
                  return 'aaaa'
                },
                d: comp,
              },
              B: 'aaaa',
              C: [11, 222, '3333'],
            },
          })
        } else {
          console.log('noooooo matcg')
        }
      })

      // result.data.getInstancePages.nodes.forEach(node => {
      //   const { relativePath } = node
      //   const component = path.resolve(`src/${relativePath}`)
      //   const instanceBasePath = relativePath
      //     .substring(0, relativePath.lastIndexOf('/') + 1)
      //     .substring(relativePath.indexOf('/'))

      // const instancesToCreate = [2, 3, 4, 5, 6, 8, 9]
      // instancesToCreate.forEach(nth => {
      //   const instancePath = `${instanceBasePath}${nth}/`
      //   createPage({
      //     path: instancePath,
      //     component,
      //     context: {
      //       nth,
      //       canonical: `https://reactgraphql.academy${instanceBasePath}`,
      //     },
      //   })
      // })
      // })

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
