import React from 'react'
import { useEffect,useState } from 'react'
import FeatureCard from './FeatureCard'
import Product from '../module/Product'
import ProductCard from './ProductCard'
import Products from './Products'

const Categories = () => {
    const [categories,setCategories]=useState([])
useEffect(()=>{
   const fetchCategories=async () =>{
    const response=await fetch('https://fakestoreapi.com/products/categories')
    const data=await response.json()
    console.log(data,'data')
    setCategories(data)
   }
fetchCategories()
},[])


// if(Categories.length === 0) return <div>Loading........</div>


  return (
    <div>
      <FeatureCard cards={categories}/>
   
    </div>
  )
}

export default Categories
