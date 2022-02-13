// Libraries
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/Layout"
import CareerBanner from "../components/CareerBanner"
import Culture from "../components/Culture"
import Profile from "../components/Profile"
import Openings from "../components/Openings"
import { Seo } from "../components/Seo"

export default function Career({ data }) {
  const career = data.career.nodes
  const openings = data.openings.nodes
  return (
    <Layout>
      <Seo
        title={"Карьера в ARCOS"}
        description={
          "Возможность построить карьеру в большой и надежной компании."
        }
        keywords={[
          "Карьера",
          "Вакансии",
          "Работа инженером",
          "Профессиональный рост",
          "Работа в строительстве",
        ]}
      />
      <CareerBanner career={career} />
      <section className="container">
        <h1 className="title__h1">Карьера</h1>
        <p className="article">
          Работаем по правилу Буравчика: чтобы продвигаться, надо вертеться.
          Только активные и целеустремленные люди добиваются успеха и строят
          карьеру в компании «Аркос».
        </p>
      </section>
      <Culture />
      <Openings openings={openings} />
      {/* <section className="container">
        <Profile />
      </section> */}
    </Layout>
  )
}

export const query = graphql`
  {
    career: allContentfulCareer {
      nodes {
        imageBig {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        imageMiddle {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        imageSmall {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        title
      }
    }
    openings: allContentfulVacancy {
      nodes {
        id
        position
        description {
          raw
        }
        skills {
          raw
        }
        salary
        link
      }
    }
  }
`
