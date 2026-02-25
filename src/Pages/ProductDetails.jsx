import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const { title, price, description, category, image, rating = {} } = product;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 cursor-pointer text-gray-600 hover:text-black hover:bg-blue-200 transition border border-gray-300 rounded-lg px-4 py-2 ml-45"
        aria-label="Go back"
      >
        <IoIosArrowRoundBack className="text-2xl" />
        <span>Back</span>
      </button>

      {/* Product Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="w-full max-h-96 object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 uppercase mb-2">{category}</p>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.round(rating?.rate || 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-500 text-sm">
                  ({rating?.count || 0} reviews)
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            </div>

            {/* Bottom Section */}
            <div>
              <p className="text-3xl font-bold text-green-600 mb-5">${price}</p>

              <button
                aria-label="Add product to cart"
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;