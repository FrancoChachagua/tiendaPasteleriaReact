import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css';

export const UserWidget = () => {

    return (
        <>
            <Link exact to="/User">
                <i className="fas fa-user-circle" id="userIconWidget"></i>
            </Link>
        </>
    )
}
