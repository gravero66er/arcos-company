// Libraries
import React from "react"
import { Link } from "gatsby"

// Components
import TitleIcon from "../svg/TitleIcon"

function Profile() {
  return (
    <section className="profile" id="profile">
      <div className="title__wrapper">
        <h2 className="title__h2">Анкета</h2>
        <div className="title__icon">
          <TitleIcon
            path={
              "M.333 13.065l5.655 5.655 1.41-1.42-5.65-5.65-1.415 1.415zm21.914-7.784l-10.599 10.61-4.237-4.248-1.43 1.41 5.667 5.667 12.02-12.019-1.42-1.42zM18.01 6.7l-1.41-1.42-6.371 6.37 1.42 1.41 6.36-6.36z"
            }
          />
        </div>
      </div>
      <p className="article">
        Если вы не нашли интересующей вас вакансии — вы можете заполнить анкету
        онлайн. После успешного прохождения всех этапов вы попадёте в кадровый
        резерв и мы обязательно свяжемся с вами.
      </p>
      <Link
        className="profile__button"
        target="_blank"
        rel="norefer"
        to={"https://www.td-arcos.ru/catalog/"}
      >
        Заполнить анкету
      </Link>
    </section>
  )
}

export default Profile
