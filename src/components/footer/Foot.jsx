import React from 'react'

import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsMedium} from 'react-icons/bs'

const Foot = () => {
  return (
    <div>
      <footer>
        <a href="#home" className='footer__logo'>Himmat</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/himmat-singh-nathawat-1b540b17b/"><BsLinkedin/></a>
          <a href="https://github.com/himmatsinghnathawat"><BsGithub/></a>

        </div>

        <div className="footer__copyright">
            <small>&copy; Himmat. All rightts reserved.</small>
        </div>
    </footer>
    </div>
  )
}

export default Foot
