import { X, Leaf } from "lucide-react"; // Icons
import { useState } from "react";

const cropData = [
  { name: "Wheat", rate: 2345, change: "+5%", iconBg: "bg-yellow-500" },
  { name: "Rice", rate: 1980, change: "-3%", iconBg: "bg-green-500" },
  { name: "Maize", rate: 2150, change: "+8%", iconBg: "bg-orange-500" },
  { name: "Barley", rate: 1750, change: "-2%", iconBg: "bg-blue-500" },
];

export default function CropMarketPopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-[400px] max-h-[80vh] overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">🌾 Today's Market Rates</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {/* Crop List */}
        <div className="space-y-4">
          {cropData.map((crop, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${crop.iconBg} flex items-center justify-center rounded-full`}>
                  <Leaf size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-md font-semibold">{crop.name}</h3>
                  <p className="text-gray-500 text-sm">₹ {crop.rate} / Quintal</p>
                </div>
              </div>
              <span
                className={`text-sm font-bold ${
                  crop.change.startsWith("+") ? "text-green-500" : "text-red-500"
                }`}
              >
                {crop.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
