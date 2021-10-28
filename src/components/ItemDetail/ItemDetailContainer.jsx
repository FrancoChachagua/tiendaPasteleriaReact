import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../service/getFirebase'
import ItemDetail from './ItemDetail'
import './ItemStyles.css';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const [loading, setLoading] = useState(true);
    const {idItem} = useParams ();


    useEffect(() => {
        const dbQuery = getFirestore()
        const itemCollection = dbQuery.collection('items')
        const item = itemCollection.doc(idItem)

        item.get().then((doc) => {
            if(!doc.exists){
                console.log('item no exite')
                return;
            }
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
        {loading ? <h1><i class="fas fa-spinner margin-top"></i></h1> : <ItemDetail item = {item} />}
        </>
    )
}
export default ItemDetailContainer
