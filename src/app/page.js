'use client'
import "./globals.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegBookmark } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios.get("https://fakestoreapi.com/products")
   .then((response)=>{
      setProducts(response.data);
   })
   .catch((error)=>{
    console.log(error)
   })
  }, []);

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl relative">
              <div className="relative">
                <img
                  className="w-[60%] h-48 object-cover mb-4 rounded-t-lg"
                  src={product.image}
                  alt={product.title}
                />
                <div className="absolute top-2 right-2 text-2xl">
                <FaRegBookmark />
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h2>
              <div className="flex justify-between p-2">
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="text-4xl">
              <IoBagAddOutline />
              </div>
              </div>
              {/* <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Buy Now</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;