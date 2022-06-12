// Libraries
import React from "react"

// Components
import TitleIcon from "../svg/TitleIcon"
import YaMap from "./Map"

function ContactsInfo({ contacts }) {
  return (
    <section className="contacts__info">
      <div className="title__wrapper">
        <h2 className="title__h2">Связаться с нами</h2>
        <div className="title__icon">
          <TitleIcon
            path={
              "M17 17h-3v-2h3a3 3 0 100-6h-3V7h3a5 5 0 010 10zm-7 0H7A5 5 0 017 7h3v2H7a3 3 0 100 6h3v2zm7-4H7v-2h10v2zy"
            }
          />
        </div>
      </div>
      <div className="contacts__data">
        <div className="contacts__content article">
          <div className="contacts__links">
            <div className="contacts__phone">
              <TitleIcon
                path={
                  "M8.742 8.682c-1.073.912-1.466 2.575-.54 3.909a12.818 12.818 0 003.208 3.207c1.334.926 2.997.533 3.909-.54l.01.005c1.164.54 2.401.909 3.671 1.097V19h-.004C11.022 19.011 4.991 12.911 5 5.004V5h2.64v.001c.188 1.27.558 2.506 1.097 3.67l.005.01zM19 21H20a1 1 0 001-1v-4.502a1 1 0 00-.853-.99l-.854-.126a11.416 11.416 0 01-3.123-.934l-.753-.349a1 1 0 00-1.234.326l-.341.477c-.299.419-.87.546-1.291.253a10.819 10.819 0 01-2.706-2.705c-.293-.422-.165-.993.253-1.291l.477-.34a1 1 0 00.326-1.235l-.35-.754c-.458-.99-.773-2.042-.933-3.123l-.127-.854A1 1 0 008.501 3H4a1 1 0 00-1 1v1.001C2.99 14.008 9.91 21.013 18.999 21z"
                }
              />
              <a href={`tel: ${contacts[0].phone}`}>{contacts[0].phone}</a>
            </div>
            <div className="contacts__email">
              <TitleIcon
                path={
                  "M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8c1.407 0 2.79-.37 4.001-1.07L15 17.197A5.997 5.997 0 0112 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.871c0 .654-.42 1.129-1 1.129-.551 0-1-.449-1-1V9h-1.382A3.966 3.966 0 0012 8c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.05 0 2-.415 2.714-1.08A2.981 2.981 0 0017 16c1.682 0 3-1.374 3-3.129V12c0-4.411-3.589-8-8-8zm0 10c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
                }
              />
              <a href={`mailto: ${contacts[0].email}`}>{contacts[0].email}</a>
            </div>
          </div>
          <div className="contacts__description">
            Наш главный офис находится в Екатеринбурге по адресу ул. Энегльса,
            36, БЦ «Филитцъ», офис 501/4, 5 этаж.
          </div>
        </div>
        <div className="contacts__map">
          <YaMap />
        </div>
      </div>
    </section>
  )
}

export default ContactsInfo
