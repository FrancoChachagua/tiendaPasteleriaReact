import React from 'react'
import { useState, useContext } from "react";
import { ContextApp } from '../../App'
import { useCartContext } from '../../context/cartContext'

import ItemCount from '../count/ItemCount';
import './ItemStyles.css';

const Item = ({item}) => {
    const [quantity, setQuantity] = useState()

    const {addToCart, cartList} = useCartContext()
    
    const onAdd = (quantity) =>{
        addToCart({item: item, quantity: quantity})
        console.log('item aqui',item);
    }

    return (
        <div>
            <div className= "d-inline-flex" key={item.id}>
                <div className="m-4">
                    <h3 className="">{item.title}</h3>
                    <img className=" imgCardProds" alt={item.title} src={item.imageId} />
                    <div className="">
                        {/* <button className="marginCartItem" onClick={() => onBoolean(item)} > Log boolean </button>  */}
                        <h4 className="">${item.price}</h4>
                    </div>
                    <div>
                        <div>
                            <p>{item.description}</p>
                        </div>
                        <div> SinTACC:
                        {(item.productSinTACC === true)  ? (
                            <p>Este producto es apto!</p>
                        ) : (
                            <p> Este producto NO es APTO</p>
                        )}
                        </div>
                    </div>
                </div>
            </div>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            </div>
    )
}

export default Item
