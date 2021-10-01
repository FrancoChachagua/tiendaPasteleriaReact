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

    const addToCart = (data) =>{
        console.log('data', data);
        let previousCart = [...cartList]

        if(previousCart.some(prod => prod.item.idProducto === data.item.idProducto)){
            previousCart.find(prod => prod.item.idProducto === data.item.idProducto).quantity += data.quantity
            setCartList(previousCart)
        }else {
            setCartList ([...cartList, data])
        }
    };


    const addTo = (data) => {
        console.log('cartList', cartList);
        const exist = cartList.find((p) => p.item.idProducto === data.item.idProducto);
        console.log('exist', exist);
        if (exist) {
            setCartList(
                cartList.map((p) =>
                p.item.idProducto === data.item.idProducto ? { ...exist, quantity: exist.quantity + 1 } : p
                )
            );
            } else {
            setCartList([...cartList, { ...data, quantity: 1 }]);
            }
        };


    const onRemove = (data) => {
        const exist = cartList.find((p) => p.item.idProducto === data.item.idProducto);
        if(exist.quantity === 1 ){
            setCartList(cartList.filter((p) => p.item.idProducto != data.item.idProducto))
        }else{
            setCartList(
                cartList.map((p) =>
                p.item.idProducto === data.item.idProducto ? { ...exist, quantity: exist.quantity - 1} : p
                )
            )

        }
    }


    console.log('cartList', cartList);

    return(
        <cartContext.Provider value = {{
            cartList,
            addToCart,
            addTo,
            onRemove
            }}>
            {children}
        </cartContext.Provider>
    )
}
