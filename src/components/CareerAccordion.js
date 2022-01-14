// Libraries
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import React, {useState} from "react"
import styled from "styled-components"

const Accordion = styled.div`
  height: ${({open}) => (open ? null : "40px")};

  .accordion__info {
    opacity: ${({open}) => (open ? 1 : 0)};
  }

  .accordion__arrow {
    transform: ${({open}) => (open ? "rotate(90deg)" : "0")};
  }

  @media (min-width: 1024px) {
    height: 100%;
    .accordion__info {
      opacity: 1;
    }
  }
`

export default function CareerAccordion({title, description, link}) {
    const [open, setOpen] = useState(false)

    return (
        <section className="accordion" onClick={() => setOpen(!open)}>
            <StaticImage
                className="accordion__img"
                src="../images/career.png"
                alt={title}
                placeholder="tracedSVG"
            />
            <Accordion className="accordion__content" open={open}>
                <div className="accrodionTitle__wrapper">
                    <h2 className="accordion__title title__h2 title__h2--white">
                        {title}
                    </h2>
                    <svg
                        className="accordion__arrow"
                        width="19"
                        height="14"
                        viewBox="0 0 19 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.0526 12.9634L17.0031 7.42774L14.9786 4.69578L12.954 1.96382"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <rect
                            x="-0.000854492"
                            y="7.08008"
                            width="17"
                            height="1"
                            transform="rotate(-0.513623 -0.000854492 7.08008)"
                            fill="white"
                        />
                    </svg>
                </div>
                <p className="accordion__info article article--white">
                    {description}
                </p>
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
