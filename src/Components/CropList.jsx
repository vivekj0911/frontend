import React, { useState, useEffect } from "react";
import axios from "axios";

const CropList = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem("token"); // Fetch token from storage
        if (!token) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }

        const response = await axios.get("https://prj-backend-8kmv.onrender.com/crops", {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjljNjU5Y2VmMGI3NTg0OGVmNWVlNyIsImlhdCI6MTc0MDI1MDE0MCwiZXhwIjoxNzQyODQyMTQwfQ.3iWnF7K5Tgzx2UC5DobHOcQ8fk48-Gt6SFCnp-ALDGg', // Attach token to headers
          },
        });

        setCrops(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load crops.");
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading crops...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="p-32 pl-56">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🌱 Crop Management Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={crop.image || "https://via.placeholder.com/150"}
                alt={crop.cropName}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800">{crop.cropName}</h2>
            </div>
            <div className="p-5 pt-0 flex gap-3">
              <button
                className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-4 py-2 rounded-lg w-1/2 transition hover:opacity-80"
                onClick={() => setSelectedCrop(crop)}
              >
                View Details
              </button>
              <button className="border border-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-lg w-1/2 transition hover:bg-gray-100">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropList;
