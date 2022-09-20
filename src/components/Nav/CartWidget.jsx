import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

  const {totalProducts} = useContext(CartContext)

  return (
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
      <span>{totalProducts() === 0 ? '' : totalProducts()}</span>
    </div>
    
  )
}

export default CartWidget;