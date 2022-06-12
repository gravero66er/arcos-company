// Libraries
import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Components
import TitleIcon from "../../svg/TitleIcon"
import SliderLeftArrow from "../../svg/SliderLeftArrow"
import SliderRightArrow from "../../svg/SliderRightArrow"
import Vacancy from "./Vacancy"

function Openings({ openings }) {
  const sliderRef = useRef(null)
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          autoplay: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="openings" id="openings">
      <div className="container">
        <div className="title__wrapper">
          <h2 className="title__h2" id="vacancy">
            Вакансии
          </h2>
          <div className="title__icon">
            <TitleIcon
              path={
                "M9 3a5 5 0 100 10A5 5 0 009 3zM6 8a3 3 0 116 0 3 3 0 01-6 0zM16.908 8.218A2 2 0 0016 8V6a4 4 0 11-2.357 7.232l1.178-1.616a2 2 0 102.087-3.398zM19.998 21A3.999 3.999 0 0016 17.002V15a6.001 6.001 0 016 6h-2.002zM16 21h-2a5 5 0 00-10 0H2a7 7 0 1114 0z"
              }
            />
          </div>
        </div>
      </div>
      <section className="container">
        <Slider {...settings} ref={sliderRef}>
          {openings.map(vacancy => (
            <Vacancy vacancy={vacancy} key={vacancy.id} />
          ))}
        </Slider>
        <div className="slider__buttons">
          <span
            className="slider__prev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <SliderLeftArrow />
          </span>
          <span
            className="slider__next"
            onClick={() => sliderRef.current.slickNext()}
          >
            <SliderRightArrow />
          </span>
        </div>
      </section>
    </section>
  )
}

export default Openings
