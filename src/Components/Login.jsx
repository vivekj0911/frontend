import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const API_URL = "https://prj-backend-8kmv.onrender.com";
const navigate = useNavigate();

useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    
    if (token) {
               localStorage.setItem('token', token);
      // Navigate to a protected page if needed
      navigate('/'); // Example redirect
    }
  }, []);

    return (
        <>


<div className="googlecontainer">
     
     <a href={`${API_URL}/auth/google`}>
           <img
             src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
             alt="Google Logo"
             className="glogo"
           />
         
         <span className="google-button-text">Sign in with Google</span>
       </a>
     </div>
        
        
        </>
    )
}

export default Login;