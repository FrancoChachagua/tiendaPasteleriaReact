import React from 'react'
import {useState, useEffect} from 'react'
import {callApiTwo} from '../../utilss/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [productwo, setProductwo] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        callApiTwo
        .then(resp => setProductwo(resp))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <div>
            { loading ? <h2>Cargando...</h2>: <ItemDetail productwo = {productwo} /> }
        </div>
    )
}

export default ItemDetailContainer
