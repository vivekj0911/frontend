import React, { useState } from "react";
import { FaSeedling, FaTractor, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Newspopup } from "../Components/CompIndex";
import CropMarketPopup from "../Components/CropMarketPopup"; // Import popup component

import image1 from "../assets/images/download.jpeg";
import image2 from "../assets/images/second.jpeg";
import image3 from "../assets/images/third.jpeg";
import image4 from "../assets/images/fouth.jpeg";
import image5 from "../assets/images/fifth.jpeg";

const features = [
  { icon: <FaSeedling size={30} />, title: "Add Crop", description: "आप नई फसल जोड़ सकते हैं", bgColor: "bg-yellow-200", route: "/add-crop" },
  { icon: <FaTractor size={30} />, title: "your Crops", description: "पहले उगाई गई फसलों का इतिहास देखें", bgColor: "bg-blue-200", route: "/your-crops" },
  { icon: <FaShoppingCart size={30} />, title: "Market Live Rate", description: "सोयाबीन के बाजार भाव की लाइव जानकारी", bgColor: "bg-red-200", route: "popup" }, 
  { icon: <FaMoneyBillWave size={30} />, title: "Total Expenses", description: "खेती में कुल खर्च का ब्यौरा", bgColor: "bg-green-200", route: "/total-expenses" },
];

const news = [
  { image: image1, title: "खेती में नई तकनीकों का आगमन", description: "खेती में नई तकनीकों का आगमन कृषि क्षेत्र में क्रांतिकारी बदलाव ला रहा है..." },
  { image: image2, title: "सरकार ने नई सब्सिडी योजना की घोषणा की", description: "किसानों के लिए फायदेमंद योजना शुरू।" },
  { image: image3, title: "मौसम के बदलाव से फसल उत्पादन पर असर", description: "बारिश की कमी से किसान चिंतित।" },
  { image: image4, title: "मृदा परीक्षण से बढ़ेगी उत्पादकता", description: "फसल की गुणवत्ता में सुधार संभव।" },
  { image: image5, title: "स्थानीय बाजार में अनाज के दाम बढ़े", description: "किसानों को बेहतर मूल्य मिलने की उम्मीद।" },
];

const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // State for pop-up

  return (
    <>
      <div className="p-6 ml-64 mt-20">
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} border border-gray-300 p-6 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer relative`}
              onClick={() => {
                if (feature.route === "popup") {
                  setShowPopup(true); // Open pop-up for Market Rate
                } else {
                  navigate(feature.route);
                }
              }}
            >
              <div className="absolute top-3 left-3 text-gray-600">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-center mt-6">{feature.title}</h3>
              <p className="text-sm text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <Newspopup news={news} />

      {/* Market Rate Pop-up */}
      {showPopup && <CropMarketPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default Home;
