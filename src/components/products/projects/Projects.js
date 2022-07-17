// Libraries
import React, { useRef } from 'react'
import Slider from 'react-slick'
import { getImage } from 'gatsby-plugin-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Components
import Project from './Project'
import TitleIcon from '../../svg/TitleIcon'
import SliderLeftArrow from '../../svg/SliderLeftArrow'
import SliderRightArrow from '../../svg/SliderRightArrow'

function Projects({ projects }) {
  const sliderRef = useRef(null)
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title__wrapper">
          <h2 className="title__h2">Проекты</h2>
          <div className="title__icon">
            <TitleIcon path="M22 21H2V11a2 2 0 012-2h4V4a2 2 0 012-2h4a2 2 0 012 2v3h4a2 2 0 012 2v12zM16 9v10h4V9h-4zm-6-5v15h4V4h-4zm-6 7v8h4v-8H4z" />
          </div>
        </div>
        <p className="article article--half">
          Путеводитель по нашим проектам. Тут мы рассказываем, какие задачи нам
          удалость успешно решить в качестве производителя, поставщика или
          строительной компани. Список постоянно пополняется. Раздел находится в
          разработке, совсем скоро вы сможете подробнее узнать о каждом из наших
          проектов.
        </p>
      </div>
      <section className="projects__list">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, index) => {
            const image = getImage(project.image)
            return <Project project={project} image={image} key={index} />
          })}
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

export default Projects
