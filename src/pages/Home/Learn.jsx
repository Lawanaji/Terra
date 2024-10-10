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


    <div className='learn_container'>
        <img src={dashboardImage} alt="" />
     
        <div className='learn_leftside_container'>
      <h1>  Learn in-demand skills seamlessly </h1>
      <p> Imagine learning in an environment built to give you the best learning experience.</p>
        <p>A blend of self-paced and instructor-led training with lots of hands-on experience to ensure you are well-rounded in the track of your choice.</p>
        
          <div className='dropdown_container'>
          <button 
          style={isActive ? {backgroundColor: '#EEF7EE'} : {backgroundColor: '#FFFF'} }
            onClick={handleClick}
              name="" id="">Peak <CaretRight size={20} /> </button>
           
        {isActive && <div className='list_container'>
            <li>Earn a certificate of completion at the end of the Internship</li>
            <li>A chance to build your portfolio in the Terra Learning bootcamp</li>
            <li>Boost your portfolio by taking part in team projects and creating world class projects in the bootcamp</li>
            </div> }
          </div>
        </div>
    </div>

    </div>
  )
}

export default Learn
