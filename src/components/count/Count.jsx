import '../navbar/NavBar.css'
import React from 'react';
import ItemCount from './ItemCount';

function Count() {
    const onAdd = (amount) => {
        console.log('Usted ha seleccionado:', amount);
    }
    return (
        <div>
            <h1>Contador</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Count

