import React from 'react'
import { NavLink } from 'react-router-dom'
import { X } from '@phosphor-icons/react'
import logo from '../../assets/img/side-hustle-logo.3a71de11.svg'
import "./nav.css"
const Mobile = () => {
  return (
    <>
    
    <div className='mobile-container'>
        
        {/* <NavLink to="/"><img src={logo} alt="" /></NavLink> */}
      <ul className="nav__list_mobile">
        <li className="nav__item"><NavLink className="nav__link" to={""}>Bootcamp</NavLink> </li>
        
        <li className="nav__item"><NavLink className="nav__link" to={"/blog"}>Blog</NavLink></li>
        
      <li className="nav__itemButton"> <NavLink className="nav__linkButton" to={""}>Login</NavLink></li>
      </ul>


           {/* { isActive ?     <List size={30}  color='#499B48'/> : null } */}

    
    </div>
    
    
    </>
  )
}

export default Mobile
