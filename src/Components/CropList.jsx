import React, { useState, useEffect } from "react";
import axios from "axios";

const CropList = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch crop names from backend
  useEffect(() => {
    axios
      .get("https://prj-backend-git-main-prathameshkhandares-projects.vercel.app/crops") // Replace with your API URL
      .then((response) => {
        setCrops(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load crop names.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading crops...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">🌱 Crop List</h1>
      <ul className="bg-white p-6 rounded-lg shadow-lg">
        {crops.map((crop) => (
          <li key={crop._id} className="py-2 px-4 border-b text-lg">
            {crop.cropName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropList;
