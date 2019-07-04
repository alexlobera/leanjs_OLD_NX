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
    'gatsby-transformer-remark',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3333,
        production: false,
        disable: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/community/meetups/*`] },
    },
  ],
}
