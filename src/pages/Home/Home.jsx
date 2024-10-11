import React from 'react'
import './index.css'
import HeroSection from './HeroSection'
import SubSection from './SubSection'
import Learn from './Learn'
import Comment from './Comment'
import LogoSlider from './Slider'
const Home = () => {
  return (
    <main className=''>
    <HeroSection />
      <SubSection />
      <Learn />
      <Comment />  
      <LogoSlider />
        </main>
  )
}

export default Home
