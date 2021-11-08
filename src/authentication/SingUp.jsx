import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './authenticationContext';


export const SingUp = () => {
    const [error, setError] = useState(null);

    const { singup } = useAuth();

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    
    const [confirmPassword, setConfirmPassword] = useState('');

    const history = useHistory();

    const handleEmail = (e) =>  {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        if (e.target.value < 6 ) {
            setError('La contraseña debe tener mas de 6 digitos')
            setTimeout(() => {
                setError('');
            }, 5500);
        }else{
            setPassword(e.target.value)
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (password !== confirmPassword ) {
    //         setError(`Las contraseñas no coinciden`);
    //         setTimeout(() => {
    //             setError('');
    //         }, 3500);
    //     }else{
    //         try {
    //             await singup(email,password)
    //             history.push('/');
    //         } catch (error) {
    //             setError('Server error');
    //             setTimeout(() => {
    //                 setError('');
    //             }, 1500);
    //         }
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword ) {
            setError(`Las contraseñas no coinciden`);
            setTimeout(() => {
                setError('');
            }, 2500);
            return;
        }if (password < 6) {
            setError(`La contraseña debe tener mas de 6 digitos`);
            setTimeout(() => {
                setError('');
            }, 2500);
            return;
        }else{
            try {
                await singup(email,password)
                history.push('/');
            } catch (error) {
                setError(`${error}`);
                setTimeout(() => {
                    setError('');
                }, 4500);
            }
        }
    }


    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h1> Sing Up </h1>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Email" className="m-left"> Email </label> <br />
                        <input type="email" name="email" id="email" onChange={handleEmail} /> <br /> <br />
                        <label htmlFor="Email" className="m-left"> Contraseña  </label> <br />
                        <input type="password" name="password" id="password"   onChange={handlePassword}/> <br /> <br /> 
                        <label htmlFor="Email" className="m-left"> Confirma contraseña </label> <br />
                        <input type="password" name="confirmPassword" id="confirmPassword"   onChange={handleConfirmPassword}/>
                        <input type="submit" value="Sing Up"/>
                    </form>
                    {error && <p className="error"> {error} </p> }
                    <Link exact to='./LogIn'>
                        <p> ¿Ya tienes una cuenta? <b> Login </b> </p>
                    </Link>
                </div>
            </div>
        </>
    )
}
