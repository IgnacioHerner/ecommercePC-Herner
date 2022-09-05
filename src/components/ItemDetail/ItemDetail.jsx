import React from 'react'
import style from './ItemDetail.module.css'


const ItemDetail = ({item}) => {
  return (
    <div className={style.card_container}>
        <img src={item.img} alt={item.title} />
        <div className={style.container}>
            <h2 className={style.h2}>{item.title}</h2>
            <p className={style.price}>$ {item.price}</p>
            <p className={style.stock}>Stock: {item.stock}</p>  
        </div>
    </div>
  )
}

export default ItemDetail