import React, { useState } from 'react'
import { useAuth } from './authenticationContext'

export const User = () => {

    const [error, setError] = useState('');

    const { currentUser, logout } = useAuth();

    const handleLogout = async () =>{
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
            setError('Server error');
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
