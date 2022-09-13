import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../Count/ItemCount'
import style from './ItemDetail.module.css'



const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0)
  const onAdd = (cantidad) => {
    setCantidad(cantidad)
  }



  return (
    <div className={style.card_container}>
      <img src={item.img} alt={item.title}/>
      <h2 className={style.h2}>{item.title}</h2>
      <p className={style.price}>$ {item.price}</p>
      <p className={style.stock}>Stock: {item.stock}</p>

      {cantidad === 0
          ? (<ItemCount stock ={item.stock} initial={1} onAdd={onAdd}/>) 
          : (<Link to="/cart">Ir al carrito</Link>)
      }
    </div>
  )
}

export default ItemDetail



