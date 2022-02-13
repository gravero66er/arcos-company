// Libraries
import { graphql } from "gatsby"
import React from "react"

// Components
import Activity from "../components/Activity"
import History from "../components/History"
import Layout from "../components/Layout"
import NewsList from "../components/NewsList"
import Philosophy from "../components/Philosophy"
import PromoSlider from "../components/PromoSlider"
import { Seo } from "../components/Seo"

export default function Home({ data }) {
  const slides = data.slides.nodes
  const posts = data.posts.nodes

  return (
    <Layout>
      <Seo />
      <PromoSlider slides={slides} />
      <section className="container">
        <h1 className="title__h1">Холдинг</h1>
        <p className="article">
          «Аркос» 一 торгово-производственный холдинг федерального уровня,
          оказывающий полный комплекс услуг по изготовлению, продаже, монтажу,
          вводу в эксплуатацию, а также сервисному обслуживанию систем
          инженерных коммуникаций. Компания имеет многолетний опыт эффективной
          работы в трех направлениях бизнеса: оптово-розничном, производственном
          и строительном.
        </p>
        <Activity />
        <History />
        <Philosophy />
      </section>
      <NewsList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    slides: allContentfulSlide {
      nodes {
        imageSmall {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        imageMiddle {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        imageBig {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        description {
          raw
        }
        title
        id
        link {
          link
        }
      }
    }
    posts: allContentfulPost(sort: { order: DESC, fields: date }) {
      nodes {
        badges {
          content
        }
        title
        description {
          description
        }
        date
        slug
        thumbImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        mainImage {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        body {
          raw
        }
        id
      }
    }
  }
`
