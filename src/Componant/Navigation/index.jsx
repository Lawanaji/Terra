import React, { useState } from 'react';
import logo from '../../assets/img/side-hustle-logo.3a71de11.svg';
import "./nav.css";
import { NavLink } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import Mobile from './Mobile';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false); 

  const toggleMenu = () => {
    setShowMobileNav(!showMobileNav); 
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMobileNav(false); 
    }
  };

  return (
    <>
      {showMobileNav && <Mobile closeMenu={closeMenuOnMobile} />} 

      <div className='nav'>
        <nav className='container'>
          
          <div className='flex justify-between items-center md:gap-[15rem] w-full'>
          <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>

          <ul className='hidden md:flex justify-start items-center gap-[10rem]'>
            <li className="nav__item"><NavLink className="nav__link" to="/bootcamp">Bootcamp</NavLink></li>
            <li className="nav__item"><NavLink className="nav__link" to="/blog">Blog</NavLink></li>
          </ul>

            <li className="hidden md:block"><NavLink className="nav__link" to="/login">Login</NavLink></li>
          </div>

          <div onClick={toggleMenu} className='block md:hidden scale-105 transition duration-300'>
            {showMobileNav ? <X size={30} color='#499B48' /> : <List size={30} color='#499B48' />}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
