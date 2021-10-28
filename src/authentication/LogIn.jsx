import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './authenticationContext'

export const LogIn = () => {

    const { login } = useAuth();

    const [error, setError] = useState(null);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    
    const history = useHistory();

    const handleEmail = (e) =>  {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/');
        } catch (error) {
            setError('x Sorry, your password is incorrect.');
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1> Login </h1>
                
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email" className="m-left"> Email </label> <br />
                    <input type="email" onChange={handleEmail} /> <br /> <br />
                    <label htmlFor="Password"> Contraseña </label> <br />
                    <input type="password"  onChange={handlePassword}  />
                    <input type="submit" value="Log In"/>
                </form>
                {error && 
                <>
                    <p className="error"> {error}</p>
                    <Link exact to='./Error'>
                        <p> ¿No recuerdas tu contraseña?</p>
                    </Link>
                </>
                }
                <Link exact to='./SignUp'>
                    <p> ¿No tienes una cuenta? <b> Sign Up </b> </p>
                </Link>
            </div>
        </div>
    )
}
