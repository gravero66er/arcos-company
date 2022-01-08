// Libraries
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import styled from "styled-components"

const Stage = styled.section`
  height: ${({ open }) => (open ? null : "49px")};
  .stage__arrow {
    transform: ${({ open }) => (open ? "rotate(180deg)" : "0")};
  }
  .stage__title {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
  .stage__info {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
  .stage__img {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }
`

export default function FirstHistoryStage({ color, years, title, info }) {
  const [open, setOpen] = useState(false)
  return (
    <Stage
      className="stage"
      style={{ backgroundColor: `${color}` }}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="stage__header title__wrapper title__wrapper--accordion">
        <div className="stage__dates article article--white">{years}</div>
        <svg
          open={open}
          className="stage__arrow"
          width="14"
          height="7"
          viewBox="0 0 14 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 6L10 3.5L13 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <section className="stage__content" open={open}>
        <h3 className="stage__title title__h3 title__h3--white">{title}</h3>
        <article className="stage__info article article--white">{info}</article>
      </section>
      <StaticImage
        className="stage__img"
        src="../images/first-stage.png"
        alt="основание"
        placeholder="tracedSVG"
      />
    </Stage>
  )
}
