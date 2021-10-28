import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { PdfConverter } from './PdfConverter'
import { getFirestore } from '../../service/getFirebase'
import '../navbar/NavBar.css'


export const Ticket = () => {
    const [ordenSubida, setOrdenSubida] = useState();

    const [loading, setLoading] = useState(true);

    const {idRecibo} = useParams ();

    useEffect(() => {
        
        const dbQuery = getFirestore();

        const itemCollection = dbQuery.collection("orders");

        const item = itemCollection.doc(idRecibo);

        itemCollection.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setOrdenSubida({id: doc.id, ...doc.data() });
            });
        })
        .catch(err=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }, [idRecibo])
    return (
        <>
            {loading ? 
            <h1><i class="fas fa-spinner margin-top"></i></h1>
            :  
                <PdfConverter ordenSubida={ordenSubida} /> 
            }
        </>
    )
}
