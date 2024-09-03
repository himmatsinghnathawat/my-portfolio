import React from 'react'
import CV from '../../assets/himmat_cv.png'
const Button = () => {
  return (
    <div>
       <div className="cta">

<a href={CV} download className='btn'>Download CV</a>
<a href="#contacts" className='btn btn-primary'>Contact Me</a>
</div>
    </div>
  )
}

export default Button
