/* eslint no-undef: 0 */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// init GTM for Google Ads
exports.onRouteUpdate = ({ location }) => {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'AW-877316317')
}
