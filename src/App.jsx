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
  const [active, setActive] = useState('');
  const [activeNav, setActiveNav] = useState('#')

  function ActiveHandler(id) {
    setActive(id)
    setActiveNav('')
  }
  function InActiveHandler() {
    setActive('')
  }


  return (
    <>
      <Header OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Nav active={active} OnClick={ActiveHandler} activeNav={activeNav} setActiveNav={setActiveNav} />
      <About OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Experience OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Services OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Portfolio OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Testimonials OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Contact OnSetActiveHandler={ActiveHandler} OnSetInActiveHandler={InActiveHandler} />
      <Footer />
    </>
  )
}




