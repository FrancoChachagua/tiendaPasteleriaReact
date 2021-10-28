import {useState} from 'react'
import { getFirestore } from '../../service/getFirebase';
import  firebase  from 'firebase'
import 'firebase/firestore'
import { useCartContext } from '../../context/cartContext'
import { useAuth } from '../../authentication/authenticationContext';
import { Link } from 'react-router-dom';

const Form = (props) => {
    const [eventButton, setEventButton] = useState(true)
    const [errorAccount, setErrorAccount] = useState(null)
    const {totalPrice} = props
    const {cartList} = useCartContext()
    const [idTicket, setIdTicket] = useState('')
    const { currentUser } = useAuth();

    
    const [ formData, setFormData ] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const formOnsubmit = (e, user) =>{   
        if ( user===0 || user === null){
            e.preventDefault();
            setErrorAccount('No tienes una cuenta, primero debes crear una!');      
        }else{
        e.preventDefault()

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
        
        orden.buyer = formData
    
        orden.total = totalPrice

        orden.items = cartList.map(itemCart => {
            const id = itemCart.item.id;
            const title = itemCart.item.title;
            const price = itemCart.item.price * itemCart.quantity;
            const quantity = itemCart.quantity
            
            return {id, title, price, quantity}   
        })
        
        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(respuesta => setIdTicket(respuesta.id))
        .catch(error=> console.log(error))
        .finally(()=>{
            setFormData({
                name: '',
                phone: '',
                email: ''        
            });
        }
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
            batch.commit()
        })
        }
    }

    const cantBuy = (e , user) => {
        if (user===0 || user === null) {
            setEventButton(true);
            setErrorAccount('No tienes una cuenta, crea una');
            setTimeout(() => {
                    setErrorAccount('');
                }, 2500);
            }else{
                setEventButton(false);
            }
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
                                            
                                            <form  onSubmit={(e)=>formOnsubmit(e,currentUser)} onChange={formOnchange}>
                                            {currentUser ? 
                                                    
                                                        formData.email = currentUser.email
                                                    
                                                    :
                                                    <input 
                                                        type='text' 
                                                        placeholder='email' 
                                                        name='email' 
                                                        value={formData.email}    
                                                    />  }
                                                <br />
                                                <input 
                                                    type='text' 
                                                    placeholder='Jorge' 
                                                    name='name'
                                                    value={formData.name} 
                                                    
                                                />  <br />
                                                <input 
                                                    type='number' 
                                                    placeholder='for example: 54351359520' 
                                                    name='phone' 
                                                    value={formData.phone}
                                                />  <br />

                                                {(eventButton===false) ?
                                                <div>
                                                    <Link exact to='/Ticket'>
                                                        <button> Ver la factura </button>
                                                    </Link>    
                                                    
                                                </div>
                                                :
                                                <>
                                                </>
                                                }
                                                <p> {errorAccount && <p className="error"> {errorAccount} </p> } </p>
                                                <button onClick={(e)=>cantBuy(e, currentUser)}>Finalizar compra</button>
                                            </form>
                                            

                                            
                                        </div>
            )}
                
        </>
    )
}

export default Form
