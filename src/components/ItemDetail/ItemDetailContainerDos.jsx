import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {callApi} from '../../utilss/Mock'
import ItemDetailDos from './ItemDetailDos'

const ItemDetailContainerDos = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams ();

    useEffect(() => {
        callApi
        .then((respuesta) =>{
            if(idItem){
                const mostrarUnoSolo = respuesta.filter((item => item.idProducto === idItem))
                console.log('idItem:', idItem);
                setItem(mostrarUnoSolo)
            }else{
                setItem(respuesta)
            }
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    }, [idItem])

    return (
        <>
        { loading ? <h2>Cargando...</h2>: <ItemDetailDos item = {item[0]} /> }
        </>
    )
}
export default ItemDetailContainerDos
