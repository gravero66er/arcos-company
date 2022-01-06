import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default function PromoSlide({
  slide: { title, description, link },
  imageSmall,
  imageMiddle,
  imageBig,
}) {
  return (
    <section className="slide">
      <div className="slide__image slide__image--small">
        <GatsbyImage image={imageSmall} alt="image" />
      </div>
      <div className="slide__image slide__image--middle">
        <GatsbyImage image={imageMiddle} alt="image" />
      </div>
      <div className="slide__image slide__image--big">
        <GatsbyImage image={imageBig} alt="image" />
      </div>
      <section className="container slide__content">
        <h3 className="slide__title title__h3 title__h3--white">{title}</h3>
        <p className="slide__description article article--white ">
          {renderRichText(description)}
        </p>
        <Link
          className="slide__button"
          target="_blank"
          rel="norefer"
          to={link.link}
        >
          Узнать больше
        </Link>
      </section>
    </section>
  )
}
