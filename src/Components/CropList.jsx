import React, { useState } from "react";
import CropDetailsView from "./CropDetailsView";

const crops = [
  {
    id: 1,
    name: "Wheat",
    image: "https://tse3.mm.bing.net/th?id=OIP.a5ZN-gyrlqtXXqei_TstFwHaE8&pid=Api&P=0&h=180",
    fertilization: "NPK 20-20-20, Organic manure",
    pesticides: "Neem oil, Pyrethrin",
    sowingTime: "October-November",
    harvestTime: "March-April",
    wateringSchedule: "Every 15-20 days",
    soilType: "Loamy soil",
    description: "Hardy winter crop, requires moderate water and full sun exposure.",
  },
  {
    id: 2,
    name: "Rice",
    image: "https://tse3.mm.bing.net/th?id=OIP.a5ZN-gyrlqtXXqei_TstFwHaE8&pid=Api&P=0&h=180",
    fertilization: "Urea, DAP",
    pesticides: "Carbofuran, Chlorpyrifos",
    sowingTime: "June-July",
    harvestTime: "November-December",
    wateringSchedule: "Standing water",
    soilType: "Clay soil",
    description: "Requires standing water and warm climate for optimal growth.",
  },
  {
    id: 3,
    name: "Cotton",
    image: "https://tse3.mm.bing.net/th?id=OIP.a5ZN-gyrlqtXXqei_TstFwHaE8&pid=Api&P=0&h=180",
    fertilization: "NPK 10-20-10",
    pesticides: "Bt spray, Spinosad",
    sowingTime: "March-April",
    harvestTime: "October-November",
    wateringSchedule: "Every 20-25 days",
    soilType: "Black soil",
    description: "Requires well-drained soil and warm climate.",
  },
  {
    id: 4,
    name: "Corn",
    image: "https://tse3.mm.bing.net/th?id=OIP.a5ZN-gyrlqtXXqei_TstFwHaE8&pid=Api&P=0&h=180",
    fertilization: "NPK 15-15-15",
    pesticides: "Bacillus thuringiensis",
    sowingTime: "April-May",
    harvestTime: "August-September",
    wateringSchedule: "Every 7-10 days",
    soilType: "Well-drained loamy soil",
    description: "Fast-growing summer crop with high water requirements.",
  },
];

const CropList = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);

  if (selectedCrop) {
    return (
      <CropDetailsView
        crop={selectedCrop}
        onUpdate={(field, value) => {
          const updatedCrops = crops.map((crop) =>
            crop.id === selectedCrop.id ? { ...crop, [field]: value } : crop
          );
          setSelectedCrop({ ...selectedCrop, [field]: value });
        }}
        onBack={() => setSelectedCrop(null)}
      />
    );
  }

  return (
    <div className="p-32 pl-56">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">🌱 Crop Management Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {crops.map((crop) => (
          <div
            key={crop.id}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-800">{crop.name}</h2>
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