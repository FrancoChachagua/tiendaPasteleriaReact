import React from 'react'
import './NavBar.css';
// import { useCartContext } from '../../context/cartContext'

const CartWidget = (props) => {
    // const { cartList } = useCartContext()
    
    // const numberCart = () => {
    //     return cartList.length
    // }

    const {numberCart} = props

    return (
        <>
            <i className="fas fa-shopping-cart cartNav">
            {''}{numberCart?(<button>{numberCart}</button>): ('')}
            </i>
        </>
    )
}

export default CartWidget
