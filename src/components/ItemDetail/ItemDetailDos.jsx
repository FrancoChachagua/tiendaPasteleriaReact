import React from 'react'
import ItemDos from './ItemDos'

const ItemDetailDos = ({item}) => {
    console.log('itemDetailDos item:', item);
    return (
        <>
            <ItemDos item={item}/>
        </>
    )
}




export default ItemDetailDos