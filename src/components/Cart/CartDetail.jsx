import React from 'react'
import style from './Cart.module.css'

const CartDetail = ({prod, removeItem}) => {
  return (
    <div className={`${style.containerCartItems} ${style.border}`}>
    <img className={style.img} src={prod.img} alt={prod.title} />
    <h2 className={style.h2} >{prod.title}</h2>
    <h3 className={style.h3}>Cantidad: {prod.qty}</h3>
    <h3 className={style.price}>${prod.price}.</h3>

    <ul className={style.list_style}>
      <li>
          <button className={style.btn_eliminar} onClick={() => removeItem(prod.id)}>Eliminar Producto</button>
      </li>
    </ul>
  </div>
  )
}

export default CartDetail