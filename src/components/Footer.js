// Libraries
import React from "react";

// Components
import FooterAccordion from "./FooterAcordion";
import FooterLink from "./FooterLink";
import WhiteLogo from "./svg/WhiteLogo";
import SocialIcons from "./SocialIcons";


export default function Footer() {
  return (<footer className="footer">
    <section className="footer__wrapper container">
      <div className="footer__accordions">
        <FooterAccordion title={"Холдинг"}>
          <FooterLink title={"История"} link={"/#history"} />
          <FooterLink title={"Философия"} link={"/#philosophy"} />
          <FooterLink title={"Проекты"} link={"/#projects"} />
          <FooterLink title={"Новости"} link={"/#news"} />
        </FooterAccordion>
        <FooterAccordion title={"Продукты"}>
          <FooterLink title={"История"} link={"/#history"} />
          <FooterLink title={"Философия"} link={"/#philosophy"} />
          <FooterLink title={"Проекты"} link={"/#projects"} />
          <FooterLink title={"Новости"} link={"/#news"} />
        </FooterAccordion>
        <FooterAccordion title={"Информация"}>
          <FooterLink title={"История"} link={"/#history"} />
          <FooterLink title={"Философия"} link={"/#philosophy"} />
          <FooterLink title={"Проекты"} link={"/#projects"} />
          <FooterLink title={"Новости"} link={"/#news"} />
        </FooterAccordion>
        <FooterAccordion title={"Карьера"}>
          <FooterLink title={"История"} link={"/#history"} />
          <FooterLink title={"Философия"} link={"/#philosophy"} />
          <FooterLink title={"Проекты"} link={"/#projects"} />
          <FooterLink title={"Новости"} link={"/#news"} />
        </FooterAccordion>
      </div>
    </section>
    <section className="footer__contacts">
      <div className="footer__phone title__h3 title__h3--white">
        8 (982) 156 78 54
      </div>
      <div className="footer__logo">
        <WhiteLogo />
      </div>
      <div className="footer__socialIcons">
        <SocialIcons />
      </div>
      <div className="footer__dev article article--tip article--white">
        РАЗРАБОТКА: SOFIN.DEV
      </div>
    </section>
  </footer>);
}
