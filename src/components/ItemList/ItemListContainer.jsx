import React, { useEffect, useState } from 'react'
import { products } from '../../Mock/Products';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise ((res, rej) => {
      setTimeout(() => {
        res(products);
      }, 20000);
    });

    getProducts
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        //console.log(error);
      })
      .finally(() => {
        //console.log('Finally');
      });
  }, []);


  return (
    <ItemList items = {items}/>
  )
}

export default ItemListContainer