// Libraries
import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function NewsCard({
  post: { slug, title, description, tag },
  thumbImage,
}) {
  return (
    <section className="news__wrapper">
      <Link to={"/" + slug}>
        <div className="news__img">
          <GatsbyImage image={thumbImage} alt="image" />
        </div>
        <section className="news__content">
          <h3 className="news__title">{title}</h3>
          <p className="news__description article article--white">
            {description.description}
          </p>
        </section>
        <p className="tags__list">
          <span className="news__tag">{tag.name}</span>
        </p>
      </Link>
    </section>
  )
}
