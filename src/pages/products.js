import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

// Components
import ProductsBanner from "../components/ProductsBanner"
import Brands from "../components/Brands"
import Projects from "../components/Projects"
import CallbackForm from "../components/CallbackForm"
import { Seo } from "../components/Seo"

export default function Products({ data }) {
  const products = data.products.nodes
  const brands = data.brands.nodes
  const developments = data.development.nodes

  return (
    <Layout>
      <Seo
        title={"Инженераная сантехника"}
        description={
          "Многообразие брендов для самых разнообразных инженерных решений: DAB, Фарфор, Профсан, LD, Buderus, Con-pipe, Sanha, Hoft."
        }
        keywords={[
          "DAB",
          "Фарфор",
          "Профсан",
          "LD",
          "Buderus",
          "Con-pipe",
          "Sanha",
          "Hoft",
        ]}
      />
      <ProductsBanner products={products} />
      <section className="container">
        <h1 className="title__h1" id="brands">
          Продукты
        </h1>
        <p className="article">
          «Аркос» являетя официальным представителем производителей из России,
          Европы и Азии. В нашем товарном портфеле вы сможете выбрать для себя
          оптимальные по цене и качеству комплектующие и присоединиться к числу
          наших постоянных клиентов.
        </p>
        <Brands brands={brands} />
      </section>
      <Projects projects={developments} />
      <article className="container" id="feedback">
        <CallbackForm />
      </article>
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProducts {
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
      }
    }
    brands: allContentfulBrand {
      nodes {
        title
        description
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
    development: allContentfulProject {
      nodes {
        badges {
          content
        }
        title
        description {
          raw
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        id
      }
    }
  }
`
