import React, { useState } from 'react'
import dashboardImage from '../../assets/img/dashboard-mockup.59e1b04e.png'
import { CaretRight } from '@phosphor-icons/react'


const Learn = () => {

    const [isActive, setIsActive] = useState(false)
    const handleClick =()=> {
        setIsActive(!isActive)
    }

  return (
    <div className='container'>


    <div className='md:flex gap-2 justify-between items-start '>
        <img src={dashboardImage} alt="" className=' md:w-[50%] h-[50%] ' />
     
        <div className=' md:mt-[6rem]'>
      <h1 className='text-3xl md:text-4xl font-bold'>  <strong className='text-[#52A350]'>Learn</strong> in-demand skills seamlessly </h1>
      <p> Imagine learning in an environment built to give you the best learning experience.</p>
        <p>A blend of self-paced and instructor-led training with lots of hands-on experience to ensure you are well-rounded in the track of your choice.</p>
        
          <div className='border border-grey-500 shadow'>
          <button 
          style={isActive ? {backgroundColor: '#EEF7EE' , color: '#52A350'} : {backgroundColor: '#FFFF'} }
            onClick={handleClick}
            className='w-full text-start flex  justify-between p-3 font-bold'>Peak <CaretRight size={20} /> </button>
           
        {isActive && <div className='p-5'>
            <li>Earn a certificate of completion at the end of the Internship</li>
            <li>A chance to build your portfolio in the Terra Learning bootcamp</li>
            <li>Boost your portfolio by taking part in team projects and creating world class projects in the bootcamp</li>
            </div> }
          </div>
          <button className="bg-[#52A350] text-white py-2 px-6 rounded mt-5  hover:bg-[#95b268] hover:scale-105 transition duration-300 ">Sign up for FREE</button>
        </div>
    </div>

    </div>
  )
}

export default Learn
