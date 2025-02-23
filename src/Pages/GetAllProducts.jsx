import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "api_live_XHYIv3mVuoGWeeilixojco3fWIwBuOYZJYPpITKM2BUuoBPJgFJRPgmCRZ6A";

function GetAllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-allProduct`);
        console.log("API Response:", response.data); // Debug log

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          throw new Error("Invalid API response format");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-5 text-xl font-bold">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-semibold text-gray-800 text-center my-6">
        All Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={product.image || "https://via.placeholder.com/200"}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-gray-500 text-sm mt-1">
              Farmer: {product.farmerId?.name || "Unknown"}
            </p>
            <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3 hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllProducts;
