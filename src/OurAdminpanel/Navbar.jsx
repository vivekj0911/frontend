// Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <div>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/users" className="mr-4">Users</Link>
        <Link to="/merchants">Merchants</Link>
      </div>
    </nav>
  );
};
export default Navbar;