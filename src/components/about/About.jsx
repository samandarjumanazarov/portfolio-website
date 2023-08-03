import React from 'react';
import './about.css';
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function About({ OnSetActive, OnSetInActiveHandler }) {
  return (
    <section id='about' onMouseEnter={OnSetActive} onMouseLeave={OnSetInActiveHandler}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Project</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet quidem aut quod, alias at corrupti magnam vero harum!
            Recusandae, saepe veritatis. Praesentium harum dolorem rerum,
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
