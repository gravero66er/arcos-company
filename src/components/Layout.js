// Libraries
import React from "react"
import "../styles/global.scss"

// Components
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <section className="container">
        <Header />
      </section>
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}
