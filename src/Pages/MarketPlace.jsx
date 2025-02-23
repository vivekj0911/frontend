import React from "react";
import SellProduct from "./SellProduct";
// import BuyProduct from "./BuyProducts";
import ConfirmOrder from "./ConfirmOrder";
const Marketplace = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">

      <h1 className="text-3xl font-semibold text-center mb-6">Marketplace</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Sell Product (60% Width) */}
        {/* Left Side: Sell Product (50% Width) */}
<div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 border">
  <SellProduct />
</div>


        {/* Right Side: Buy Products (40% Width, Scrollable) */}
        {/* Right Side: Buy Products (50% Width, Scrollable) */}
<div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 border overflow-y-auto max-h-[80vh]">
  {/* <BuyProduct /> */}
  <ConfirmOrder></ConfirmOrder>
</div>

      </div>
    </div>
  );
};

export default Marketplace;
