import React from 'react'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../../Mock/Products'
import { useParams } from 'react-router-dom'
import style from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
    const[item, setItem] = useState({})

    const[isLoading, setIsLoading] = useState(true)

    const {idProd} = useParams();
    const idProdNum = Number(idProd)

    useEffect(() => {
       const getProduct = () => new Promise ((resolve, reject) => {
            const unicoProducto = products.find((prod) => prod.id === idProdNum )
                setTimeout(() =>{
                    resolve(unicoProducto)
                }, 400)
            })
       getProduct()
       .then((data)=>{
        setItem(data);
        setIsLoading(false)
       })
       .catch((error)=>{
        console.log(error);
       })
    }, [idProdNum]);


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
