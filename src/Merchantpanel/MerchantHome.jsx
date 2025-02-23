import { Link } from "react-router-dom";

function MerchantHome () {
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <Link to="/get-all-products" className="px-4 py-2 bg-blue-600 rounded">
        View Products
      </Link>
    </nav>
  );
};

export default MerchantHome;
