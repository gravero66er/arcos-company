// Libraries
import React from 'react'
import '../../styles/global.scss'

// Components
import Header from '../header/Header'
import Footer from '../footer/Footer'

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
