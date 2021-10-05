import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../service/getFirebase'
import {callApi} from '../../utilss/Mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams ();


    useEffect(() => {
        // Inicializando cliente
        const dbQuery = getFirestore()
        // Config a que collecion acedemos con .collection
        const itemCollection = dbQuery.collection('items')
        // Config que documento vamos a buscar con .doc
        const item = itemCollection.doc(idItem)

        item.get().then((doc) => {
            if(!doc.exists){
                console.log('item no exite')
                return;
            }
            console.log('item encontrado')
            setItem ({id: doc.id, ...doc.data() })
        })
        .catch((error) => {
            console.log('Error buscando items', error)
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [idItem])

    return (
        <>
        {loading ? <h2>Cargando...</h2>: <ItemDetail item = {item} />}
        </>
    )
}
export default ItemDetailContainer
