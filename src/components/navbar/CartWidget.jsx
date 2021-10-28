import React from 'react'
import './NavBar.css';

const CartWidget = (props) => {
    
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
