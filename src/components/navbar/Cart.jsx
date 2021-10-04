import React from 'react'
import './NavBar.css';
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom';

const Cart = () => {
    const {cartList, addTo, onRemove, clear} = useCartContext()
    
    const priceItem = cartList.reduce((a, c) => a + c.item.precioProducto * c.quantity, 0);

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
                    {cartList.map(item =>   <div key={item.idProducto}>
                                                <img src={item.item.imagenProducto} className="imgCart" alt={item.item.nombreProducto} />
                                                <h2>{item.item.nombreProducto}</h2>
                                                <h2>{item.quantity} x ${item.item.precioProducto}</h2>
                                                <div>
                                                    <h4> Precio: ${priceItem}</h4>
                                                    <h4> IVA del producto: ${priceItemIVA}</h4>
                                                </div>
                                                <div>
                                                    <button onClick={()=> addTo(item)}>+</button>
                                                    <button onClick={()=> onRemove(item)}>-</button>
                                                </div>
                                                <hr /><br />
                                                <div className="row">
                                                    <h4>{item.item.sinTACC}</h4>
                                                </div>
                                            </div>
                                        )}
                </div>
                
            </div>
            
            <div className="col-6">
                <Link exact to='/' >
                    <button className="marginCartItem row">Ir a la tienda</button>
                </Link>
                <Link exact to='category/tartasytortas'>
                    <button className="marginCartItem row ">Ir a la categoria de tartas y tortas</button>
                </Link>
                <Link exact to='/item/100'>
                    <button className="marginCartItem row" >Ir al producto Rolls</button>
                </Link>
                <Link exact to='/item/101'>
                    <button className="marginCartItem row" >Ir al producto Chocotorta</button>
                </Link>
                <Link exact to='/item/102' >
                    <button className="marginCartItem row" >Ir al producto Daquoise</button>
                </Link>
                <Link exact to='/item/103' >
                    <button className="marginCartItem row" >Ir al producto Pastel Fram</button>
                </Link>
                <Link exact to='/item/104' >
                    <button className="marginCartItem row" >Ir al producto Torta FrRojos </button>
                </Link>
                <Link exact to='/item/105' >
                    <button className="marginCartItem row" >Ir al producto Medialunas</button>
                </Link>
                <Link exact to='/item/106' >
                    <button className="marginCartItem row" >Ir al producto Tarta de Z.</button>
                </Link>
                <Link exact to='/item/107' >
                    <button className="marginCartItem row" >Ir al producto Brownie</button> 
                </Link>
            </div>
            
        </>
                    )

}

export default Cart
