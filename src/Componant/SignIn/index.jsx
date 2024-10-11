import React, { useState } from 'react'
import './index.css'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleToogle = () => {
        setShowPassword(!showPassword);
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.text(email);
    }
    const handleSubmit = async () => {
        try {
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            })
            const data = await response.json();
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                alert('Login successful')
            } else {
                alert('Invalid credentials');
            }
        }catch (error) {
            console.error('Error during login:', error);
        }
    let emailError = "";
    let passwordError = "";

    if (!email) {
        emailError = "Email is required";
    } else if (!validateEmail(email)) {
        emailError = "Password is correct";
    }
    if (!password) {
        passwordError = "Password is required";
    } else if (password !== "correctPassword") {
        passwordError = "Password is correct";
    }
    if (emailError || passwordError) {
        setError({ email: emailError, password: passwordError });
    } else {
        setError({ email: "", password: "" })
    }
};
return (
    <div className='signInWrapper'>
        <h1 className='signIn'>Sign in</h1>
        <p className='inStruction'>Enter your details to continue your learning path</p>
        <input className='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="Email address" required="" placeholder="Email address" autocomplete="off" /><br />
        {error.email && <p style={{ color: "red", marginBottom: '20px' }} > {error.email} </p>}
        <div className='passwordInput'>
            <input className='password' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="Password" required="" placeholder="Password" autocomplete="off" />
            <span className='showPass' onClick={handleToogle}> {showPassword ? "HIDE" : "SHOW"} </span>
        </div>
        <br />
        {error.password && <p style={{ color: "red" }} > {error.password} </p>}
        <button className='btnLogin' onClick={handleSubmit}>Start Learning</button>
        <p style={{ textAlign: 'center', marginTop: '30px' }}>Forgot Password? <a href='#' target={"_blank"} style={{ color: "rgb(82, 163, 80)" }}> Recover here. </a> </p>
        <hr />
        <p style={{ textAlign: 'center', marginTop: '10px' }}> Don't have an account? </p>
        <button className='btnSignUp'>Sign up for FREE</button>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Login to cohort 5.0 dashboard <a href='#' target={"_blank"} style={{ color: "rgb(82, 163, 80)" }}> here. </a> </p>
    </div>
)}

export default SignIn
