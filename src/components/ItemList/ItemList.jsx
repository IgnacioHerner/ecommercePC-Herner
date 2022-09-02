import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {


  return (
    <div>
      {
        items.map(item => <Item key={item.id} img={item.img} title={item.title} stock={item.stock} price={item.price} />)
      }
    </div>

  )
}

export default ItemList