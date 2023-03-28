import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Wishes from './pages/Wishes'
import Shop from './pages/Shop';




function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishes' element={<Wishes />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App
