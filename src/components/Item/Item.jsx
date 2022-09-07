import React from 'react'
import style from './Item.module.css'
import { Link } from 'react-router-dom'


const Item = ({title, price, img, stock,id}) => {

  const onAdd = () => {
    console.log("Este boton sirve para agregar al carrito")
  }
  
  return (
    <div className={style.card_container}>
      <Link className={style.txt_none} to={`/item/${id}`}>
        <div>
          <img className={style.img} src={img} alt={title} />
          <h2 className={style.h2}>{title}</h2>
          <p className={style.price}>${price}</p>
          <p className={style.stock}>Stock: {stock}</p>
          <button className={style.btn_carrito} onClick={onAdd}>Agregar al carrito</button>
        </div>
      </Link>
    </div>
  )
}

export default Item;