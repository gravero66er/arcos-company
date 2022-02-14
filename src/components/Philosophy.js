// Libraries
import React from "react"

// Components
import TitleIcon from "./svg/TitleIcon"

export default function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div className="title__wrapper">
        <h2 className="title__h2">Философия</h2>
        <div className="title__icon">
          <TitleIcon
            path={
              "M5.5 20.5a1 1 0 01-1-1v-15a1 1 0 011-1h6.38a1 1 0 01.9.55l.72 1.45h5a1 1 0 011 1v8a1 1 0 01-1 1h-5.39a1 1 0 01-.89-.55l-.72-1.45h-5v6a1 1 0 01-1 1zm1-15v6h6l1 2h4v-6h-5l-1-2h-5z"
            }
          />
        </div>
      </div>
      <p className="article article--half">
        Бизнес — есть искусство строить стабильное будущее каждый день, помня
        опыт прошлых лет и двигаясь навстречу новому.
      </p>
      <h3 className="title__h3">Ценности</h3>
      <p className="article">
        Развивая навыки и компетенции своих сотрудников 一 холдинг растет вместе
        с ними. В компании регулярно проходят профильные обучения, а система
        наставничества максимально передает корпоративные ценности и адаптирует
        сотрудников. «Есть проблема — предложи решение!» — в компании инициатива
        всегда поощряется финансово и очень приветствуется.
      </p>
      <h3 className="title__h3">Миссия</h3>
      <p className="article">
        Основная миссия компании — эффективное преобразование опыта лидеров
        различных отраслей и создание условий для быстрого реагирования на
        изменения рынка.
      </p>
    </section>
  )
}
