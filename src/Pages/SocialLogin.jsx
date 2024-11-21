import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          className="flex items-center justify-center w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
