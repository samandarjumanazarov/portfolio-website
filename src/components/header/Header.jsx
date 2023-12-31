import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

export const Header = ({ OnSetActiveHandler, OnSetInActiveHandler }) => {
  return (
    <header onMouseEnter={() => OnSetActiveHandler('#')} onMouseLeave={OnSetInActiveHandler}>
      <div className="contianer header__container">
        <h5>Hello I'm</h5>
        <h1>Samandar Jumanazarov</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        < HeaderSocial />


        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
