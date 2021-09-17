import React from 'react'
import ItemF from './ItemF'

const ItemDetail = ({productwo}) => {
    return (
        <div>
            {productwo.map(prodTwo=> <ItemF prodTwo={prodTwo}/>
            )}
        </div>
    )
}




export default ItemDetail
