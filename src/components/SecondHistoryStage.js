// Libraries
import {StaticImage} from "gatsby-plugin-image"
import React, {useState} from "react"
import styled from "styled-components"

// Components
import StageArrow from "./svg/StageArrow";

const Stage = styled.section`
  height: ${({open}) => (open ? null : "49px")};

  .stage__arrow {
    transform: ${({open}) => (open ? "rotate(180deg)" : "0")};
  }

  .stage__title {
    opacity: ${({open}) => (open ? 1 : 0)};
  }

  .stage__info {
    opacity: ${({open}) => (open ? 1 : 0)};
  }

  .stage__img {
    opacity: ${({open}) => (open ? 1 : 0)};
  }
`

export default function SecondHistoryStage({color, years, title, info}) {
    const [open, setOpen] = useState(false)
    return (
        <Stage
            className="stage"
            style={{backgroundColor: `${color}`}}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <div className="stage__header title__wrapper title__wrapper--accordion">
                <div className="stage__dates article">{years}</div>
                <div className='stage__arrow'>
                    <StageArrow color={'#1F1C2E'}/>
                </div>
            </div>
            <section className="stage__content">
                <h3 className="stage__title title__h3">{title}</h3>
                <article className="stage__info article">{info}</article>
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
