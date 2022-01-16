const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
  });
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
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      }
    }
  ],
  siteMetadata: {
    title: "Arcos",
    description: "Комплексные решения в области инженерной сантехники",
    copyright: "Copyright OOO Arcos 2022"
  }
};
