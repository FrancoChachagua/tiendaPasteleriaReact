import React from 'react'

const ItemF = ({productwo}) => {
    return (
        <div>
            <div className= "d-inline-flex" id={productwo.idProducto}>
                <div className="m-4">
                    <h3 className="">{productwo.nombreProducto}</h3>
                    <h3>Soy el array.find, que ahora es un objet xd !</h3>
                    <img className=" imgCardProds" alt={productwo.nombreProducto} src={productwo.imagenProducto} />
                    <div className="">
                        <h4 className="">{productwo.precioProducto}</h4>
                        <button className="btn cardItemDos-button"><a href={`/item/${productwo.idProducto}`} className="cardItemDos-buttonHref"> <i className="fas fa-birthday-cake"></i> Detalles de {productwo.nombreProducto} </a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemF

