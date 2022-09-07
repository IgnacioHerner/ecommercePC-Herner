import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListCointainer/ItemListContainer'

const Main = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

            <Route path='/item/:id' element={<ItemDetailContainer/>}/>

        </Routes>
    </main>
  )
}

export default Main;