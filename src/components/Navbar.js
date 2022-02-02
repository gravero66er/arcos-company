// Libraries
import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

// Components
import SocialIcons from "./SocialIcons";
import Modal from "./Modal";
import CallbackForm from "./CallbackForm";

const Nav = styled.nav`
  right: ${({ open }) => (open ? "0" : "-100%")};
`;
export default function Navbar({ open }) {
  const [modalActive, setModalActive] = useState(false);
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
        <button className="navbar__button" onClick={() => setModalActive(true)}>Связаться</button>
        <SocialIcons />
        <StaticImage
          className="navbar__patterns"
          src="../images/patterns_menu.png"
          alt="patterns"
          placeholder="tracedSVG"
        />
      </Nav>
    </>
  );
}
