import React from 'react'
import './index.css'
import Logo from '../../assets/img/side-hustle-logo.3a71de11.svg';
import { Link } from 'react-router-dom';
import SignIn from '../../Componant/SignIn';
const Login = () => {
    return (
        <div className='loginBody'>
            <img src={Logo} alt='Terra Logo' />
            <div className='loginWrapper'>
                <div className='loginContent'>
                <Link to="/" style={{ color:'rgb(82, 163, 80)' }}>BACK</Link>
                </div>
                <SignIn />
            </div>
        </div>
    )
}

export default Login
