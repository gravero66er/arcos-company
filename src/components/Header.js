// Libraries 
import React, { useState } from "react";

// Components
import Navigation from "./Navigation";
import BlueLogo from "./svg/BlueLogo";
import Modal from "./Modal";
import CallbackForm from "./CallbackForm";

export default function Header() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className="header">
      <Modal active={modalActive} setActive={setModalActive}>
        <CallbackForm setActive={setModalActive} />
      </Modal>
      <BlueLogo />
      <Navigation />
      <button className="header__button" onClick={() => setModalActive(true)}>Заказать звонок</button>
    </header>
  );
}
