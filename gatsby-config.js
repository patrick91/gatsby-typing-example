module.exports = {
  siteMetadata: {
    siteName: `Typings Example`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./images/` } }
  ]
};
