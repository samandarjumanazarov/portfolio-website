import React from 'react'
import { useState } from 'react'
import { Header } from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Services } from './components/services/Services'
import { Portfolio } from './components/portfolio/Portfolio'
import { Testimonials } from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import { Footer } from './components/footer/Footer'


export default function App() {
  const [active, setActive] = useState(false);

  function ActiveHandler() {
    setActive(true)
  }
  function InActiveHandler() {
    setActive(false)
  }

  function ActiveClickHandler() {
    setActive(true)
  }
  return (
    <>
      <Header />
      <Nav active={active} OnClick={ActiveClickHandler} />
      <About OnSetActive={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}




