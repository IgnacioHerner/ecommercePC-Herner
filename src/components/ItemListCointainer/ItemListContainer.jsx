import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../../Mock/Products'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
      const getProducts = () =>
      new Promise((res,rej)=> {
        const productsFilter = products.filter( (prod) => prod.category === categoryId)
        setTimeout(() => {
          res(categoryId ? productsFilter : products)
        }, 500);
      });
      
      getProducts()
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        })
 

  }, [categoryId]);


  return (
    <ItemList items={items}/>
  )
}

export default ItemListContainer
