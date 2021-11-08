import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

export const PdfConverter = ({ordenFirestore}) => {

    const [ordenFirestoreItems, setOrdenFirestoreItems] = useState(ordenFirestore[0].items)  

    const {cartList, clear} = useCartContext()

    return (
        <>
            <h3>  Jorge Pasteleria  </h3>
            <p>  Datos del pedido: </p>
            <p> A nombre de: <b> {ordenFirestore[0].buyer.name} </b> </p>
            <p> Mail: <b> {ordenFirestore[0].buyer.email} </b> </p>
            <p> Telefono: <b> {ordenFirestore[0].buyer.phone} </b></p>
            <p> Nro de ticket/ ID de compra: <b>  {ordenFirestore[0].id} </b> </p>

            <table className="table table-striped">
                <thead>
                    <tr  className="bg-info">
                        <th> Id producto </th>
                        <th>Nombre  </th>
                        <th>Cantidad</th>
                        <th>Precio $</th>
                    </tr>
                </thead>
                <tbody>
                {ordenFirestoreItems.map(item =>       
                                            <tr key={item.id}>
                                                <td> {item.id} </td>
                                                <td> {item.title} </td>
                                                <td> {item.quantity} </td>
                                                <td> $ {item.price}</td>
                                            </tr> 
                                )}
                </tbody>
                <tfoot>                           
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="bg-danger">Precio total con IVA ${ordenFirestore[0].total} </td>
                    </tr>
                </tfoot> 
            </table>
            <div>
                {cartList.length !==0 && (<> 
                                            <Link exact to="/">
                                                <button onClick={()=> clear(cartList.item)} > Hacer una compra nueva!</button>
                                            </Link> <br /><br />
                                            <Link exact to="/">
                                                <button>Añadir otro elemento al carrito</button>
                                            </Link>
                                        </>
                                        )}
            </div>
            
        </>
    )
}