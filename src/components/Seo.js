import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export const Seo = ({ title, description, keywords, url, author, image }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaTitle = title || data.site.siteMetadata.title
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaAuthor = author || data.site.siteMetadata.author
        const metaKeywords = keywords || [
          "Производство из полимеров",
          "Инженерная сантехника",
          "Комплектация строительства",
          "Проектирование систем",
        ]
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "og:title",
                content: metaTitle,
              },
              {
                name: "og:description",
                content: metaDescription,
              },
              {
                name: "og:image",
                content: metaImage,
              },
              {
                name: "og:type",
                content: "website",
              },
              {
                name: "og:url",
                content: metaUrl,
              },
              {
                name: "creator",
                content: metaAuthor,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: "keywords",
                    content: metaKeywords.join(", "),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
        image
      }
    }
  }
`
