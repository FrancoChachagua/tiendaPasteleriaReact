import { useState, createContext, useContext } from 'react'

const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    
    const [cartList, setCartList] = useState([])

    //function addToCart(data) {
      //  setCartList([...cartList, data])
        //Opcion 1 - find((p,index,self) => index === self.indexOf(p))
       // Opcion 2 - Array.from(new Set (...cartList, ...data.item.idProducto))
    //}

    function deleteLista(){
        cartList([])
    }

    
    const addToCart = (data) =>{
        let previousCart = [...cartList]

        if(previousCart.some(prod => prod.item.idProducto === data.item.idProducto)){
            previousCart.find(prod => prod.item.idProducto === data.item.idProducto).quantity += data.quantity
            setCartList(previousCart)
        }else {
            setCartList ([...cartList, data])
        }
    }



    console.log(cartList);

    return(
        <cartContext.Provider value = {{
            cartList,
            addToCart,
            deleteLista
            }}>
            {children}
        </cartContext.Provider>
    )
}
