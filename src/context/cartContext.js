import { useState, createContext, useContext } from 'react'


const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    
    const [cartList, setCartList] = useState([])


    const addToCart = (data) =>{
        
        let previousCart = [...cartList]
        
        if(previousCart.some(prod => prod.item.id === data.item.id)){
            previousCart.find(prod => prod.item.id === data.item.id).quantity += data.quantity
            setCartList(previousCart)
        }else {
            setCartList ([...cartList, data])
        }
    };

    const addTo = (data) => {
        const exist = cartList.find((p) => p.item.id === data.item.id);
        if (exist) {
            setCartList(
                cartList.map((p) =>
                p.item.id === data.item.id ? { ...exist, quantity: exist.quantity + 1 } : p
                )
            );
            } else {
            setCartList([...cartList, { ...data, quantity: 1 }]);
            }
        };

    const onRemove = (data) => {
        const exist = cartList.find((p) => p.item.id === data.item.id);
        if(exist.quantity === 1 ){
            setCartList(cartList.filter((p) => p.item.id !== data.item.id))
        }else{
            setCartList(
                cartList.map((p) =>
                p.item.id === data.item.id ? { ...exist, quantity: exist.quantity - 1} : p
                )
            )
        }
    }

    const totalPrice = () =>{
        const total = cartList.reduce((acum, item) => (acum + ((item.item.price + item.item.price * 0.21) * item.quantity )), 0);
        return total;
    }
    
    const quantityCart = () =>{
        const quantity = cartList.reduce((acum, item)=>acum + item.quantity, 0)
        return quantity;
    }

    const clear = () => {
        setCartList([])
    } 

    return(
        <cartContext.Provider value = {{
            cartList,
            setCartList,
            addToCart,
            addTo,
            onRemove,
            clear,
            totalPrice,
            quantityCart
            }}>
            {children}
        </cartContext.Provider>
    )
}
