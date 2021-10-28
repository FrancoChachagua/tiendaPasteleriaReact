import React, { useState } from 'react'

export const PdfConverter = ({ ordenSubida}) => {
    
    const [ordenTicket, setOrdenTicket] = useState(ordenSubida.items)

    return (
        <>
            <h3>  Jorge Pasteleria  </h3>
            <p>  Datos del pedido: </p>
            <p> A nombre de: <b> {ordenSubida.buyer.name} </b> </p>
            <p> Mail: <b> {ordenSubida.buyer.email} </b> </p>
            <p> Telefono: <b> {ordenSubida.buyer.phone} </b></p>
            <p> Nro de ticket/ ID de compra: <b>  {ordenSubida.id} </b> </p>

            <table className="table table-striped">
                <thead>
                    <tr  className="bg-info">
                        <th> Id producto </th>
                        <th>Nombre  </th>
                        <th>Precio $</th>
                    </tr>
                </thead>
                <tbody>
                {ordenTicket.map(item =>       
                                            <tr key={item.id}>
                                                <td> {item.id} </td>
                                                <td> {item.title} </td>
                                                <td> $ {item.price}</td>
                                            </tr> 
                                )}
                </tbody>
                <tfoot>                           
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="bg-danger">Precio total ${ordenSubida.total} </td>
                    </tr>
                </tfoot> 
            </table>
        </>
    )
}



