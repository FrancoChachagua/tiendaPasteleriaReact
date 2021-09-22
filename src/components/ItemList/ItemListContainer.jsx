import { useState, useEffect } from 'react';
import {callApi} from '../../utilss/Mock';
import {useParams} from 'react-router';
import React from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(props) {
    console.log(props);
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory} = useParams();

    console.log(idCategory);
    useEffect(() => {
        callApi
            .then((respuesta) =>{
                if(idCategory){
                    const categoriasFiltradas = respuesta.filter((item) => item.category.toLowerCase() === idCategory)
                    setProductos(categoriasFiltradas)
                }else{
                    setProductos(respuesta)
                }
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
    }, [])


    
    return (
        <div>
        <h1 className="fontSaludo"> {props.saludo}! Prop greeting</h1>
        { loading ? <h2>Cargando...</h2>: <ItemList productos = {productos} /> }
        </div>
    )
}

export default ItemListContainer
