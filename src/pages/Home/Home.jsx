import React from 'react'
import './index.css'
import HeroSection from './HeroSection'
const Home = () => {
  return (
    <main>
    <div className=' home_container'>
      <div className='container' id='Hero_section'>
       <h3>Applications for the internship is currently open!</h3>
        <HeroSection />
      </div>
    </div>


    </main>
  )
}

export default Home
