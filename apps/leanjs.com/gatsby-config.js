module.exports = {
  siteMetadata: {
    title: `leanjs.com`,
    description: `This is a gatsby application created by Nx.`,
  },
  plugins: [
    'gatsby-plugin-styled-components',

    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgo: false,
        ref: true,
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
  ],
};
