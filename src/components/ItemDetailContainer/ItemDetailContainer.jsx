import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { products } from '../../Mock/Products'

const ItemDetailContainer = () => {
    const[item, setItem] = useState({})
    
    const {Id} = useParams();

    useEffect(() => {
       const getProduct = () => new Promise ((resolve, reject) => {
            const unicoProducto = products.find((prod) => prod.id === Id)
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
    }, [Id]);


  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer