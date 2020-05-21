/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-MJZKQ28",
        includeInDevelopment: false,
      },
    },
  ],
}
