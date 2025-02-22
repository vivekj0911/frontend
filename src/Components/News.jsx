import React from "react";
import "../index.css";

import image1 from "../assets/images/download.jpeg";
import image2 from "../assets/images/second.jpeg";
import image3 from "../assets/images/third.jpeg";
import image4 from "../assets/images/fouth.jpeg";
import image5 from "../assets/images/fifth.jpeg";

function News() {
  const news = [
    { image: image1, title: "खेती में नई तकनीकों का आगमन", description: "खेती में नई तकनीकों का आगमन कृषि क्षेत्र में क्रांतिकारी बदलाव ला रहा है..." },
    { image: image2, title: "सरकार ने नई सब्सिडी योजना की घोषणा की", description: "किसानों के लिए फायदेमंद योजना शुरू।" },
    { image: image3, title: "मौसम के बदलाव से फसल उत्पादन पर असर", description: "बारिश की कमी से किसान चिंतित।" },
    { image: image4, title: "मृदा परीक्षण से बढ़ेगी उत्पादकता", description: "फसल की गुणवत्ता में सुधार संभव।" },
    { image: image5, title: "स्थानीय बाजार में अनाज के दाम बढ़े", description: "किसानों को बेहतर मूल्य मिलने की उम्मीद।" },
  ];

  return (
    <section className="mt-24 ml-48 py-16 bg-gray-100"> {/* Adjusted Margins */}
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-primary">Latest Agricultural News</h1>
      </div>

      {/* News Grid */}
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            {/* News Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover hover:scale-105 transition duration-300"
            />
            
            {/* News Content */}
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
