import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: 'Tom Robertson',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing     ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing'

  },
  {
    avatar: AVTR2,
    name: 'Andrew Smith',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing     ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing'

  },
  {
    avatar: AVTR3,
    name: 'Linda Heybrew',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing     ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing'

  },
  {
    avatar: AVTR4,
    name: 'Elon Johnson',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing     ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicing'

  }
]



export const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt='avatar' />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
