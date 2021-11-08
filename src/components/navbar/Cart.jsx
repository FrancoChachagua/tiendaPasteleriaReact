import React, { useState } from 'react';
import './NavBar.css';
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authentication/authenticationContext';

const Cart = () => {
    
    const {cartList, addTo, onRemove, clear} = useCartContext()
    
    const IVA = 0.21;
    
    const totalPrice = cartList.reduce((a, c) => a + ((c.item.price + c.item.price * IVA) * c.quantity ), 0);

    const [eventButton, setEventButton] = useState(true);
    const [errorAccount, setErrorAccount] = useState(null);
    const { currentUser } = useAuth();



    const cantBuy = (user) => {
        if (user===0 || user === null) {
            setEventButton(true);
            setErrorAccount('No tienes una cuenta, crea una');
            setTimeout(() => {
                    setErrorAccount('');
                }, 2500);
            }else{
                setEventButton(false);
            }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div>
                        <Link exact to='/' >
                            <button className="marginCartItem row">Volver a la tienda</button>
                        </Link>
                    </div>
                    <div>
                        {(cartList.length === 0 )
                        ? 
                        <h4> El carrito esta vacío, primero debe seleccionar un producto! </h4>
                        : 
                        <div>
                            <label for="file">El progreso de tu compra es de: 50%</label> <br />
                            <progress id="file" max="100" value="50">  </progress>
                            <p> Cuando quieras realizar una compra solo debes hacer click en el boton comprar! </p>
                        </div>
                        }
                    </div>
                    <div className="marl50p">
                        {cartList.length !==0 && (  <> 
                                                <h4>Total: ${totalPrice.toFixed(0)}</h4>
                                                <button className="marginCartItem" onClick={()=> clear(cartList.item)} > Vaciar carrito </button>
                                                    </>
                                                )}
                    </div>    
                </div>
                <div>
                    {cartList.map(item =>   <div key={item.id}>
                                                <img src={item.item.imageId} className="imgCart" alt={item.item.title} />
                                                <h2>{item.item.title}</h2>
                                                <h2>{item.quantity} x ${item.item.price}</h2>
                                                <h3> Precio $ {item.quantity * item.item.price} IVA: ${item.quantity * item.item.price* IVA}</h3> 
                                                <div>
                                                    <button onClick={()=> addTo(item)}>+</button>
                                                    <button onClick={()=> onRemove(item)}>-</button>
                                                </div>
                                                <hr />
                                            </div>
                                        )}
                </div>
            </div>
            <div>
                <br /><p> {errorAccount && <p className="error"> {errorAccount} </p> } </p><br />
            </div>
            
            {(cartList.length >= 1) ?
                                    <div>
                                        {eventButton===false ?
                                                            <>
                                                                <Link exact to="/Form">
                                                                    <button> Rellena el formulario para terminar la compra!</button>
                                                                </Link>
                                                            </>
                                                            :
                                                            <>
                                                                <button onClick={(e)=>cantBuy(e, currentUser)}> Comprar! </button>
                                                            </>
                                        }
                                    </div>
                                    :
                                    <></>
                                
            }
            <div className="d-none"> 
                
            </div>
        </>
            )

}

export default Cart
