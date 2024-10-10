import React from 'react'
import './index.css'
import HeroSection from './HeroSection'
import SubSection from './SubSection'
import Learn from './Learn'
const Home = () => {
  return (
    <main>
    <div className=' home_container'>
    <HeroSection />

      <SubSection />
      </div>
      <Learn />
    </main>
  )
}

export default Home
