import { Link } from "react-router-dom";
import LottieAnimations from "../../public/Animation - 1732036072330.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div>
      <div className="w-full absolute  h-screen md:h-screen flex flex-col justify-center items-center space-y-5">
        <Lottie animationData={LottieAnimations} />
        <div className="text-center absolute bottom-10">
          <button className="primary-btn text-whit bg-[#d55252] font-bold py-2 px-4 rounded hover:bg-[#3183ffd4] ">
            <Link to="/">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
