// Libraries
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Components
import ContactsPattern from '../svg/ContactsPattern'

function ContactsBanner({ contacts }) {
  const imageSmall = getImage(contacts[0].imageSmall)
  const imageMiddle = getImage(contacts[0].imageMiddle)
  const imageBig = getImage(contacts[0].imageBig)
  return (
    <section className="contacts__banner">
      <div className="contacts__image contacts__image--small">
        <GatsbyImage image={imageSmall} alt="image" />
      </div>
      <div className="contacts__image contacts__image--middle">
        <GatsbyImage image={imageMiddle} alt="image" />
      </div>
      <div className="contacts__image contacts__image--big">
        <GatsbyImage image={imageBig} alt="image" />
      </div>
      <section className="container contacts__content">
        <h3 className="contacts__title title__h3 title__h3--white">
          Мы на связи
        </h3>
        <p className="contacts__description article article--white ">
          Мы открыты к диалогу! Вы всегда можете обратиться с интересными
          предложениями и задать интересующие вопросы всеми видами современных
          коммуникаций: Instagram, VK, телефон, форма обратной связи.
        </p>
      </section>
      <div className="contacts__pattern">
        <ContactsPattern />
      </div>
    </section>
  )
}

export default ContactsBanner
