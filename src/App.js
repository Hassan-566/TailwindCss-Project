import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './module/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import Product from './module/Product';
import ProductCard from './components/ProductCard';
import CategoryProducts from './components/CategoryProducts';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';



function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/products' element={<Product />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />

        <Route path='/product' element={<ProductCard />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />




      </Routes>
      <Footer />

    </>
  );
}

export default App;
