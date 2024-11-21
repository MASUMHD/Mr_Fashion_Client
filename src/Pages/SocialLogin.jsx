import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Components/Hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = UseAuth();

    const navigate = useNavigate();
  const handelGoogleLogin = () => {
    googleLogin().then(() => {
        navigate("/");
    })
    
  };
  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          onClick={handelGoogleLogin}
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
