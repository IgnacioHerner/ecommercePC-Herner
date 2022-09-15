import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListCointainer/ItemListContainer'

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

            <Route path='/detail/:idProd' element={<ItemDetailContainer/>}/>

            <Route path="/cart" element={<Cart />} />
        </Routes>
    </main>
  )
}

export default Main;