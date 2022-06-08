module.exports = {
  siteMetadata: {
    title: `Siddharth Tumre`,
    siteUrl: `https://siddharthtumre.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`
  ],
}
