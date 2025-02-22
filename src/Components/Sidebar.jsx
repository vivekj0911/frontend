import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaComments, FaEnvelope, FaBook, FaSignOutAlt, FaBars } from "react-icons/fa";

function Sidebar() {
  const [isSelected, setIsSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnClick = () => {
    console.log("logged out");
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="flex">
      {/* Hamburger Menu */}
      <div className="sm:hidden p-4 absolute top-4 left-1/2 transform -translate-x-1/2 z-50">
        <FaBars
          className="text-blue-950 text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`sidebar-container w-40 fixed top-20 bottom-0 bg-blue-950 p-4 ${
          isOpen ? "block" : "hidden"
        } sm:block`}
      >
        <div className="sidebar-inner-container h-full flex flex-col">
          <div className="sidebar-elements flex-grow">
            <nav className="text-white h-full">
              <ul className="flex flex-col h-full">
                {/* Home */}
                <li
                  className={`mt-5 flex items-center gap-4 ${
                    isSelected === "Home" ? "font-bold" : ""
                  }`}
                >
                  <Link
                    to="/home"
                    className="flex items-center gap-2"
                    onClick={() => setIsSelected("Home")}
                  >
                    <FaHome className="text-2xl" />
                    <span className="text-lg">Home</span>
                  </Link>
                </li>

                {/* Forum */}
                <li
                  className={`mt-8 flex items-center gap-4 ${
                    isSelected === "Forum" ? "font-bold" : ""
                  }`}
                >
                  <Link
                    to="/forum"
                    className=" flex items-center gap-2"
                    onClick={() => setIsSelected("Forum")}
                  >
                    <FaComments className="text-2xl" />
                    <span className="text-lg">Forum</span>
                  </Link>
                </li>

                {/* Chat */}
                <li
                  className={`mt-8 flex items-center gap-4 ${
                    isSelected === "Chat" ? "font-bold" : ""
                  }`}
                >
                  <Link
                    to="/chat"
                    className="flex items-center gap-2"
                    onClick={() => setIsSelected("Chat")}
                  >
                    <FaEnvelope className="text-2xl" />
                    <span className="text-lg">Chat</span>
                  </Link>
                </li>

                {/* Blog */}
                <li
                  className={`mt-8 flex items-center gap-4 ${
                    isSelected === "Blog" ? "font-bold" : ""
                  }`}
                >
                  <Link
                    to="/adminblog"
                    className="flex items-center gap-2"
                    onClick={() => setIsSelected("Blog")}
                  >
                    <FaBook className="text-2xl" />
                    <span className="text-lg">Blog</span>
                  </Link>
                </li>

                {/* Logout */}
                <li
                  className="mt-auto mb-4 flex items-center gap-4 cursor-pointer"
                  onClick={handleOnClick}
                >
                  <FaSignOutAlt className="text-2xl" />
                  <span className="text-lg">Log out</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
