import React, { useEffect, useState } from 'react'

import Categories from './Categories'
import ProductCard from './ProductCard'

const Products = () => {

  return (
    <div>


      <Categories />
      <div className="flex flex-col text-center w-full mb-20">
        <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
      </div>


    </div>
  )
}

export default Products