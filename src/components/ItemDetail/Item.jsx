import React from 'react'
import { useState, useContext } from "react";
import { ContextApp } from '../../App'
import { useCartContext } from '../../context/cartContext'

import ItemCount from '../count/ItemCount';
import './ItemStyles.css';

const Item = ({item}) => {
    const [quantity, setQuantity] = useState()
    
    const {addToCart} = useCartContext()

    const {state} = useContext (ContextApp)

    const onAdd = (quantity) =>{
        addToCart({item: item, quantity: quantity})

    }



    console.log('state', state);
    


    return (
        <div>
            <div className= "d-inline-flex" key={item.idProducto}>
                <div className="m-4">
                    <h3 className="">{item.nombreProducto}</h3>
                    <img className=" imgCardProds" alt={item.nombreProducto} src={item.imagenProducto} />
                    <div className="">
                        <h4 className="">{item.precioProducto}</h4>
                        <button className="btn cardItemDos-button"> <a href={`/item/${item.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {item.nombreProducto} </a></button>
                    </div>
                </div>
            </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
    )
}

export default Item
