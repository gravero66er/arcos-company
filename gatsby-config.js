const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const siteUrl = process.env.URL || 'https://arcos-holding.ru'

module.exports = {
  siteMetadata: {
    title: 'Торгово-производственный холдинг ARCOS',
    description:
      'Комплексные решения в области инженерной сантехники, строительства и производства изделий из полимеров.',
    siteUrl,
    image: '',
    author: 'Arcos',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
    'atsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        serialize: ({ site, allSitePages }) =>
          allSitePages.nodes.map(() => {
            return {
              url: `${site.siteMetadata.siteUrl}`,
              changefreq: 'weekly',
              priority: 0.5,
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://arcos-holding.ru/',
        sitemap: 'https://arcos-holding.ru/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
