/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My Blog",
    author: "Ari Asril",
    description: "My first and main blog.",
    siteUrl: "https://pratama.gtsb.io",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/airilsra",
      },
      {
        name: "github",
        url: "https://github.com/aasril"
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
  ],
}
