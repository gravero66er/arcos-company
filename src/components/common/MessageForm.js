// Libraries
import React, { useEffect, useRef, useState } from "react"
import emailjs from "emailjs-com"

// Components
import Modal from "./Modal"
import CallbackForm from "./CallbackForm"

function MessageForm() {
  const [modalActive, setModalActive] = useState(false)
  const [sent, setSent] = useState(false)
  const form = useRef()

  useEffect(() => {
    if (sent) {
      setTimeout(() => setSent(false), 5000)
    }
  }, [sent])

  function sendMessage() {
    emailjs
      .sendForm(
        "service_64fuur9",
        "template_pjj0gyi",
        form.current,
        "user_1zGlqhenQXA3jAkEzGerS"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className="message">
      <form
        ref={form}
        className="message__form"
        onSubmit={e => {
          setSent(true)
          e.preventDefault()
          sendMessage()
          setTimeout(e.target.reset(), 5000)
        }}
      >
        <div>
          <input
            className="feedback__input article"
            type="string"
            placeholder="Имя"
            name="name"
          />
          <input
            className="feedback__input article"
            type="number"
            placeholder="Телефон"
            name="phone"
          />
          <input
            className="feedback__input article"
            type="email"
            placeholder="E-mail"
            name="email"
          />
        </div>
        <textarea
          className="feedback__input feedback__input--text article"
          placeholder="Сообщение"
          name="message"
        />
        <div className="message__buttons">
          <button className="message__button">Отправить вопрос</button>
          <button
            className="message__button message__button--call"
            type="button"
            onClick={() => setModalActive(true)}
          >
            Заказать звонок
          </button>
        </div>
      </form>
      <p
        className={
          sent ? "callback__notify article active" : "callback__notify article"
        }
      >
        Ваше сообщение отправлено!
      </p>
      <Modal active={modalActive} setActive={setModalActive}>
        <CallbackForm setActive={setModalActive} />
      </Modal>
    </section>
  )
}

export default MessageForm
