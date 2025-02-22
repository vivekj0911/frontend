import React from "react";

const items = [
  { id: 1, name: "Soyabean", image: "/placeholder.svg" },
  { id: 2, name: "Wheat", image: "/placeholder.svg" },
  { id: 3, name: "Corn", image: "/placeholder.svg" },
  { id: 4, name: "Rice", image: "/placeholder.svg" },
];

const Card = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
      </div>

      {/* Button Section */}
      <div className="p-5 pt-0 flex gap-3">
        <button className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-4 py-2 rounded-lg w-1/2 transition hover:opacity-80 cursor-pointer">
          View Details
        </button>
        <button className="border border-gray-400 text-gray-700 font-semibold px-4 py-2 rounded-lg w-1/2 transition hover:bg-gray-100">
          Update
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="p-8 pl-46 pt-30"> {/* Added Left & Top Spacing */}
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        🌱 Crop Management Dashboard
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
