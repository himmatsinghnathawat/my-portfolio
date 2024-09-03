import React from 'react'
import './header.css'

import me from '../../assets/me-new.png'

import HeaderSocials from './HeaderSocials'
import Button from './Button'



const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Himmat Singh Nathawat</h1>
          <h5 className="text-light">UI Developer</h5>
        <Button/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

          <a href="#contacts" className='scroll__down'>Scroll Down</a>
        </div>
      </header>

    
    
  )
}

export default Header