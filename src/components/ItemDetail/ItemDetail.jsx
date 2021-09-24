import React from 'react'
import Item from './Item'

const ItemDetail = ({item}) => {
    console.log('itemDetail item:', item);
    return (
        <>
            <Item item={item}/>
        </>
    )
}




export default ItemDetail