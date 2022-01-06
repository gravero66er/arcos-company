// Libraries 
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Navigation from "./Navigation"

export default function Header() {
  return (
    <header className="header">
      <StaticImage
        src="../images/logo.png"
        width={150}
        height={23}
        alt="logo"
        placeholder="tracedSVG"
      />
      <Navigation />
      <button className="header__button">Связаться</button>
    </header>
  )
}
