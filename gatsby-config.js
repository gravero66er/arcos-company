const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
  siteMetadata: {
    title: "Торгово-производственный холдинг ARCOS",
    description:
      "Комплексные решения в области инженерной сантехники, строительства и производства изделий из полимеров.",
    url: "https://arcos-holding.com",
    image: "",
    author: "Arcos",
  },
}
