import React, { useEffect, useState } from "react";
import { FaSeedling, FaTractor, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Newspopup } from "../Components/CompIndex";
import useLanguageStore from "../store/useLanguageStore";

const Home = () => {
  const navigate = useNavigate();
  const { translateText } = useLanguageStore();
  const [translatedFeatures, setTranslatedFeatures] = useState([]);
  const [translatedNews, setTranslatedNews] = useState([]);

  const features = [
    { icon: <FaSeedling size={30} />, title: "Add Crop", description: "You can add a new crop", bgColor: "bg-yellow-200", route: "/add-crop" },
    { icon: <FaTractor size={30} />, title: "Past Crops", description: "View history of previously grown crops", bgColor: "bg-blue-200", route: "/your-crops" },
    { icon: <FaShoppingCart size={30} />, title: "Market Live Rate", description: "Get live market prices for soybean", bgColor: "bg-red-200", route: "/market-rate" },
    { icon: <FaMoneyBillWave size={30} />, title: "Total Expenses", description: "Track total farming expenses", bgColor: "bg-green-200", route: "/total-expenses" },
  ];

  const news = [
    { image: "https://source.unsplash.com/100x100/?farm", title: "New farming techniques introduced", description: "New methods will increase crop yield." },
    { image: "https://source.unsplash.com/100x100/?agriculture", title: "Government announces new subsidy plan", description: "Beneficial scheme launched for farmers." },
    { image: "https://source.unsplash.com/100x100/?crops", title: "Climate change affecting crop production", description: "Farmers worried due to lack of rain." },
    { image: "https://source.unsplash.com/100x100/?soil", title: "Soil testing to improve productivity", description: "Better quality crops possible." },
    { image: "https://source.unsplash.com/100x100/?market", title: "Local market grain prices rise", description: "Farmers expect better earnings." },
  ];

  useEffect(() => {
    const translateContent = async () => {
      const translatedF = await Promise.all(features.map(async (item) => ({
        ...item,
        title: await translateText(item.title),
        description: await translateText(item.description),
      })));
      setTranslatedFeatures(translatedF);

      const translatedN = await Promise.all(news.map(async (item) => ({
        ...item,
        title: await translateText(item.title),
        description: await translateText(item.description),
      })));
      setTranslatedNews(translatedN);
    };

    translateContent();
  }, [translateText]);

  return (
    <>
      <div className="p-6 ml-64 mt-20"> 
        <div className="grid grid-cols-2 gap-6">
          {translatedFeatures.map((feature, index) => (
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
      <Newspopup news={translatedNews} />
    </>
  );
};

export default Home;
