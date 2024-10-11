import React from 'react'
import './index.css'
import HeroSection from './HeroSection'
import SubSection from './SubSection'
import Learn from './Learn'
import Comment from './Comment'
import LogoSlider from './Slider'
import Proudct from './Process'
const Home = () => {
  return (
    <main className=''>
    <HeroSection />
      <SubSection />
      <Learn />
      <Comment />  
      <LogoSlider />
      <Proudct />
        </main>
  )
}

export default Home
