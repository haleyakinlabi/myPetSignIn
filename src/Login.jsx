import React, { useRef, useState, useEffect } from "react";
import './Login-Register.css'

const Login = () => {

    //useRef
    const userRef = useRef()
    const errRef = useRef()

    //useState
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    // //useEffect
    // useEffect(() => {
    //     userRef.current.focus()
    // }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    //handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        



    }

    
    return (

        
        


        <section>

            {/* Error Message */}
            <p ref={errRef} className={errMsg ? "errmsg" :
            "offscreen"} aria-live="assertive">{errMsg}</p>

            <h1>Sign In</h1>

            <form onSubmit={handleSubmit}>

            {/* Username */}
                <label htmlFor="username">Username:</label>
                <input 
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                ></input>

            {/* Password */}
            <label htmlFor="password">Password:</label>
                <input 
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                ></input>

            <button>Sign In</button>

            </form>

            <p>
                Need an Account?<br />
                <span className="line">
                    {/* {put router link} */}
                    <a href="#">Sign Up</a>
                </span>
            </p>


        </section>
    )
}

export default Login