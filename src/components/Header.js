// Libraries 
import React from "react"

// Components
import Navigation from "./Navigation"
import BlueLogo from "./svg/BlueLogo";

export default function Header() {
    return (
        <header className="header">
            <BlueLogo/>
            <Navigation/>
            <button className="header__button">Связаться</button>
        </header>
    )
}
