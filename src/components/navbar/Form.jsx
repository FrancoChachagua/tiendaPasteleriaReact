import React from 'react'
import {useState} from 'react'
import { getFirestore } from '../../service/getFirebase';
import  firebase  from 'firebase'
import 'firebase/firestore'
import { useCartContext } from '../../context/cartContext'

const Form = () => {
    const {cartList,setCartList} = useCartContext()

    function purchaseFinished(respuesta) {
        alert(`Su compra ha sido procesada con exito, este es su numero de ticket: ${respuesta}`)
        setCartList([])
    }

    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email:''
    })

    const formOnsubmit = (e) =>{    

        e.preventDefault()    

        let order = {}

        order.date = firebase.firestore.Timestamp.fromDate( new Date() );
        
        order.buyer = { name: 'Jorge' , phone:'54351359520' , email:'jorgePasteleria@gmail.com'   }
        
        order.items = cartList.map(itemCart => {
            const id = itemCart.item.id;
            const title = itemCart.item.title;
            const price = itemCart.item.price * itemCart.quantity;
            
            return {id, title, price}   
        })
        

        const db = getFirestore()
        db.collection('orders').add(order)
        .then(respuesta => purchaseFinished(respuesta.id))
        .catch(error=> console.log(error))
        .finally(()=>
            setFormData({
                name: '',
                phone: '',
                email: ''
            }) 
        )
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(itm=> itm.item.id)
        )
            
        const batch = db.batch();

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(itm => itm.item.id === docSnapshot.id).quantity
                })
            })
        })
    }
    function formOnchange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            
            {cartList.length !==0 && ( <div>
                                            <form  onSubmit={formOnsubmit} onChange={formOnchange}>
                                                <input 
                                                    type='text' 
                                                    placeholder='Jorge' 
                                                    name='name'
                                                    value={formData.name} 
                                                />  
                                                <input 
                                                    type='number' 
                                                    placeholder='for example: 54351359520' 
                                                    name='phone' 
                                                    value={formData.phone}
                                                />  
                                                <input 
                                                    type='text' 
                                                    placeholder='ingrese el email' 
                                                    name='email' 
                                                    value={formData.email}    
                                                /> 
                                                <button>Finalizar compra</button>
                                            </form>
                                        </div>
            )}
                
        </>
    )
}

export default Form
