import React from 'react'
import style from './Item.module.css'


const Item = ({title, price, img, stock,}) => {

  const onAdd = () => {
    console.log("Este boton sirve para agregar al carrito")
  }
  
  return (
    <div className={style.card_container}>
      <div>
        <img className={style.img} src={img} alt={title} />
        <h2 className={style.h2}>{title}</h2>
        <p className={style.price}>${price}</p>
        <p className={style.stock}>Stock: {stock}</p>
        <button className={style.btn_carrito} onClick={onAdd}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Item;