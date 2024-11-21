import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Components/Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";
import Swal from "sweetalert2"; 

const SocialLogin = () => {
  const { googleLogin } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      const loggedInUser = result.user;
  
      const userData = {
        email: loggedInUser.email,
        role: "buyer", 
      };
  
      const response = await axiosPublic.post("/users", userData);
  
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: response.data.message || "Welcome to Mr. Fashion!",
        showConfirmButton: false,
        timer: 2000,
      });
  
      navigate("/"); 
    } catch (error) {
      console.error("Error during Google login:", error);
  
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Something went wrong! Please try again.",
        footer: "Check your console for more details.",
      });
    }
  };
  

  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handleGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
