import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDeatail'
import SignUp from './component/SignUp'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Blog from './pages/Blog'

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDetail/>} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

