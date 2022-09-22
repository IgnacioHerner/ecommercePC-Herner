import React from 'react'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
// import { products } from '../../Mock/Products'
import { useParams } from 'react-router-dom'
import style from './ItemDetailContainer.module.css'
import {db} from '../../firebaseConfig'
import {getDoc, doc, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {
    const[item, setItem] = useState({})

    const[isLoading, setIsLoading] = useState(true)

    const {idProd} = useParams();

    useEffect(() => {
      const itemCollection = collection(db, 'products');
      const ref = doc(itemCollection, idProd);
      getDoc(ref).then((res)=>{
        setItem({
          id: res.id,
          ...res.data(),
        })
      })
      .catch((error) =>{
        console.log(error)
      })
      .finally(()=>{
        setIsLoading(false)
      })
    }, [idProd]);


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
        <ItemDetail item={item}/>

      }
    </div>
  )
}

export default ItemDetailContainer


// const getProduct = () => new Promise ((resolve, reject) => {
//   const unicoProducto = products.find((prod) => prod.id === idProdNum )
//       setTimeout(() =>{
//           resolve(unicoProducto)
//       }, 400)
//   })
// getProduct()
// .then((data)=>{
// setItem(data);
// setIsLoading(false)
// })
// .catch((error)=>{
// console.log(error);
// })