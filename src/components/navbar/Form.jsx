import {useState} from 'react'
import { getFirestore } from '../../service/getFirebase';
import  firebase  from 'firebase'
import 'firebase/firestore'
import { useCartContext } from '../../context/cartContext'
import { useAuth } from '../../authentication/authenticationContext';
import { Link } from 'react-router-dom';

const Form = () => {
    const [errorAccount, setErrorAccount] = useState(null);
    const {cartList, totalPrice} = useCartContext();
    const { currentUser } = useAuth();
    const [eventButton, setEventButton] = useState(true);
    const [idTicket, setIdTicket] = useState('');
    
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
        
        orden.buyer = formData;

        orden.email = formData.email;

        orden.total = totalPrice();

        orden.items = cartList.map(itemCart => {
            const id = itemCart.item.id;
            const title = itemCart.item.title;
            const price = itemCart.item.price * itemCart.quantity;
            const quantity = itemCart.quantity;
            
            return {id, title, price, quantity}   
        })

        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(respuesta => setIdTicket(respuesta))
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

    const cantBuy = (user) => {
        if (user===0 || user === null) {
            setEventButton(true);
            setErrorAccount('No tienes una cuenta, crea una');
            setTimeout(() => {
                    setErrorAccount('');
                }, 2500);
            }else{
                alert('Compra realizada con exito!');
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
                                            <div>
                                                <label for="file">El progreso de tu compra es de: 70%</label> <br />
                                                <progress id="file" max="100" value="70">  </progress>
                                                <p> Rellena el último formulario y termina tu compra! </p>
                                            </div><br />
                                            <form  onSubmit={(e)=>formOnsubmit(e,currentUser)} onChange={formOnchange}>
                                                {currentUser ? 
                                                                <>
                                                                <div>
                                                                    <label htmlFor="Email">Email</label>
                                                                </div>
                                                                {formData.email = currentUser.email}
                                                                </>
                                                                
                                                :
                                                <>
                                                    <label htmlFor="Email">Email</label><br />            
                                                    <input 
                                                        type='text' 
                                                        placeholder='email' 
                                                        name='email' 
                                                        value={formData.email}  
                                                    /> 
                                                </>     
                                                }
                                                <br/>
                                                
                                                <label htmlFor="Nombre">Nombre</label><br />
                                                <input 
                                                    type='text' 
                                                    placeholder='Jorge' 
                                                    name='name'
                                                    value={formData.name} 
                                                    
                                                />  <br />
                                                <label htmlFor="Telefono">Teléfono</label><br />
                                                <input 
                                                    type='number' 
                                                    placeholder='for example: 54351359520' 
                                                    name='phone' 
                                                    value={formData.phone}
                                                />  <br />

                                                {(eventButton===false) ?
                                                    <div> <br />
                                                        <Link exact to="/Ticket">
                                                            <button>Ver la factura </button>
                                                        </Link>
                                                    </div>
                                                    :
                                                    <></>
                                                }
                                                <br/><p> {errorAccount && <p className="error"> {errorAccount} </p> } </p><br/>
                                                <button onClick={()=>cantBuy(currentUser)}>Finalizar compra</button>
                                                
                                            </form><br />
                                            <Link exact to="/Cart">
                                                <button>Volver al cart</button>
                                            </Link>
                                        </div>
            )}
        </>
    )
}

export default Form

