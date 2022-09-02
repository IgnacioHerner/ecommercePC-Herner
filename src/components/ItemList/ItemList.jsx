import React from 'react'
import Item from '../Item/Item'
import style from './ItemList.module.css'

const ItemList = ({items}) => {


  return (
    <div className={style.container}>
      {
        items.map(item => <Item key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} />)
      }
    </div>

  )
}

export default ItemList