import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsList from "../Components/ProductsList";

const Products = () => {
  const products = useLoaderData();
  console.log(products);

  const [selectedCategories, setSelectedCategories] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((products) => products.category)),
  ];

  const filteredProducts =
    selectedCategories === "All"
      ? products
      : products.filter((products) => products.category === selectedCategories);

  return (
    <div>
      <div className="flex space-x-4 mb-4 mt-5 justify-center">
        {categories.map((category) => (
          <button onClick={() => setSelectedCategories(category)} key={category} className={`px-4 py-2 rounded ${selectedCategories === category ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-5 mt-10">
        {filteredProducts.map((product) => (
        <ProductsList key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default Products;
