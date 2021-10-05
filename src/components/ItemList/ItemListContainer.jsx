import { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import React from 'react';
import ItemList from '../ItemList/ItemList';
import { getFirestore } from '../../service/getFirebase';

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory} = useParams();

    useEffect(() => {
        if(idCategory){
            // inicializando el cliente
            const dbQuery = getFirestore()

            // Configurando a que coleccion accedo con .collection (setando)
            const itemCollection = dbQuery.collection('items')

            // Filtramos con el .where y hacemos el llamado con el .get
            itemCollection.where('categoryId' , '==', idCategory).get()
            .then(respuesta => {
                // Accedemos al set de datos con .docs, "combinamos" la respuesta con el id y guardamos en setProductos el resultado
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
        { loading ? <h2>Cargando...</h2>: <ItemList productos = {productos} /> }
        </div>
    )
}

export default ItemListContainer
