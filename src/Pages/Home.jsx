import React from "react";
import { FaSeedling, FaTractor, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {Newspopup} from "../Components/CompIndex";

const features = [
  { icon: <FaSeedling size={30} />, title: "Add Crop", description: "आप नई फसल जोड़ सकते हैं", bgColor: "bg-yellow-200", route: "/add-crop" },
  { icon: <FaTractor size={30} />, title: "Past Crops", description: "पहले उगाई गई फसलों का इतिहास देखें", bgColor: "bg-blue-200", route: "/your-crops" },
  { icon: <FaShoppingCart size={30} />, title: "Market Live Rate", description: "सोयाबीन के बाजार भाव की लाइव जानकारी", bgColor: "bg-red-200", route: "/market-rate" },
  { icon: <FaMoneyBillWave size={30} />, title: "Total Expenses", description: "खेती में कुल खर्च का ब्यौरा", bgColor: "bg-green-200", route: "/total-expenses" },
];

const news = [
  { image: "https://source.unsplash.com/100x100/?farm", title: "खेती में नई तकनीकों का आगमन", description: "नई तकनीकों से किसानों को अधिक उपज मिलेगी।" },
  { image: "https://source.unsplash.com/100x100/?agriculture", title: "सरकार ने नई सब्सिडी योजना की घोषणा की", description: "किसानों के लिए फायदेमंद योजना शुरू।" },
  { image: "https://source.unsplash.com/100x100/?crops", title: "मौसम के बदलाव से फसल उत्पादन पर असर", description: "बारिश की कमी से किसान चिंतित।" },
  { image: "https://source.unsplash.com/100x100/?soil", title: "मृदा परीक्षण से बढ़ेगी उत्पादकता", description: "फसल की गुणवत्ता में सुधार संभव।" },
  { image: "https://source.unsplash.com/100x100/?market", title: "स्थानीय बाजार में अनाज के दाम बढ़े", description: "किसानों को बेहतर मूल्य मिलने की उम्मीद।" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-6 ml-64 mt-20"> 
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} border border-gray-300 p-6 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300 cursor-pointer relative`} 
              onClick={() => navigate(feature.route)}
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
      
    </>
  );
};

export default Home;
