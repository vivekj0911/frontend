import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

const Newspopup = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState(null);

  if (!news || !Array.isArray(news) || news.length === 0) {
    return <p className="ml-64 mt-10 text-red-500"></p>;
  }

  return (
    <div className="flex ml-64 mt-10 gap-8">
      {/* Left Section - News List */}
      <div className="w-1/2">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-200 transition"
            onClick={() => setSelectedNews(item)}
          >
            <img src={item.image} alt="News" className="w-20 h-20 rounded-lg" />
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 truncate w-60">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section - Farming Videos */}
      <div className="w-1/2 flex flex-col gap-6 items-center">
        {/* First Video */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NbavN0ZnQmo"
          title="Best Farming Practices"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>

        {/* Second Video */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/w5ipqbxBvnI" // Replace with your second video link
          title="Advanced Farming Techniques"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Modal for full news */}
      {selectedNews && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-md">
          <div className="bg-white p-10 rounded-3xl shadow-2xl w-[750px] max-h-[75vh] overflow-hidden flex flex-col">
            {/* Title */}
            <h3 className="text-3xl font-extrabold text-gray-900">{selectedNews.title}</h3>

            {/* Image */}
            <img
              src={selectedNews.image}
              alt="News"
              className="w-full h-55 object-contain mt-5 rounded-xl shadow-md bg-gray-200"
            />


            {/* Description (Scrollable) */}
            <div className="mt-5 flex-1 overflow-y-auto max-h-60 pr-3 text-lg text-gray-700 leading-relaxed">
              {selectedNews.description}
            </div>

            {/* Close Button */}
            <button
              className="mt-6 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition shadow-md text-lg font-semibold"
              onClick={() => setSelectedNews(null)}
            >
              ✖ बंद करें
            </button>
          </div>
        </div>

      )}
    </div>
  );
};

// Validate props using PropTypes
Newspopup.propTypes = {
  news: PropTypes.array.isRequired, // Ensures news is always an array
};

export default Newspopup;