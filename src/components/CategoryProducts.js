import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'


const CategoryProducts = () => {
    const {name}=useParams()
    const [products,setProducts]=useState([])
    useEffect(() => {
        const fetchproducts = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
          const data = await response.json()
          console.log(data)
          setProducts(data)
        }
        fetchproducts()
      }, [])
    if( products.length === 0 ) return  <div>Loading....</div>
  return (
    <div>
         <ProductCard products={products} />
    </div>
  )
}

export default CategoryProducts
