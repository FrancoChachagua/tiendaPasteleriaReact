import React from 'react';
import '../navbar/NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({initial, onAdd, stock}) => {
    const [count, setCount] = useState(initial);
    const [stck, setStock] = useState(6);
    const [eventButton, setEventButton] = useState(true)

    function handleCountResta(){ if (count>0){setCount(count - 1)}}
    function addToConsole(){onAdd(count)}
    function handleCountSuma(){setCount(count + 1)}
    const addToCart = () => {
        onAdd(count)
        setEventButton(false)
    }

    return(
        <div className="contadorDiv">
            <h1> {count} </h1>
            <button onClick={handleCountResta}>-</button>

            {eventButton ?

                <button onClick={addToCart}>Add to consola</button>
                :
                <Link exact to='/Cart'>
                    <button>Terminar compra</button>
                </Link>
                
            }



            <button onClick={handleCountSuma}>+</button>
        </div>
        
    )
}


export default ItemCount
