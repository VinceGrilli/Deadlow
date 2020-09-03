var dotenv = require("dotenv")
dotenv.config()

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `Deadlow`,
    description: `Official band site`,
    author: `@vincegrilli`,
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
        name: `Deadlow`,
        short_name: `Deadlow`,
        start_url: `/`,
        background_color: `#b5b5b5`,
        theme_color: `#b5b5b5`,
        display: `minimal-ui`,
        icon: `src/images/deadlow-logo.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "6q9vs0ulnu1f",
        accessToken: "WWUSQ5gv6mmDVeIk1fObJUwATgOB0y6HkMI8xgbayhM",
      },
    },
  ],
}
