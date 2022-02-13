// Libraries
import React, { useRef } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { getImage } from "gatsby-plugin-image"

// Components
import PromoSlide from "./PromoSlide"
import SliderLeftArrow from "./svg/SliderLeftArrow"
import SliderRightArrow from "./svg/SliderRightArrow"
import PromoPattern from "./svg/PromoPattern"

export default function PromoSlider({ slides }) {
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <section className="promo">
      <Slider {...settings} ref={sliderRef}>
        {slides.map(slide => (
          <PromoSlide
            key={slide.id}
            slide={slide}
            imageSmall={getImage(slide.imageSmall)}
            imageMiddle={getImage(slide.imageMiddle)}
            imageBig={getImage(slide.imageBig)}
          />
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
      <div className="promo__pattern">
        <PromoPattern />
      </div>
    </section>
  )
}
