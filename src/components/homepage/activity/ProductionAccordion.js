/* eslint-disable implicit-arrow-linebreak */
// Libraries
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import ActivityArrow from '../../svg/ActivityArrow'

const Accordion = styled.div`
  height: ${({ open }) => (open ? null : '40px')};

  .accordion__info {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }

  .accordion__arrow {
    transform: ${({ open }) => (open ? 'rotate(90deg)' : '0')};
  }

  @media (min-width: 1024px) {
    height: 100%;
    .accordion__info {
      opacity: 1;
    }
  }
`

export default function ProductionAccordion({ title, description, link }) {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="accordion"
      onClick={() => setOpen(!open)}
      onKeyPress={() => setOpen(!open)}
      role="button"
      tabIndex="0"
    >
      <StaticImage
        className="accordion__img"
        src="../../../images/production.png"
        alt={title}
        placeholder="tracedSVG"
      />
      <Accordion className="accordion__content" open={open}>
        <div className="accordionTitle__wrapper">
          <h2 className="accordion__title title__h2 title__h2--white">
            {title}
          </h2>
          <div className="accordion__arrow">
            <ActivityArrow />
          </div>
        </div>
        <p className="accordion__info article article--white">{description}</p>
        <Link
          className="accordion__button"
          target="_blank"
          rel="norefer"
          to={link}
        >
          Узнать больше
        </Link>
      </Accordion>
    </section>
  )
}
