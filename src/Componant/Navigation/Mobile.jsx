import React from 'react'
import { NavLink } from 'react-router-dom'
import { X } from '@phosphor-icons/react'
import logo from '../../assets/img/side-hustle-logo.3a71de11.svg'
import "./nav.css"
const Mobile = () => {
  return (
    <>
    
    <div className='fixed w-full h-full bg-[#1A1F1A] top-[80px] z-50  px-10 py-5  scale-105 transition duration-300'>
        
        {/* <NavLink to="/"><img src={logo} alt="" /></NavLink> */}
      <ul className="flex flex-col gap-6">
        <li className="nav__item"><NavLink className="nav__link" to="bootcamp">Bootcamp</NavLink> </li>
        
        <li className="nav__item"><NavLink className="nav__link" to="/blog">Blog</NavLink></li>
        
      <li className="bg-white p-2 w-1/2 rounded-md"> <NavLink className="" to="/login">Login</NavLink></li>
      </ul>


           {/* { isActive ?     <List size={30}  color='#499B48'/> : null } */}

    
    </div>
    
    
    </>
  )
}

export default Mobile
