import React from 'react'
import HeroImage from '../../assets/img/hero-image_1.bf11866a.png'
import jobbermanImage from '../../assets/img/jobberman.4a766505.svg'
import ravenImage from '../../assets/img/raven-bank.322dda4e.svg'
import hireImage from '../../assets/img/thire.cf489f4d.svg'
const HeroSection = () => {
  return (
   <>
    <div className='hero_content'>

      
<div className='content'>
<h1>Gain in-demand <br /> skills for <strong>free</strong></h1>
<p>Join the Terra Learning Internship to learn and get the hands-on experience needed. Our interns are ready to take on entry-level and junior positions in just 8 weeks.</p>
<button className='hero_button'>Sign up for Free</button>

</div>
  <img src={HeroImage} alt="" />

 

</div>
<div className='images'>
<img src={jobbermanImage} alt="" />
<img src={ravenImage} alt="" />
<img src={hireImage} alt="" />
</div>
   
   </>
  )
}

export default HeroSection
