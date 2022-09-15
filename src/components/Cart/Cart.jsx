import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const {clearCart} = useContext(CartContext)
  return (
    <div>
      <button onClick={clearCart}> ClearCart</button>
    </div>
  )
}

export default Cart