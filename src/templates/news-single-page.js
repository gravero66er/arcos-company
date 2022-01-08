// Libraries
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"

// Components
import Layout from "../components/Layout"

export default function NewsSinglePage({ data }) {
  const post = data.contentfulPost
  const mainImage = getImage(post.mainImage)
  console.log(post)
  return (
    <Layout>
      <section className="container">
        <div className="news-page">
          <h1 className="news-page__title title__h1 title__h1--post">
            {post.title}
          </h1>
          <p className="news-page__description article">
            {post.description.description}
          </p>
          <p className="news-page__date article--tip">{post.date}</p>
          <GatsbyImage
            className="news-page__img"
            image={mainImage}
            alt="image"
          />
          <section className="news-page__body">
            {renderRichText(post.body)}
          </section>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Posts($slug: String) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      date(formatString: "DD.MM.YYYY")
      mainImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }
      body {
        raw
      }
    }
  }
`
