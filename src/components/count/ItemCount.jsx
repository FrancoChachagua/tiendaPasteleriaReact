import React from 'react';
import '../navbar/NavBar.css'
import { useState } from 'react';


const ItemCount = ({initial, onAdd, stock}) => {
    const [count, setCount] = useState(initial);
    const [stick, setStock] = useState(6);

    function handleCountResta(){ if (count>0){setCount(count - 1)}}
    function addToConsole(){onAdd(count)}
    function addToConsolStock(){ if (count>0){setStock(count - 1)}}
    function handleCountSuma(){setCount(count + 1)}
    function stocknt(stock) {if (stock>=stick){console.log('No hay stock disponible')} else{console.log('No hay stock disponble');}}
    return(
        <div className="contadorDiv">
            <h1> {count} </h1>
            <button onClick={handleCountResta}>-</button>
            <button onClick={addToConsole}>Add to consola</button>
            <button onClick={handleCountSuma}>+</button>
            <button onClick={stocknt}>¿Hay stock?</button>
            <button onClick={addToConsolStock}>¿Cuanto stock hay?</button>
        </div>
        
    )
}


export default ItemCount
