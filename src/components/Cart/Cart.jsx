import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import style from './Cart.module.css'

const Cart = () => {
  const {cart, removeItem, clearCart , totalPrice} = useContext(CartContext)

  const total = totalPrice();

  if(cart.length === 0){
    return <div className={style.containerVacio}>
            <h3>Tu carrito está vacío</h3>
            <p>¿No sabés qué comprar? <Link to="/">Volver a comprar</Link></p>
          </div>
  }

  return (
    <div>
      {cart.map((prod) => (
        <div className={style.container} key={prod.id}>
          <img className={style.img} src={prod.img} alt={prod.title} />
          <h2 className={style.h2} >{prod.title}</h2>
          <h3>Cantidad: {prod.qty}</h3>
          <h3>${prod.price}.</h3>
          <ul>
            <li>
                <button onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
            </li>
          </ul>
        </div>
      ))}
      
    <h4>Total: ${total}</h4>
    <button className={style.btnClear} onClick={clearCart}> ClearCart</button>
    </div>
  )
}

export default Cart