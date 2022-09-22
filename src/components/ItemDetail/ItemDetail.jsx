import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../Count/ItemCount'
import style from './ItemDetail.module.css'



const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(0)
  const { addToCart, getProductQuantity } = useContext(CartContext)

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addToCart(item, cantidad);
  };

  const quantity = getProductQuantity(item.id)

  return (
    <div className={style.detail}>
      <img src={item.img} alt={item.title} />
      <div className={style.info}>
        <h2 className={style.h2}>{item.title}</h2>
        <p className={style.price}>$ {item.price}</p>
        <p className={style.stock}>Stock disponible: {item.stock}</p>

        {cantidad === 0
          ? (<ItemCount stock={item.stock} initial={quantity} onAdd={onAdd} />)
          : (<Link to="/cart">Ir al carrito</Link>)
        }
      </div>
    </div>
  )
}

export default ItemDetail



