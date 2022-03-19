import React from 'react'
import "./Footer.scss"
import logo from "../../assets/icons/logo_white.svg"

export default function Footer() {
  return (
    <div className='footer_container'>
        <img src={logo} alt='logo kaza' />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
