import React from 'react'
import ItemCount from '../Count/ItemCount'


const Item = ({item}) => {
  return (
    <div id={item.id}>
      <div>
        <img src={item.img} alt={item.title} />
        <h2>{item.title}</h2>
        <p>${item.price}</p>
        <p>{item.stock}</p>
        <ItemCount stock={10}/>
      </div>
    </div>
  )
}

export default Item;