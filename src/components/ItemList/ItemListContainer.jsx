import { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import React from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../service/getFirebase';
import './itemStyle.css';

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory} = useParams();

    useEffect(() => {
        if(idCategory){
            const dbQuery = getFirestore()
            const itemCollection = dbQuery.collection('items')
            itemCollection.where('categoryId' , '==', idCategory).get()
            .then(respuesta => {
                setProductos( respuesta.docs.map(prod => ({id: prod.id, ...prod.data() } ) )  )
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }else{
            const dbQuery = getFirestore()
            dbQuery.collection('items').get()
            .then(respuesta => {
                setProductos( respuesta.docs.map(persona => ({id: persona.id, ...persona.data() } ) )  )
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }
    }, [idCategory])

    return (
        <div>
        { loading ? <h1><i class="fas fa-spinner margin-top"></i></h1> : <ItemList productos = {productos} /> }
        </div>
    )
}

export default ItemListContainer
