import React, { useEffect, useState } from 'react'
// import FeatureCard from '../components/FeatureCard'
import Categories from '../components/Categories'
import ProductCard from '../components/ProductCard'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchproducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data, 'data')
            setProducts(data)
        }
        fetchproducts()
    }, [])
    return (
        <div>
            <Categories />
            <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Products</h1>
            </div>
            {
                products.length > 0 ?
                    <ProductCard products={products} />
                    :
                    <div> Loading......</div>
            }
            {/* <ProductCard/> */}
            {/* <FeatureCard/> */}
        </div>
    )
}

export default Product
