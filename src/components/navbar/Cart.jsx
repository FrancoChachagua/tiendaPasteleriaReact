import React from 'react'
import './NavBar.css';
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';
import Form from './Form';


const Cart = () => {
    const {cartList, addTo, onRemove, clear} = useCartContext()
    
    const priceItem = cartList.reduce((a, c) => a + c.item.price * c.quantity, 0);

    const IVA = 0.21;

    const priceItemIVA = priceItem * IVA;

    const totalPrice = priceItem + priceItemIVA 

    

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {cartList.length === 0 && <> El carrito esta vacío, primero debe seleccionar un producto! </>}
                    <div className="marl50p">
                            {cartList.length !==0 && (  <> 
                                                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                                                        <button className="marginCartItem" onClick={()=> clear(cartList.item)} > Vaciar </button>
                                                        
                                                        </>
                                                    )}
                    </div>    
                </div>
                <div>
                    {cartList.map(item =>   <div key={item.id}>
                                                <img src={item.item.imageId} className="imgCart" alt={item.item.title} />
                                                <h2>{item.item.title}</h2>
                                                <h2>{item.quantity} x ${item.item.precioProducto}</h2>
                                                <div>
                                                    <h4> Precio: ${priceItem}</h4>
                                                    <h4> IVA del producto: ${priceItemIVA}</h4>
                                                </div>
                                                <div>
                                                    <button onClick={()=> addTo(item)}>+</button>
                                                    <button onClick={()=> onRemove(item)}>-</button>
                                                </div>
                                                <hr />
                                            </div>
                                        )}
                </div>
            </div>
        
            <div className="col-6">
                <Link exact to='/' >
                    <button className="marginCartItem row">Ir a la tienda</button>
                </Link>
            </div>

            <Form/>
            
        </>
                    )

}

export default Cart
