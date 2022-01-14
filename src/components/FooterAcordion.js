import React, {useState} from "react"
import styled from "styled-components"

const Accordion = styled.div`
  height: ${({open}) => (open ? "100%" : "43px")};

  .footer__arrow {
    transform: ${({open}) => (open ? "rotate(180deg)" : 0)};
  }

  .footer__content {
    opacity: ${({open}) => (open ? 1 : 0)};
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

export default function FooterAccordion({title, children}) {
    const [open, setOpen] = useState(false)
    return (<Accordion
        className="footer__accordion"
        open={open}
        onClick={() => setOpen(!open)}
    >
        <div className="title__wrapper title__wrapper--accordion">
            <div className="footer__title title__h3 title__h3--white title__h3--small">{title}</div>
            <svg
                className="footer__arrow"
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
        <section className="footer__content">{children}</section>
    </Accordion>)
}
