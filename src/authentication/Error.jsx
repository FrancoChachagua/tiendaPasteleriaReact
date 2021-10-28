import React from 'react'
import './auth.css';
import upsError from './../imgs/upsError.png';


export const Error = () => {
    return (
        <>
            <body className="backgroundError404">
                <img src={upsError} id="image404" alt="imagen de pagina no encontrada" />
            </body>
        </>
    )
}
