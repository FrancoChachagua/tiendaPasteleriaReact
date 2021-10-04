import React from 'react'
import './itemStyle.css'
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <div className= "d-inline-flex">
            <div className="m-3" key={prod.idProducto}>
                <div className="">
                    <h3 className="">{prod.nombreProducto}</h3>
                    <img className=" imgCardProds" alt={prod.nombreProducto} src={prod.imagenProducto} />
                    <div className="">
                        <h4 className="">${prod.precioProducto}</h4>
                        <button className="btn cardItemDos-button"><Link exact to={`/item/${prod.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {prod.nombreProducto} </Link></button>
                        {/* <button className="btn cardItemDos-button"><a href={`/item/${prod.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {prod.nombreProducto} </a></button>  Error de enrutado, no tenia <Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
