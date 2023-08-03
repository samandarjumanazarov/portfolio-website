import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.jpg'
import IMG2 from '../../assets/IMG2.jpg'
import IMG3 from '../../assets/IMG3.jpg'
import IMG4 from '../../assets/IMG4.jpg'
import IMG5 from '../../assets/IMG5.jpg'
import IMG6 from '../../assets/IMG6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Read Books and Fly High',
    github: 'https://github.com',
    demo: ''
  },

  {
    id: 2,
    image: IMG2,
    title: 'IBM technology role in Business',
    github: 'https://github.com',
    demo: ''
  },

  {
    id: 3,
    image: IMG3,
    title: 'Growing as a software engineer',
    github: 'https://github.com',
    demo: ''
  },

  {
    id: 4,
    image: IMG4,
    title: 'Cats World',
    github: 'https://github.com',
    demo: ''
  },

  {
    id: 5,
    image: IMG5,
    title: 'Real projects',
    github: 'https://github.com',
    demo: ''
  },

  {
    id: 6,
    image: IMG6,
    title: 'Charts templates in Figma',
    github: 'https://github.com',
    demo: ''
  },
]



export const Portfolio = ({ OnSetActiveHandler, OnSetInActiveHandler }) => {
  return (
    <section id='portfolio' onMouseEnter={OnSetActiveHandler} onMouseLeave={OnSetInActiveHandler}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (<article className='portfolio__item' key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="portfolio" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>)

          })
        }

      </div>
    </section>
  )
}


