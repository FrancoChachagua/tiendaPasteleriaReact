import React, { useEffect, useState } from 'react'
import { PdfConverter } from './PdfConverter'
import { getFirestore } from '../../service/getFirebase'
import '../navbar/NavBar.css'


export const Ticket = ({totalPrice}) => {
    const [ordenFirestore, setOrdenFirestore] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const dbQuery = getFirestore();

        const itemCollection = dbQuery.collection("orders").orderBy("date","desc");

        itemCollection.get()
        .then(respuesta => {
            setOrdenFirestore(respuesta.docs.map(orden => ({id: orden.id, ...orden.data() } ) )  )
            })
        .catch(err=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }, [])

    const lastTicket= ordenFirestore.slice(0, 1);

    return (
        <>
            {loading ? 
            <h1><i class="fas fa-spinner margin-top"></i></h1>
            :  
                <PdfConverter ordenFirestore={ordenFirestore} totalPrice={totalPrice} lastTicket={lastTicket}/> 
            }
        </>
    )
}
