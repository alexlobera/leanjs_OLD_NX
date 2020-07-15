/* eslint-disable @typescript-eslint/no-var-requires */

const {
  api: { projectId: sanityProjectId, dataset: sanityDataset },
} = require('../rga.studio/sanity.json');

module.exports = {
  siteMetadata: {
    title: 'Online Courses | React GraphQL Academy',
    description: 'Online React and GraphQL courses by React GraphQL Academy',
    siteUrl: `https://online.reactgraphql.academy/`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: require.resolve(`@nrwl/gatsby/plugins/nx-gatsby-ext-plugin`),
      options: {
        path: __dirname,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `online.reactgraphql.academy`,
        start_url: `/`,
        icon: `src/images/logo.png`,
        lang: `en`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'UpMentoring',
        fieldName: 'upmentoring',
        // url: 'https://api2.upmentoring.com/graphql',
        url: 'http://localhost:3334/graphql',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanityProjectId,
        dataset: sanityDataset,
      },
    },
  ],
};
