const {
  api: { projectId: sanityProjectId, dataset: sanityDataset },
} = require('../rga.studio/sanity.json');

module.exports = {
  siteMetadata: {
    title: `online.reactgraphql.academy`,
    description: `This is a gatsby application created by Nx.`,
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
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'UpMentoring',
        fieldName: 'upmentoring',
        //url: 'https://api2.upmentoring.com/graphql',
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
