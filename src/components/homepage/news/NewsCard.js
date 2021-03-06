/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function NewsCard({
  post: { slug, title, description, badges },
  thumbImage,
  key,
}) {
  return (
    <section className="news__wrapper" key={key}>
      <Link to={`/${slug}`}>
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
          {badges.map(badge => (
            <span className="tag article article--tip" key={badge.id}>
              {badge.content}
            </span>
          ))}
        </p>
      </Link>
    </section>
  )
}
