/* eslint-disable implicit-arrow-linebreak */
// Libraries
import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import SocialIcons from '../Common/SocialIcons'
import Modal from '../Common/Modal'
import CallbackForm from '../Common/CallbackForm'
import NavbarPattern from '../svg/NavbarPattern'

const Nav = styled.nav`
  right: ${({ open }) => (open ? '0' : '-100%')};
`
export default function Navbar({ open }) {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <CallbackForm setActive={setModalActive} />
      </Modal>
      <Nav open={open} className="header__navbar">
        <div className="menu">
          <Link className="menu__item" to="/">
            Холдинг
          </Link>
          <Link className="menu__item" to="/products">
            Продукты
          </Link>
          {/* <Link className="menu__item" to="/info">
            Информация
          </Link> */}
          <Link className="menu__item" to="/career">
            Карьера
          </Link>
          <Link className="menu__item" to="/contacts">
            Контакты
          </Link>
        </div>
        <button
          className="navbar__button"
          onClick={() => setModalActive(true)}
          onKeyPress={() => setModalActive(true)}
          type="button"
        >
          Связаться
        </button>
        <SocialIcons />
        <NavbarPattern />
      </Nav>
    </>
  )
}
