import React from 'react'
import './myprojects.css'


const Myprojects = () => {
  return (
    <div>
      <section id='myprojects'>

        <h5>My Recent Works</h5>
        <h2>Projects</h2>

        <div className="container portfolio__container">

          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src='' alt="" />
            </div>
            <h3>KPMG</h3>
            <small className='text-light'>HTML | SCSS | JS | AEM</small>
            <div className="portfolio__item-cta">
              <a href="https://kpmg.com/us/en.html" target="_blank" rel='noreferrer' className='btn'>Visit Website</a>
            </div>

          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src='' alt="" />
            </div>
            <h3>ONE-BLOOD</h3>
            <small className='text-light'>HTML | SCSS | JS | AEM</small>
            <div className="portfolio__item-cta">
              <a href="https://www.oneblood.org/" target="_blank" rel='noreferrer' className='btn'>Visit Website</a>
            </div>

          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src='' alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="/" target="_blank" rel='noreferrer' className='btn'>Visit Website</a>
            </div>

          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src='' alt="" />
            </div>
            <h3>orlandohealth</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="http://cms.stage.orlandohealth.com/" target="_blank" rel='noreferrer' className='btn'>Visit Website</a>
            </div>

          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src='' alt="" />
            </div>
            <h3>UTM</h3>
            <small className='text-light'>HTML | SCSS | JS | AEM </small>
            <div className="portfolio__item-cta">
              <a href="#" target="_blank" rel='noreferrer' className='btn'>still going on</a>
            </div>

          </article>
        </div>
      </section>
    </div>
  )
}

export default Myprojects
