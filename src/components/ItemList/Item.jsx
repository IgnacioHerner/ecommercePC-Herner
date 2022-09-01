import React from 'react'

const Item = ({items}) => {
  return (
    <div>
        <p>{items.id}</p>
        <h5>{items.price}</h5>
    </div>
  )
}

export default Item;