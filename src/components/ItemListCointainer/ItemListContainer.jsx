import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {products} from '../../Mock/Products'
import ItemList from '../ItemList/ItemList'
import style from './ItemListContainer.module.css'

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
      const getProducts = () =>
      new Promise((res,rej)=> {
        const productsFilter = products.filter( (prod) => prod.category === categoryId)
        setTimeout(() => {
          res(categoryId ? productsFilter : products)
        }, 600);
      });
      
      getProducts()
        .then((data) => {
          setItems(data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
        })
 

  }, [categoryId]);


  return (
    <div>
      {
        isLoading 
        ? 
          <>
            <div className={style.containerLoader}>
              <div className={style.loader}></div>
              <h2>Cargando...</h2>
            </div>
          </>
        :
        <ItemList items={items}/>
      }
    </div>
  )
}

export default ItemListContainer
