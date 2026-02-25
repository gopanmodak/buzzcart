import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductsList from '../Components/ProductsList';

const Products = () => {

  const productsItems = useLoaderData()

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories =["All", ...new Set(productsItems.map((item)=>item.category))]

  const filteredProducts = selectedCategory === "All" ? productsItems : productsItems.filter((item)=>item.category === selectedCategory)
  return (
    <div>
     <div className='flex justify-center mt-5'>
      {categories.map((category)=> <button key={category} onClick={()=>setSelectedCategory(category)} className={`${selectedCategory === category ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-800"} px-4 py-2 mr-2 rounded-md`}>{category}</button>)}
     </div>


 <div className='max-w-6xl mx-auto mt-10 grid grid-cols-4 gap-5'>
  {filteredProducts.map((product)=> <ProductsList key={product.id} product={product}/>)}
 </div>

    </div>
  )
}

export default Products