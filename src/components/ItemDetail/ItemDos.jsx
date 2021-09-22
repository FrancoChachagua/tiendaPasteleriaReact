import React from 'react'
import './ItemStyles.css';

const ItemDos = ({item}) => {
    return (
        <div>
            <div className= "d-inline-flex" key={item.idProducto}>
                <div className="m-4">
                    <h3 className="">{item.nombreProducto}</h3>
                    <img className=" imgCardProds" alt={item.nombreProducto} src={item.imagenProducto} />
                    <div className="">
                        <h4 className="">{item.precioProducto}</h4>
                        <button className="btn cardItemDos-button"> <a href={`/item/${item.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {item.nombreProducto} </a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDos
