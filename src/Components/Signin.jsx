import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../Store/authStore";

function Signin() {
  const [error, setError] = useState("");
  const [logindata, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...logindata,
      [name]: value,
    });
  };

  const { login } = useAuthStore();
  const navigate = useNavigate();


  
  

  const handleSubmit = async (e) => {
     const API_URL = "https://prj-backend.vercel.app"
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, logindata);

      if (response.status === 200) {
        console.log("User login successfully");
        login(response.data.user, response.data.token);
        setLoginData({
          email: "",
          password: "",
        });
        if (error.response) {
          console.log(error.response.data); 
          setError(error.response.data.message || "Something went wrong. Please try again.");
      } else {
          console.log(error); 
          setError("Network error. Please try again later.");
      }
      

       
       
      
       
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Something went wrong. Please try again.");
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      
      <div className="backdrop-blur-md bg-opacity-0 p-8 rounded-lg shadow-lg w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="relative"
          autoComplete="off"
        >
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Login
          </h1>
          
          <div className="relative mb-6">
            <input
              type="email"
              name="email"
              value={logindata.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            />
          </div>
          {/* Password Input */}
          <div className="relative mb-6">
            <input
              type="password"
              name="password"
              value={logindata.password}
              onChange={handleChange}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            Submit
          </button>

          {/* Links */}
          <div className="mt-4 text-center">
            <Link to="/forgotpassword" className="text-blue-500 hover:text-blue-600 cursor-pointer">
              Forgot Password?
            </Link>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-600">Don't have an account? </span>
            <Link to="/signup" className="text-blue-500 hover:text-blue-600 cursor-pointer">
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signin;