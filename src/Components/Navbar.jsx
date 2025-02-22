import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importing Link from React Router
import { ArrowRight, ArrowLeft, Menu, X ,ChevronDown,User} from "lucide-react"; // Importing ArrowLeft
import { motion } from "framer-motion";

// import useAuthStore from "../Store/authStore";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [islogin,setIslogin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown=()=>{
    setIsDropdownOpen(!isDropdownOpen);
  }

    // useEffect(()=>{
    //   checkLoginStatus();
    // },[]);

//   const checkLoginStatus = async () => {
//     const token = localStorage.getItem('token');
//     setIslogin(!!token); 
//     console.log(token)
//   }
  
 

//   const logout = useAuthStore((state) => state.logout);

//   const handleLogout =()=>{
//    logout();
//     setIslogin(false);
//     navigate('/homepage')
    
//   }
  

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto p-1">
        <div className="flex items-center justify-between px-8 py-5 bg-gray-200/30 backdrop-blur-[10px] rounded-full">
          
          <div className="text-xl font-bold text-gray-800">KrishiSarthi</div>

    
          <nav className="hidden lg:flex flex-grow justify-center items-center space-x-8">
            <Link
              to="/"
              className="text-sm text-gray-900 hover:text-gray-900 transition-all duration-500 ease-in-out
                         flex items-center space-x-1 px-3 py-2 rounded-lg
                         relative group hover:translate-x-2 font-bold"
            >
             
              <ArrowLeft className="h-3 w-4 transform rotate-[130deg] mr-1 absolute right-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2 " />
              Home
          
              <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-0 absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            </Link>

            <Link
              to="/news"
              className="text-sm text-gray-900 hover:text-gray-900 transition-all duration-500 ease-in-out
                         flex items-center space-x-1 px-3 py-2 rounded-lg
                         relative group hover:translate-x-2 font-bold"
            >
              News
              <ArrowLeft className="h-3 w-4  transform rotate-[130deg] group-hover:mr-8 absolute left-0 opacity-0 top-1/2 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
            
             
              <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-0 absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            </Link>

            <Link
              to="/your-crops"
              className="text-sm text-gray-900 hover:text-gray-900 transition-all duration-500 ease-in-out
                         flex items-center space-x-1 px-3 py-2 rounded-lg
                         relative group hover:translate-x-2 font-bold font-bold"
            >
             
              <ArrowLeft className="h-3 w-4 transform rotate-[130deg] group-hover:mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2 " />
               Crops
           
              <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-0 absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            </Link>
            <Link
              to="/about-us"
              className="text-sm text-gray-900 hover:text-gray-900 transition-all duration-500 ease-in-out
                         flex items-center space-x-1 px-3 py-2 rounded-lg
                         relative group hover:translate-x-2 font-bold"
            >
             
              <ArrowLeft className="h-3 w-4 transform rotate-[130deg] group-hover:mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
              About us 
              <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-0 absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            </Link>

            <Link
              to="/blogs"
              className="text-sm text-gray-900 hover:text-gray-900 transition-all duration-500 ease-in-out
                         flex items-center space-x-1 px-3 py-2 rounded-lg
                         relative group hover:translate-x-2 font-bold"
            >
             
              <ArrowLeft className="h-3 w-4 transform rotate-[130deg] group-hover:mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
              Blogs
              <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-0 absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
            </Link>
          </nav>

          
          <div className="flex items-center space-x-4">
            <button
              className="lg:hidden p-2 text-gray-300 hover:text-gray-900"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>


            {!islogin?(
              <>
              
              <Link
  to="/login"
  className="text-sm font-black text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
             flex items-center space-x-1 px-3 py-2 rounded-lg
             relative group hover:translate-x-2"
>
  <ArrowLeft className="h-3 w-4 transform rotate-[130deg] group-hover:mr-2 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
  Login
  <ArrowRight className="h-3 w-4 transform -rotate-[50deg] absolute right-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out" />
</Link>

          </>
            ): (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-700 hover:text-gray-900 space-x-2"
                >
                  <User className="h-6 w-6" />
                  <ChevronDown className="h-4 w-4" />
                </button>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  >

<button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/help"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Help
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                    <button
                    //   onClick={handleLogout} 
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          
          </div>
          
        </div>
        

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2">
            <nav className="flex flex-col space-y-2 px-6 py-4 bg-gray-200/30 backdrop-blur-[10px] rounded-2xl">

              <Link
                to="/homepage"
                className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
                           flex items-center space-x-1 px-3 py-2 rounded-lg hover:translate-x-2"
              >
                <ArrowLeft className="h-3 w-4 transform rotate-[130deg] ml-1 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
                Home
                <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-1" />
              </Link>
              <Link
                to="/forum"
                className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
                           flex items-center space-x-1 px-3 py-2 rounded-lg hover:translate-x-2"
              >
                <ArrowLeft className="h-3 w-4 transform rotate-[130deg] ml-1 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
                Forum
                <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-1" />
              </Link>
              <Link
                to="/chat"
                className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
                           flex items-center space-x-1 px-3 py-2 rounded-lg hover:translate-x-2"
              >
                <ArrowLeft className="h-3 w-4 transform rotate-[130deg] ml-1 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
                Stranger Chat
                <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-1" />
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
                           flex items-center space-x-1 px-3 py-2 rounded-lg hover:translate-x-2"
              >
                <ArrowLeft className="h-3 w-4 transform rotate-[130deg] ml-1 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
                About us 
                <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-1" />
              </Link>

              <Link
                to="/blogs"
                className="text-sm text-gray-700 hover:text-gray-900 transition-all duration-500 ease-in-out
                           flex items-center space-x-1 px-3 py-2 rounded-lg hover:translate-x-2"
              >
                <ArrowLeft className="h-3 w-4 transform rotate-[130deg] ml-1 absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out top-1/2" />
                About us 
                <ArrowRight className="h-3 w-4 transform -rotate-[50deg] mr-1" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
