// Libraries
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'

// Components
import Layout from '../components/common/Layout'
import { Seo } from '../components/Seo'

export default function NewsSinglePage({ data }) {
  const post = data.contentfulPost
  const mainImage = getImage(post.mainImage)
  const seoImage = post.mainImage.file.url

  return (
    <Layout>
      <section className="container">
        <Seo
          title={post.title}
          image={seoImage}
          description={post.description.description}
          keywords={post.badges.map(badge => badge.content)}
        />
        <div className="news-page">
          <Link className="news-page__link" to="/#news">
            <svg
              className="news-page__arrow"
              width="40"
              height="14"
              viewBox="0 0 40 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99985 1L1.05354 7.00684L3.08022 9.97441L5.1069 12.942"
                stroke="#dde2f3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="39.1069"
                y="7.63892"
                width="37.7906"
                height="2.01204"
                rx="1.00602"
                transform="rotate(179.486 39.1069 7.63892)"
                fill="#dde2f3"
              />
            </svg>
            <p className="news-page__nav">Назад</p>
          </Link>
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
        file {
          url
        }
      }
      body {
        raw
      }
      badges {
        content
      }
    }
  }
`
