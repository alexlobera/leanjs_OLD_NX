const {
  api: { projectId: sanityProjectId, dataset: sanityDataset },
} = require('./studio/sanity.json')

module.exports = {
  siteMetadata: {
    title: 'React & GraphQL Expert Training | React GraphQL Academy',
    description:
      'Looking for React and GraphQL expert training? React GraphQL Academy offers in-person real-world training by our experts. Contact us now!',
    siteUrl: `https://www.reactgraphql.academy`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
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
    'gatsby-source-sanity-transform-images',
    'gatsby-source-sanity-transform-text',
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
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/community/meetups/*`] },
    },
  ],
}
