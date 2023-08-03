import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelegram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



export default function Contact({ OnSetActiveHandler, OnSetInActiveHandler }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2812a2d', 'template_c2rpkhi', form.current, 'Mlkv-vXPwk6YSs7DL')

    e.target.reset()
  };


  return (
    <section id='contact' onMouseEnter={() => OnSetActiveHandler('#contact')} onMouseLeave={OnSetInActiveHandler}>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>samandarjs2001@gmail.com</h5>
            <a href="mailto:samandarjs2001@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Messenger</h5>
            <a href="https://t.me/sj3826" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+37126205271</h5>
            <a href="https://wa.me/37126205271" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

