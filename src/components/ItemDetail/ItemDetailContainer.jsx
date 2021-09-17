import React from 'react'
import {useState, useEffect} from 'react'
import {callApiTwo} from '../../utilss/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productwo, setProductwo] = useState([])

    useEffect(() => {
        callApiTwo.then(resp => setProductwo(resp))
    }, [])

    return (
        <div>
            <ItemDetail productwo = {productwo}/>
        </div>
    )
}

export default ItemDetailContainer
