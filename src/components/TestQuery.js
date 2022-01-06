import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function TestQuery() {
  const data = useStaticQuery(graphql`
    query SiteMeta {
      site {
        siteMetadata {
          copyright
          title
          description
        }
      }
    }
  `)
  const { title, description, copyright } = data.site.siteMetadata

  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
      <p>{copyright}</p>
    </div>
  )
}
