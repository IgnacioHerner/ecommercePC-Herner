import React from 'react'
import style from './ItemDetail.module.css'


const ItemDetail = ({item}) => {
  return (
    <div className={style.card_container}>
      <img src={item.img} alt={item.title}/>
      <h2 className={style.h2}>{item.title}</h2>
      <p className={style.price}>$ {item.price}</p>
      <p className={style.stock}>Stock: {item.stock}</p>
    </div>
  )
}

export default ItemDetail
