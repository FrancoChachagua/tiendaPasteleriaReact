import React from 'react'
import './itemStyle.css'
import { Link } from 'react-router-dom';

const Item = ({prod}) => {
    return (
        <div className= "d-inline-flex">
            <div className="m-3" key={prod.id}>
                <div className="">
                    <h3 className="">{prod.title}</h3>
                    <img className=" imgCardProds" alt={prod.title} src={prod.imageId} />
                    <div className="">
                        <h4 className="">${prod.price}</h4>
                        <button className="btn cardItemDos-button"><Link exact to={`/item/${prod.id}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {prod.title} </Link></button>
                        {/* <button className="btn cardItemDos-button"><a href={`/item/${prod.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {prod.nombreProducto} </a></button>  Error de enrutado, no tenia <Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
