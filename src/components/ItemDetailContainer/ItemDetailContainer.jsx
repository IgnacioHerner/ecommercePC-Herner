import React from 'react'
import { useEffect , useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../../Mock/Products'

const ItemDetailContainer = () => {
    const[item, setItem] = useState({})

    useEffect(() => {
       const getProduct = () => new Promise ((resolve, reject) => {
            const unicoProducto = products.find((prod) => prod.id === 1)
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
    }, []);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer