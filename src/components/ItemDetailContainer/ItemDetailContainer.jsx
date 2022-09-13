import React from 'react'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../../Mock/Products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[item, setItem] = useState({})

    const {idProd} = useParams();
    const idProdNum = Number(idProd)

    useEffect(() => {
       const getProduct = () => new Promise ((resolve, reject) => {
            const unicoProducto = products.find((prod) => prod.id === idProdNum )
                setTimeout(() =>{
                    resolve(unicoProducto)
                }, 500)
            })
       getProduct()
       .then((data)=>{
        setItem(data);
       })
       .catch((error)=>{
        console.log(error);
       })
    }, [idProdNum]);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer
