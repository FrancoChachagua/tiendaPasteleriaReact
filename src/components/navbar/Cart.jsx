import React from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import { useCartContext } from '../../context/cartContext'

const Cart = () => {
    const {cartList, addTo, onRemove} = useCartContext()
    
    const priceItem = cartList.reduce((a, c) => a + c.item.precioProducto * c.quantity, 0);

    const IVA = 0.21;

    const priceItemIVA = priceItem * IVA;

    const totalPrice = priceItem + priceItemIVA 


    console.log(cartList);
    return (
        <>
            <div>
            {cartList.length === 0 && <div> El carrito esta vacío, primero debe seleccionar un producto! </div>}
            </div>
            <div>
                {cartList.map(item => <div key={item.idProducto}>
                                            <img src={item.item.imagenProducto} className="imgCart" alt="" />
                                            <h2>{item.item.nombreProducto}</h2>
                                            <h2>{item.quantity} x {item.item.precioProducto}</h2>
                                            <div>
                                                <button onClick={()=> addTo(item)}>+</button>
                                                <button onClick={()=> onRemove(item)}>-</button>
                                            </div>
                                            
                                    </div>)}
            </div>
            {cartList.length !==0 && (
                <>
                    <h4> Precio: ${priceItem}</h4>
                    <h4> IVA del producto: ${priceItemIVA}</h4>
                    <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    <h4></h4>
                </>
            )}
        </>
                    )

}

export default Cart
