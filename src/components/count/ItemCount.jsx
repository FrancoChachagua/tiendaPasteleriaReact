import React from 'react';
import '../navbar/NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authentication/authenticationContext';

const ItemCount = ({initial, onAdd, stock}) => {
    const [count, setCount] = useState(initial);
    const [stck, setStock] = useState(6);
    const [eventButton, setEventButton] = useState(true)
    const [errorStock, setErrorStock] = useState(null);
    const [errorAccount, setErrorAccount] = useState(null)

    const {currentUser} = useAuth();

    function handleCountResta(){
        if (count>1) {
            setCount(count - 1)            
        }
    }

    function handleCountSuma(){
        setCount(count + 1)
    }

    const addToCart = (user) => {
        if (user===null) {
            setEventButton(true)
            setErrorAccount('No tienes una cuenta, por favor crea una');
            setTimeout(() => {
                setErrorAccount('');
            }, 2500);
        }else{
            if (stock < count) {
                setEventButton(true)
                setErrorStock('No hay stock disponible')
                setTimeout(() => {
                    setErrorStock('');
                }, 2500);
            }else{
                onAdd(count)
                setEventButton(false)
            }
        }
    }
    

    return(
        <div className="contadorDiv">
            {(stock < count) ? <h1>No hay stock</h1> : <></>
            }
            {errorStock && 
                <>
                    <p className="error"> {errorStock} </p>
                </>
                }
            {eventButton ?
                <h1> {count} </h1>
                :
                <> </>
            }
            <button onClick={handleCountResta}>-</button>
            <button onClick={handleCountSuma}>+</button>

            <div className="row">
                <p> {errorAccount && <p className="error"> {errorAccount} </p> } </p>
                <div>
                    {eventButton ?
                        <button onClick={()=>addToCart(currentUser)} className="">Añadir al carrito</button>
                        :
                        <div>
                        <Link exact to='/Cart'>
                            <button>Terminar compra</button>
                        </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
        
    )
}


export default ItemCount
