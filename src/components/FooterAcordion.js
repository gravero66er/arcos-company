// Libraries
import React, { useState } from "react"
import styled from "styled-components"

// Components
import StageArrow from "./svg/StageArrow"

const Accordion = styled.div`
  height: ${({ open }) => (open ? "100%" : "43px")};

  .footer__arrow {
    transform: ${({ open }) => (open ? "rotate(180deg)" : 0)};
  }

  .footer__content {
    opacity: ${({ open }) => (open ? 1 : 0)};
  }

  @media (min-width: 1024px) {
    height: 100%;
    .footer__content {
      opacity: 1;
    }

    .footer__arrow {
      display: none;
    }
  }
`

export default function FooterAccordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <Accordion
      className="footer__accordion"
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="title__wrapper title__wrapper--accordion">
        <div className="footer__title title__h3 title__h3--white title__h3--small">
          {title}
        </div>
        <div className="footer__arrow">
          <StageArrow color={"#fff"} />
        </div>
      </div>
      <section className="footer__content">{children}</section>
    </Accordion>
  )
}
