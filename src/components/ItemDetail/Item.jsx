import React from 'react'
import { useState } from "react";
import { useCartContext } from '../../context/cartContext'

import ItemCount from '../count/ItemCount';
import './ItemStyles.css';

const Item = ({item}) => {
    const [quantity, setQuantity] = useState()

    const {addToCart, cartList} = useCartContext()
    
    const onAdd = (quantity) =>{
        addToCart({item: item, quantity: quantity})
    }

    const [stock, setStock] = useState(item.stock)

    return (
        <div>
            <div className= "d-inline-flex" id={item.id}>
                <div className="m-4">
                    <h3 className="">{item.title}</h3>
                    <img className=" imgCardProds" alt={item.title} src={item.imageId} />
                    <div className="">
                        <h4 className="">${item.price}</h4>
                    </div>
                    <div>
                        <div>
                            <p>{item.description}</p>
                        </div>

                        <table className="table">
                            <thead>
                                <tr  className="bg-info">
                                    <th>SinTACC </th>
                                    <th>Vegan  </th>
                                    <th>Light</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <td> {(item.productSinTACC === true)  ? (
                                                                            <p><i class="fas fa-check-circle"></i></p>
                                                                        ) : (
                                                                            <p> <i class="fas fa-times-circle"></i> </p>
                                                                        )} 
                                    </td>
                                    <td> {(item.productLight === true)  ? (
                                                                            <p><i class="fas fa-check-circle"></i></p>
                                                                        ) : (
                                                                            <p> <i class="fas fa-times-circle"></i> </p>
                                                                        )} 
                                    </td>
                                    <td> {(item.productVegan === true)  ? (
                                                                            <p><i class="fas fa-check-circle"></i></p>
                                                                        ) : (
                                                                            <p> <i class="fas fa-times-circle"></i> </p>
                                                                        )} 
                                    </td>
                                </tr> 
                            </tfoot>
                        </table>
                        <div> Stock del producto : {stock}</div>
                    </div>
                </div>
            </div>
                <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
            </div>
    )
}

export default Item
