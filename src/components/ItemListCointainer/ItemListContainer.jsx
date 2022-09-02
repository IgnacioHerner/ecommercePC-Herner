import React, { useEffect, useState } from 'react'
import {products} from '../../Mock/Products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const getProducts = () => new Promise ((resolve, reject) =>{
    setTimeout(() => resolve(products), 2000)
  })

  useEffect(() => {
    getProducts()
    .then(products => setItems(products))
    .catch(error => console.log(error))

  }, [])


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer