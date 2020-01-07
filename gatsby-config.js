const {
  api: { projectId: sanityProjectId, dataset: sanityDataset },
} = require('./studio/sanity.json')
const PortableText = require('@sanity/block-content-to-html')
// `hyperscript` is a way to build HTML known as hyperscript
// See https://github.com/hyperhype/hyperscript for more info
const hyperscript = PortableText.h
const {
  getPostsFromNodes,
  getContents,
  createPortableTextListItem,
} = require('./src/components/blog/utils')

require('dotenv').config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: 'React & GraphQL Expert Training | React GraphQL Academy',
    description:
      'Looking for React and GraphQL expert training? React GraphQL Academy offers in-person real-world training by our experts. Contact us now!',
    siteUrl: `https://www.reactgraphql.academy/`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://reactgraphql.academy/',
        sitemap: 'https://reactgraphql.academy/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MVK4HZS',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/images/`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanityProjectId,
        dataset: sanityDataset,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3334,
        production: true,
        disable: true,
      },
    },
    'gatsby-source-sanity-transform-images',
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'UpMentoring',
        fieldName: 'upmentoring',
        // url: 'https://api0.upmentoring.com/api/graphql',
        url:
          'https://europe-west1-upmentoring-api.cloudfunctions.net/api/graphql',
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
          `,
        feeds: [
          {
            serialize: ({
              query: { site, allSanityPost = [], allSanityImageAsset },
            }) => {
              const posts = getPostsFromNodes({
                sanityNodes: allSanityPost.nodes,
              })

              const { siteUrl } = site.siteMetadata

              const { nodes: bodyImageNodes = [] } = allSanityImageAsset || {}
              const bodyImagePublicURLs = bodyImageNodes.reduce(
                (acc, { localFile = {}, id }) => {
                  const { publicURL = '' } = localFile
                  acc[id] =
                    publicURL.indexOf('http') === 0 || !siteUrl
                      ? publicURL
                      : `${siteUrl}${publicURL}`

                  return acc
                },
                {}
              )

              return posts.map(node => {
                const { title, publishedAt, _rawBody, excerpt } = node
                const url = siteUrl + node.path
                const contentsBlockList = getContents({
                  rawBody: _rawBody,
                }).map(createPortableTextListItem)

                const rawBodyWithContents = [...contentsBlockList, ..._rawBody]

                return {
                  title: title,
                  date: publishedAt,
                  description: excerpt,
                  url,
                  guid: url,
                  custom_elements: [
                    {
                      'content:encoded': PortableText({
                        blocks: rawBodyWithContents,
                        serializers: {
                          marks: {
                            link: ({ mark, children }) => {
                              const baseUrl =
                                siteUrl.slice(-1) === '/'
                                  ? siteUrl.slice(0, -1)
                                  : siteUrl
                              const href =
                                mark.href &&
                                mark.href.match(
                                  /^(https:\/\/*|http:\/\/*|mailto:*)/
                                )
                                  ? mark.href
                                  : mark.href
                                  ? `${baseUrl}${mark.href}`
                                  : ''
                              return hyperscript(
                                'a',
                                {
                                  href,
                                },
                                children
                              )
                            },
                          },
                          types: {
                            image: ({ node }) => {
                              return hyperscript('img', {
                                src: bodyImagePublicURLs[node.asset.id],
                              })
                            },
                            code: ({ node }) =>
                              hyperscript(
                                'pre',
                                hyperscript(
                                  'code',
                                  { lang: node.language },
                                  node.code
                                )
                              ),
                            mainImage: ({ node }) =>
                              hyperscript('img', {
                                src: node.fluidImage.src,
                              }),
                            tweet: ({ node }) =>
                              hyperscript(
                                'p',
                                {},
                                hyperscript('a', {
                                  href: `https://twitter.com/user/status/${node.id}`,
                                  innerHTML: 'Look at the tweet.',
                                })
                              ),
                            youtube: ({ node }) =>
                              hyperscript(
                                'p',
                                {},
                                hyperscript('a', {
                                  href: `https://www.youtube.com/watch?v=${
                                    node.videoId
                                  }${
                                    node.startSecond
                                      ? `&start=${node.startSecond}`
                                      : ''
                                  }`,
                                  innerHTML: `Related video ${
                                    node.description
                                      ? `about: "${node.description}"`
                                      : ''
                                  }.`,
                                })
                              ),
                            codesandbox: ({ node }) =>
                              hyperscript(
                                'p',
                                {},
                                hyperscript('a', {
                                  href: `https://codesandbox.io/s/${node.id}`,
                                  innerHTML: `Look at this codesandbox`,
                                })
                              ),
                          },
                        },
                      }),
                    },
                  ],
                }
              })
            },
            query: `{
                allSanityPost(sort: {fields: publishedAt, order: DESC}) {
                    nodes {
                      _rawBody(resolveReferences: {maxDepth: 10})
                      id
                      title
                      publishedAt
                      category
                      excerpt
                      slug {
                        current
                      }
                    }
                }
                allSanityImageAsset {
                    nodes {
                      id
                      localFile(width: 650) {
                        publicURL
                      }
                    }
                  }
              }
              `,
            output: '/rss.xml',
            title: 'React GraphQL Academy RSS Feed',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
          },
        ],
      },
    },
  ],
}
