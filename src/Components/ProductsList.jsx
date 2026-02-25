import React from 'react'
import { Link } from 'react-router-dom';

const ProductsList = ({ product }) => {

  const { title, price, rating = {}, image } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl 
    transition duration-300 p-5 h-105 flex flex-col justify-between">

      {/* Top Section */}
      <div>
        {/* Image */}
        <div className="h-40 flex items-center justify-center mb-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-36 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="bg-yellow-100 text-yellow-700 text-sm px-2 py-1 rounded-full">
            ⭐ {rating?.rate || 0}
          </div>

          <span className="text-gray-500 text-sm">
            ({rating?.count || 0})
          </span>
        </div>

        {/* Title */}
        <h2 className="font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Price */}
        <p className="text-xl font-bold text-green-600 mb-3">
          ${price}
        </p>

        {/* Button */}
        <Link to={`/products/${product.id}`}>
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          View Details
        </button></Link>
      </div>

    </div>
  )
}

export default ProductsList