// Libraries
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {StaticImage} from "gatsby-plugin-image"

// Components
import SocialIcons from "./SocialIcons"

const Nav = styled.nav`
  right: ${({open}) => (open ? "0" : "-100%")};
`
export default function Navbar({open}) {
    return (
        <Nav open={open} className="header__navbar">
            <div className="menu">
                <Link className="menu__item" to="/">
                    Холдинг
                </Link>
                <Link className="menu__item" to="/products">
                    Продукты
                </Link>
                <Link className="menu__item" to="/info">
                    Информация
                </Link>
                <Link className="menu__item" to="/career">
                    Карьера
                </Link>
                <Link className="menu__item" to="/contacts">
                    Контакты
                </Link>
            </div>
            <button className="navbar__button">Связаться</button>
            <SocialIcons/>
            <StaticImage
                className="navbar__patterns"
                src="../images/patterns_menu.png"
                alt="patterns"
                placeholder="tracedSVG"
            />
        </Nav>
    )
}
