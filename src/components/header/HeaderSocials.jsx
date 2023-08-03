import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'






export default function HeaderSocial() {
  return (
    <div className="header__socials">

      <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer" ><BsLinkedin /></a>
      <a href='https://github.com' target='_blank' rel="noopener noreferrer" ><FaGithub /></a>
      <a href='https://dribbble.com' target='_blank' rel="noopener noreferrer" ><FiDribbble /></a>

    </div>
  )
}
