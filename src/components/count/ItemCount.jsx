import React from 'react';
import '../navbar/NavBar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemCount = ({initial, onAdd, stock}) => {
    const [count, setCount] = useState(initial);
    const [stck, setStock] = useState(6);
    const [eventButton, setEventButton] = useState(true)

    function handleCountResta(){
        if (count <= 0){
        setCount(count - 1)
        }
    }
// {({count} <= 0)  ? ({count} === 0) : (null)}
    function handleCountSuma(){
        setCount(count + 1)
    }
    const addToCart = () => {
        onAdd(count)
        setEventButton(false)
    }

    return(
        <div className="contadorDiv">
            
            <h1> {count} </h1>
            <button onClick={handleCountResta}>-</button>
            <button onClick={handleCountSuma}>+</button>

            <div className="row">
                <div>
                    {eventButton ?
                        <button onClick={addToCart} className="">Añadir al carrito</button>
                        :
                        <div>
                        <Link exact to='/Cart'>
                            <button>Terminar compra</button>
                        </Link>
                        {/* <Link exact to='/'>
                            <button>Seguir comprando</button>
                        </Link> */}
                        </div>
                    }
                </div>
            </div>
        </div>
        
    )
}


export default ItemCount
