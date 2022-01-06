// Libraries
import React from "react"
import "../styles/global.scss"

// Components
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <section className="container">
        <Header />
      </section>
      <div className="content">{children}</div>
      <footer>Footer gonna be here!</footer>
    </div>
  )
}
