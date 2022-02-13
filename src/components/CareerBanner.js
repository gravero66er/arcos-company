// Libraries
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Components
import CareerPattern from "./svg/CareerPattern";

function CareerBanner({ career }) {
  const imageSmall = getImage(career[0].imageSmall);
  const imageMiddle = getImage(career[0].imageMiddle);
  const imageBig = getImage(career[0].imageBig);
  return (
    <section className="career__banner">
      <div className="career__image career__image--small">
        <GatsbyImage image={imageSmall} alt="image" />
      </div>
      <div className="career__image career__image--middle">
        <GatsbyImage image={imageMiddle} alt="image" />
      </div>
      <div className="career__image career__image--big">
        <GatsbyImage image={imageBig} alt="image" />
      </div>
      <section className="container career__content">
        <h3 className="career__title title__h3 title__h3--white">Мы на связи</h3>
        <p className="career__description article article--white ">
          Мы открыты к диалогу! Вы всегда можете обратиться с интересными предложениями и задать интересующие вопросы
          всеми видами современных коммуникаций: Instagram, VK, телефон, форма обратной связи.
        </p>
      </section>
      <div className="career__pattern">
        <CareerPattern />
      </div>
    </section>
  );
}

export default CareerBanner;