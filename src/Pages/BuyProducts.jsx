import React, { useState, useEffect } from "react";
import axios from "axios";

const BuyProduct = () => {
  const API_URL = "https://prj-backend.vercel.app";
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [quantity, setQuantity] = useState({});
  const [transactions, setTransactions] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
    fetchTransactions();
  }, []);

  // **Filtering Logic**
  useEffect(() => {
    const filtered = products.filter((product) => {
      const productName = product.name ? product.name.toLowerCase() : "";
      const productLocation = product.location ? product.location.toLowerCase() : "";
      
      return (
        productName.includes(filterName.toLowerCase()) &&
        productLocation.includes(filterLocation.toLowerCase())
      );
    });
  
    setFilteredProducts(filtered);
  }, [filterName, filterLocation, products]);
  

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-allProduct`);
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-buyer-transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleBuy = async (productId) => {
    const qty = quantity[productId] || 1;
    try {
      const response = await axios.post(
        `${API_URL}/buy-Product`,
        { productId, quantity: qty },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert(response.data.message);
      fetchProducts();
      fetchTransactions();
    } catch (error) {
      alert(error.response?.data?.message || "Error buying product");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        🌱 Buy Farming Products 🚜
      </h2>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Products List */}
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">
            🌾 Available Farming Products
          </h3>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              placeholder="🔍 Search by product name..."
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm"
            />
            <input
              type="text"
              placeholder="📍 Search by location..."
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">No products available</p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-5 shadow-md hover:shadow-xl rounded-xl border border-gray-200 transition duration-300 flex flex-col justify-between min-h-[230px]"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {product.name} 🌾
                    </h3>
                    <p className="text-gray-600">💰 Price: ₹{product.price}</p>
                    <p className="text-gray-600">📦 Stock: {product.quantity}</p>
                    <p className="text-gray-600">📍 Location: {product.location}</p>

                    <input
                      type="number"
                      min="1"
                      max={product.quantity}
                      value={quantity[product._id] || ""}
                      onChange={(e) =>
                        setQuantity({ ...quantity, [product._id]: e.target.value })
                      }
                      placeholder="Enter quantity"
                      className="w-full p-2 mt-3 border border-gray-300 rounded-md"
                    />
                  </div>

                  <button
                    onClick={() => handleBuy(product._id)}
                    className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white p-2 rounded-md font-semibold transition cursor-pointer"
                  >
                    🛒 Buy Now
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right - Transactions */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-xl border border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-center text-green-700">
            📜 Your Transactions
          </h3>
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-center">No transactions found.</p>
          ) : (
            <div className="space-y-4">
              {transactions.map((tx, index) => (
                <div
                  key={tx._id}
                  className="p-4 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <p className="text-lg font-semibold text-gray-800 flex items-center">
                    {index + 1}. {tx.product} 🌱
                  </p>
                  <p className="text-gray-700">💰 Price: ₹{tx.price}</p>
                  <p className="font-semibold text-sm mt-1">
                    📜 Status:{" "}
                    <span
                      className={`px-2 py-1 rounded-md text-white ${
                        tx.status === "pending"
                          ? "bg-yellow-500"
                          : tx.status === "confirmed"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {tx.status}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;
