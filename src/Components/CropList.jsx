import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

const CropList = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User not authenticated");
          setLoading(false);
          return;
        }

        const response = await axios.get(
          "https://prj-backend-git-main-prathameshkhandares-projects.vercel.app/crops",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setCrops(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load crops.");
        setLoading(false);
      }
    };

    fetchCrops();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600">{error}</p>
      </div>
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-26 pl-49">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span>🌱</span>
        <span>Crop Management Dashboard</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div className="container mx-auto p-26 pl-49">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <span>🌱</span>
        <span>Crop Management Dashboard</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            key={crop._id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="p-0">
              <img
                src={crop.image || "/placeholder.svg?height=200&width=400"}
                alt={crop.cropName}
                className="w-full h-48 object-cover"
              />
            <div className="p-0">
              <img
                src={crop.image || "/placeholder.svg?height=200&width=400"}
                alt={crop.cropName}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{crop.cropName}</h2>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{crop.cropName}</h2>
            </div>
            <div className="p-4 pt-0 flex gap-3">
            <div className="p-4 pt-0 flex gap-3">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition"
                onClick={() => navigate(`/crop-details/${crop._id}`, { state: {crop } })}
              >
                View Details
              </button>
              <button className="border border-gray-500 text-gray-700 py-2 px-4 rounded w-full hover:bg-gray-100 transition">
              <button className="border border-gray-500 text-gray-700 py-2 px-4 rounded w-full hover:bg-gray-100 transition">
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