/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { getImage } from 'gatsby-plugin-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Components
import NewsCard from './NewsCard'
import TitleIcon from '../../svg/TitleIcon'
import SliderLeftArrow from '../../svg/SliderLeftArrow'
import SliderRightArrow from '../../svg/SliderRightArrow'

function NewsList({ posts }) {
  const sliderRef = useRef(null)
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="title__wrapper">
          <h2 className="title__h2">Новости</h2>
          <div className="title__icon">
            <TitleIcon path="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.792 18 7.036 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.6712 9.60278 6.21728 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16.0528 9.33639 15.7474 8.18458 15.125 7.2C14.3972 6.21728 13.2203 5.6712 12 5.75Z" />
          </div>
        </div>
        <p className="article article--half">
          «Аркос» ведет активную деятельность и не остается незамеченным. В
          разделе вы узнаете все свежие новинки, скидки и бонусы, а также важные
          интересные события в жизни компании.
        </p>
      </div>
      <div className="container--full">
        <Slider {...settings} ref={sliderRef}>
          {posts.map(post => (
            <NewsCard
              key={post.id}
              post={post}
              thumbImage={getImage(post.thumbImage)}
            />
          ))}
        </Slider>
      </div>
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
    </section>
  )
}

export default NewsList
