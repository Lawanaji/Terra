import React from 'react'
import Form from './Form'

const Bootcamp = () => {
  return (
    <div className='w-full h-screen py-[8rem] bg-[#1A1F1A] text-white'>
        <div className='container md:flex gap-[5rem]'>
            <div className='text-center md:text-start'>
        <h1 className=' text-4xl  md:text-6xl font-bold leading-[4rem]'>Boost your skills and become job-ready</h1>
        <p className='text-xl font-normal'>Join an <strong className='text-[#52A350]'>instructor-led bootcamp </strong> to practice and improve your skills. Build your portfolio and become better equiped to pursue that dream career</p>

            </div>

            <Form />
      
        </div>
    </div>
  )
}

export default Bootcamp
