import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin, FaTelegram } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6  mt-10">
      <div className="max-w-6xl bg-white rounded-lg shadow-md p-6 lg:p-10 flex flex-col lg:flex-row gap-8">
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKS8zeocPzj1XVp7MjuU8dOvpgkBn0-eKQ&s"
            alt="Alhamdulillah Store"
            className="rounded-lg w-full lg:w-[450px] h-auto object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About Mr. Fashion </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to our online store, where shopping is made easy and enjoyable! We are dedicated
            to providing you with a seamless and convenient shopping experience, offering a wide
            range of high-quality products delivered right to your doorstep. At Alhamdulillah, we
            take pride in our exceptional service, customer satisfaction, and commitment to
            excellence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Shop with us today and experience the joy of hassle-free online shopping. We thank you
            for choosing Alhamdulillah, and we look forward to serving you with excellence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Remember, your satisfaction is our top priority!
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-6 mt-8">
            <span className="text-lg font-semibold text-gray-800">Share Our Store:</span>
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaPinterest className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaLinkedin className="text-blue-700 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
            <FaTelegram className="text-blue-500 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
