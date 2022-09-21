import React from 'react'
import style from './CartWidget.module.css'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext);

  return (
    <div className={style.txtnone}>
      <h2 className="material-symbols-outlined">shopping_cart </h2>
      <span className={style.span}>{totalQuantity() === 0 ? ' ' : totalQuantity()}</span> 
    </div>
    
  )
}

export default CartWidget;