import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import './App.css'
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './pages/cart/Cart';
import HomePage from './pages/home/HomePage';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
