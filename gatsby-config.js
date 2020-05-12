var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken, snipcart } = process.env

module.exports = {
  siteMetadata: {
    title: `OneShopper`,
    description: `E-Commerce site with Gatsby and React`,
    author: `@rohitguptab`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OneShopper`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oneshopper-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "6q9vs0ulnu1f",
        accessToken: "WWUSQ5gv6mmDVeIk1fObJUwATgOB0y6HkMI8xgbayhM",
      },
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey:
          "ZDk1NzBmNTYtNjYxZC00MjY2LTk0NDQtNGEzMDc0ZDZlMWNiNjM3MjQ4NDY5NDExNjIxOTg4",
        autopop: true,
      },
    },
  ],
}
