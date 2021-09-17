import React from 'react'

const ItemF = ({prodTwo}) => {
    return (
        <div>
            <div className= "d-inline-flex" id={prodTwo.idProducto}>
                <div className="m-4">
                    <h3 className="">{prodTwo.nombreProducto}</h3>
                    <h3>Soy el array.filter!</h3>
                    <img className=" imgCardProds" alt={prodTwo.nombreProducto} src={prodTwo.imagenProducto} />
                    <div className="">
                        <h4 className="">{prodTwo.precioProducto}</h4>
                        <button className="btn btn-primary "> <i className="fas fa-birthday-cake"></i> Detalles de {prodTwo.nombreProducto}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemF

