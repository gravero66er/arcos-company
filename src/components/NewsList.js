// Libraries
import React, {useRef} from "react"
import Slider from "react-slick"
import {getImage} from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Components
import NewsCard from "./NewsCard"

const NewsList = ({posts}) => {
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
                    <svg
                        className="title__icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H14V4.18C16.579 4.792 18 7.036 18 10.5V16L20 17V19ZM12 5.75C10.7797 5.6712 9.60278 6.21728 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16.0528 9.33639 15.7474 8.18458 15.125 7.2C14.3972 6.21728 13.2203 5.6712 12 5.75Z"
                            fill="#2E1C1C"
                        />
                    </svg>
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
                            post={post}
                            thumbImage={getImage(post.thumbImage)}
                            key={post.id}
                        />
                    ))}
                </Slider>
            </div>
            <div className="slider__buttons">
        <span
            className="slider__prev"
            onClick={() => sliderRef.current.slickPrev()}
        >
          <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.68098e-07 8.00034L8.31279 0.5L10 2.02259L3.37489 8.00034L10 13.9778L8.31279 15.5L2.68098e-07 8.00034Z"
                fill="#4390D8"
            />
          </svg>
        </span>
                <span
                    className="slider__next"
                    onClick={() => sliderRef.current.slickNext()}
                >
          <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 7.99966L1.68721 15.5L1.99664e-07 13.9774L6.62511 7.99966L1.7674e-06 2.02218L1.68721 0.5L10 7.99966Z"
                fill="#4390D8"
            />
          </svg>
        </span>
            </div>
        </section>
    )
}

export default NewsList
