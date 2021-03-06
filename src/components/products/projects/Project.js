/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// eslint-disable-next-line no-unused-vars
function Project({ project: { id, title, badges, description }, image }) {
  return (
    <section className="project" key={id}>
      <h3 className="project__title title__h3 title__h3--small">«{title}»</h3>
      <GatsbyImage className="project__img" alt="projectImage" image={image} />
      <div className="project__badges">
        {badges.map(badge => (
          <span className="tag article article--tip" key={badge.id}>
            {badge.content}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Project
