// Libraries
import React, { useEffect, useState, useRef } from 'react'
import emailjs from 'emailjs-com'

export default function CallbackForm({ setActive }) {
  const [sent, setSent] = useState(false)
  const form = useRef()

  useEffect(() => {
    if (sent) {
      setTimeout(() => setSent(false), 5000)
    }
  }, [sent])

  function sendEmail() {
    emailjs.sendForm(
      'service_64fuur9',
      'template_glp91vd',
      form.current,
      'user_1zGlqhenQXA3jAkEzGerS'
    )
  }

  return (
    <section className="callback">
      <h3 className="title__h3">Заказать звонок</h3>
      <p className="article">
        Отправьте заявку на обратный звонок, наши специалисты свяжутся с вами в
        ближайшее время.
      </p>
      <form
        ref={form}
        className="callback__form"
        onSubmit={e => {
          setSent(true)
          e.preventDefault()
          sendEmail()
          setTimeout(e.target.reset(), 5000)
        }}
      >
        <input
          className="feedback__input article"
          type="number"
          placeholder="Телефон"
          name="phone"
        />
        <input
          className="feedback__input article"
          type="string"
          placeholder="Имя"
          name="name"
        />
        <div className="callback__buttons">
          <button className="callback__button">Отправить</button>
          <button
            type="button"
            className="callback__button callback__button--close"
            onClick={() => setActive(false)}
          >
            Закрыть
          </button>
        </div>
        <p
          className={
            sent
              ? 'callback__notify article active'
              : 'callback__notify article'
          }
        >
          Ваша заявка отправлена!
        </p>
      </form>
    </section>
  )
}
