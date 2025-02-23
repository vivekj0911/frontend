import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

 function Signup() {
    const API_URL = "https://prj-backend-r3nqzm3oa-prathameshkhandares-projects.vercel.app"
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); 

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(""); 
    setError(""); 

    try {
      const response = await axios.post(`${API_URL}/register`, registrationData);
      console.log(registrationData)

      if (response.status === 201) {
        
        setRegistrationData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phone: "",
        });

        setSuccessMessage("Registration successful! Redirecting to sign in...");

        
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      setError(error.response ? error.response.data.message : "Something went wrong!");
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex justify-center items-center min-h-screen bg-gray-200">
    
      <div className="p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-30">
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Here</h2>

        <div className="flex flex-col gap-6">
         
          <div className="relative">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={registrationData.firstName}
              onChange={handleOnChange}
              required
              placeholder="First Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          
          <div className="relative">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={registrationData.lastName}
              onChange={handleOnChange}
              required
              placeholder="Last Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={registrationData.email}
              onChange={handleOnChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              value={registrationData.password}
              onChange={handleOnChange}
              required
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:bg-transparent focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type="phone"
              id="phone"
              name="phone"
              value={registrationData.phone}
              onChange={handleOnChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-transparent focus:bg-transparent focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

         
          <button
            type="submit"
            className="relative p-3 text-white rounded-md overflow-hidden bg-blue-500 group focus:outline-none"
          >
            <span className="relative z-10">{isLoading ? "Loading..." : "Register"}</span>
          </button>

         
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

         
          {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}

         
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;