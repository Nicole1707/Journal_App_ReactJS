import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
        <h3 className="auth__tittle">Register Screen</h3>
        <form>
        <input
                tipe="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off"
            />
            <input
                tipe="text"
                placeholder="Email"
                name="email"
                className="auth__input"
                autoComplete="off"
            />
            <input
                tipe="password"
                placeholder="Password"
                name="password"
                className="auth__input"
            />
             <input
                tipe="password"
                placeholder="Confrim Password"
                name="password2"
                className="auth__input"
            />

            <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
            >
                Register
            </button>
        
            
            <Link to="/auth/login"
            className="link">
                Already registered?
            </Link>
        </form>
    </>
)
    
}
