import React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

function Vacancy({ vacancy: { position, description, skills, salary, link } }) {
  return (
    <section className="vacancy">
      <h3 className="title__h3 vacancy__title">{position}</h3>
      <p className="article vacancy__description">
        {renderRichText(description)}
      </p>
      <h4 className="title__h4 vacancy__subtitle">Что нужно уметь:</h4>
      <p className="article vacancy__skills">{renderRichText(skills)}</p>
      <h4 className="title__h4 vacancy__salary">{salary}</h4>
      <Link className="vacancy__button" target="_blank" rel="norefer" to={link}>
        Полная вакансия
      </Link>
    </section>
  )
}

export default Vacancy
