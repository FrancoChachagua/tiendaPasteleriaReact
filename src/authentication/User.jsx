import React, { useEffect, useState } from 'react'
import { useAuth } from './authenticationContext'
import { useHistory } from 'react-router'

export const User = () => {

    const [error, setError] = useState('');

    const { currentUser, logout } = useAuth();

    const history = useHistory();
    
    const handleLogout = async () =>{
            try {
                await logout();
                history.push('/Login');
            } catch (error) {
                setError(`${error}`);
            }
        }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3> User </h3>
                    {error && <p className="error"> {error}</p>}
                </div>
                <div className="card-body">
                    <h1> Welcome usuario :</h1>
                    {currentUser ?  
                    <div>
                        <p> {currentUser.email} <button className="btn btn-danger" onClick={handleLogout}> Logout </button> </p>  
                    </div>
                    :
                    <div>
                        <p> No hay usuario </p> 
                    </div>
                    }
                    
                </div>
            </div>
        </>
    )
}

export default User
