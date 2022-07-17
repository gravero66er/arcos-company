// Libraries
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProductsPattern from '../svg/ProductsPattern'

// Components

function ProductsBanner({ products }) {
  const imageSmall = getImage(products[0].imageSmall)
  const imageMiddle = getImage(products[0].imageMiddle)
  const imageBig = getImage(products[0].imageBig)
  return (
    <section className="products__banner">
      <div className="products__image products__image--small">
        <GatsbyImage image={imageSmall} alt="image" />
      </div>
      <div className="products__image products__image--middle">
        <GatsbyImage image={imageMiddle} alt="image" />
      </div>
      <div className="products__image products__image--big">
        <GatsbyImage image={imageBig} alt="image" />
      </div>
      <section className="container products__content">
        <h3 className="products__title title__h3 title__h3--white">
          Бренды и продукты
        </h3>
        <p className="products__description article article--white ">
          Среди наших поставщиков и партнёров крупные международные компании и
          заводы. В нашем товарном портфеле вы сможете найти множество
          качественных решений по оптимальным ценам.
        </p>
      </section>
      <div className="products__pattern">
        <ProductsPattern />
      </div>
    </section>
  )
}

export default ProductsBanner
