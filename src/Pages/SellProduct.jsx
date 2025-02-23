import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://prj-backend.vercel.app";

function SellProduct() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    location: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/add-product`,
        productData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setMessage("Product added successfully!");
        setProductData({
          name: "",
          price: "",
          quantity: "",
          description: "",
          location: "",
          contact: "",
        });
      } else {
        setMessage("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Error adding product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full  mx-auto p-6 bg-white shadow-lg rounded-lg m-[-23]">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Sell Your Product
      </h2>

      {message && <p className="text-center text-red-500">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={productData.price}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={productData.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={productData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg h-24 resize-none"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={productData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={productData.contact}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 text-lg"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default SellProduct;
