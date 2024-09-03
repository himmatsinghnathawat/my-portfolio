import React from 'react'

import './about.css'
import myImage from '../../assets/me-new1.png'
import { GiGraduateCap } from 'react-icons/gi'
import { BsBookmarkStar } from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const about = () => {
  return (
    <div>
      <section id='about'>

        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
              <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <GiGraduateCap className='about__icon' />
                <h5>Degree</h5>
                <small>Bachelor in compouter science(BCA)<br /><i>Rajasthan university </i></small>
              </article>

              <article className='about__card'>
                <GiGraduateCap className='about__icon' />
                <h5>Degree</h5>
                <small>Master in compouter science(MCA)<br /><i>Rajasthan technical university </i></small>
              </article>

              <article className='about__card'>
                <TfiWorld className='about__icon' />
                <h5>Domains</h5>
                <small>
                  <ul>
                    <li>UI Developer</li><br />
                    <li>Mobile/Desktop/Tab Applications</li>
                  </ul>
                </small>
              </article>



            </div>
            <p>


              As a <b>UI/Front-End Developer</b> with over 2.6 years of experience at CMS Group, in Jaipur, India, I bring a creative and detail-oriented approach to developing high-quality, responsive, and user-friendly web applications. My expertise spans HTML5, CSS3, and JavaScript, with significant experience in e-commerce and healthcare sectors. I am proficient in using modern front-end frameworks and technologies, including CSS frameworks and preprocessors such as Bootstrap, Sass, and Less. My background in Agile software development life cycles ensures efficient and effective project delivery, making me adept at crafting dynamic web solutions that meet user needs and business goals.

            </p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default about
