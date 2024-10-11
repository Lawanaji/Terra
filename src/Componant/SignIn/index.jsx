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
    const handleSubmit = () => {
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
    }
    return (
        <div className='signInWrapper'>
            <h1 className='signIn'>Sign in</h1>
            <p className='inStruction'>Enter your details to continue your learning path</p>
            <input className='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="Email address" required="" placeholder="Email address" autocomplete="off" /><br />
            {error.email && <p style={{ color: "red" }} > {error.email} </p>}
            <input className='password' type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} name="Password" required="" placeholder="Password" autocomplete="off" />
            <p className='showPass' onClick={handleToogle}> {showPassword ? "HIDE" : "SHOW"} </p>
            <br />
            {error.password && <p style={{ color: "red" }} > {error.password} </p>}
            <button className='btnLogin' onClick={handleSubmit}>Start Learning</button>
        </div>
    )
}

export default SignIn
