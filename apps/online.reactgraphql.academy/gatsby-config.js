/* eslint-disable @typescript-eslint/no-var-requires */

const {
  api: { projectId: sanityProjectId, dataset: sanityDataset },
} = require('../rga.studio/sanity.json');
// const {
//     api: { projectId: sanityProjectId, dataset: sanityDataset },
//   } = use local to develop

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
        url:
          process.env.GATSBY_UPMENTORING_API_URL ||
          'https://api2.upmentoring.com/graphql',
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: sanityProjectId,
        dataset: process.env.GATSBY_SANITY_DATASET || sanityDataset,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    'um-sanity-video',
    'gatsby-source-sanity-transform-images',
  ],
};
