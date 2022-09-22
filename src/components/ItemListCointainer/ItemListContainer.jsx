import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { products } from "../../Mock/Products";
import ItemList from "../ItemList/ItemList";
import style from "./ItemListContainer.module.css";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../firebaseConfig';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, 'products')
    
    const filterProducts = categoryId
      ? query(itemCollection, where('category', '==', categoryId ))
      : itemCollection
      
    getDocs(filterProducts)
      .then((res) => {
        const productos = res.docs.map((prod) =>{
          return {
            id: prod.id,
            ...prod.data(),
          }
        })
        setItems(productos)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [categoryId]);

  return (
    <div>
      {isLoading ? (
        <>
          <div className={style.containerLoader}>
            <div className={style.loader}></div>
            <h2>Cargando...</h2>
          </div>
        </>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
