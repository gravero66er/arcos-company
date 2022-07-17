/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React, { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { getImage } from 'gatsby-plugin-image'

// Components
import PromoSlide from './PromoSlide'
import SliderLeftArrow from '../../svg/SliderLeftArrow'
import SliderRightArrow from '../../svg/SliderRightArrow'
import PromoPattern from '../../svg/PromoPattern'

export default function PromoSlider({ slides }) {
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    fade: true,
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
        <div
          className="slider__prev"
          onClick={() => sliderRef.current.slickPrev()}
          onKeyPress={() => sliderRef.current.slickPrev()}
          role="button"
          tabIndex="0"
        >
          <SliderLeftArrow />
        </div>
        <div
          className="slider__next"
          onClick={() => sliderRef.current.slickNext()}
          onKeyPress={() => sliderRef.current.slickNext()}
          role="button"
          tabIndex="0"
        >
          <SliderRightArrow />
        </div>
      </div>
      <div className="promo__pattern">
        <PromoPattern />
      </div>
    </section>
  )
}
