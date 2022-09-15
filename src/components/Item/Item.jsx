import React from 'react'
import style from './Item.module.css'
import { Link } from 'react-router-dom'


const Item = ({item}) => {

  const onAdd = () => {

  }
  
  return (
    <div className={style.card_container}>
      <Link className={style.txt_none} to={`/detail/${item.id}`}>
        <div>
          <img className={style.img} src={item.img} alt={item.title} />
          <h2 className={style.h2}>{item.title}</h2>
          <p className={style.price}>${item.price}</p>
          <p className={style.stock}>Stock: {item.stock}</p>
          <button className={style.btn_carrito} onClick={onAdd}>Agregar al carrito</button>
        </div>
      </Link>
    </div>
  )
}

export default Item;