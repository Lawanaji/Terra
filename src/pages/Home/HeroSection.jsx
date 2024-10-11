import React from 'react'
import HeroImage from '../../assets/img/hero-image_1.bf11866a.png'
import jobbermanImage from '../../assets/img/jobberman.4a766505.svg'
import ravenImage from '../../assets/img/raven-bank.322dda4e.svg'
import hireImage from '../../assets/img/thire.cf489f4d.svg'
import { PlayCircle } from '@phosphor-icons/react'

const HeroSection = () => {
  return (
   <>
   <div className='w-full  bg-[#1A1F1A] py-[10rem] text-white'>
    <div className='container'>
    
       
    <div  className='bg-blue-800 text-white text-center mb-10'>
       <h3>Applications for the internship is currently open!</h3>
        
      </div>
      <div className='  md:flex  space-y-2'>
      <div className='space-y-2'>
      <h1 className='text-3xl md:text-5xl font-bold'>Gain in-demand  skills for <strong className='text-[#52A350]'>free</strong></h1>
      <p>Join the Terra Learning Internship to learn and get the hands-on experience needed. Our interns are ready to take on entry-level and junior positions in just 8 weeks.</p>
      <button className='bg-[#52A350] px-4 py-2 rounded-lg'>Sign up for Free</button>
      </div>

  <img src={HeroImage} alt="" />
      </div>
            <div className=' md:flex justify-between mt-10'>
          <span className='flex'>  <img src={jobbermanImage} alt="" />
            <img src={ravenImage} alt="" />
            <img src={hireImage} alt="" /></span>

           <div className='flex justify-start items-center gap-2'>
            <PlayCircle size={30} />
           Play to see Previous Experiences
           <source  />
           </div>
            </div>
    </div>

   </div>
   </>
  )
}

export default HeroSection
