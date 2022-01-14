// Libraries
import React from "react"

// Components
import FooterAccordion from "./FooterAcordion"
import FooterLink from "./FooterLink"

export default function Footer() {
    return (
        <footer className="footer">
            <section className="footer__wrapper container">
                <div className="footer__accordions">
                    <FooterAccordion title={"Холдинг"}>
                        <FooterLink title={"История"} link={"/#history"}/>
                        <FooterLink title={"Философия"} link={"/#philosophy"}/>
                        <FooterLink title={"Проекты"} link={"/#projects"}/>
                        <FooterLink title={"Новости"} link={"/#news"}/>
                    </FooterAccordion>
                    <FooterAccordion title={"Продукты"}>
                        <FooterLink title={"История"} link={"/#history"}/>
                        <FooterLink title={"Философия"} link={"/#philosophy"}/>
                        <FooterLink title={"Проекты"} link={"/#projects"}/>
                        <FooterLink title={"Новости"} link={"/#news"}/>
                    </FooterAccordion>
                    <FooterAccordion title={"Информация"}>
                        <FooterLink title={"История"} link={"/#history"}/>
                        <FooterLink title={"Философия"} link={"/#philosophy"}/>
                        <FooterLink title={"Проекты"} link={"/#projects"}/>
                        <FooterLink title={"Новости"} link={"/#news"}/>
                    </FooterAccordion>
                    <FooterAccordion title={"Карьера"}>
                        <FooterLink title={"История"} link={"/#history"}/>
                        <FooterLink title={"Философия"} link={"/#philosophy"}/>
                        <FooterLink title={"Проекты"} link={"/#projects"}/>
                        <FooterLink title={"Новости"} link={"/#news"}/>
                    </FooterAccordion>
                </div>
            </section>
        </footer>
    )
}
