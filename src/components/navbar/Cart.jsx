import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const {cartList} = useCartContext()
    console.log(cartList);
    return (
            <div>
                {cartList.map(item => <div key={item.idProducto}>
                    <div className="">
                    
                    <img src={item.item.imagenProducto} className="imgCart"alt="" />
                    </div>
                    <h2>{item.item.nombreProducto}</h2>
                    <h3> {item.item.precioProducto} </h3>
                    <h3> {item.quantity}  </h3>
                    </div>)}
            </div>
                    )

}

export default Cart
