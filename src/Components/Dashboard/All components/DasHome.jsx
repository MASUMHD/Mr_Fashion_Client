import { Helmet } from "react-helmet";

const DasHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center -mt-10 p-3">
      <Helmet>
        <title>Mr. Fashion | Dashboard</title>
      </Helmet>
      
      <div className="bg-white rounded-lg shadow-xl p-8 mx-4 my-8 max-w-4xl w-full text-center">
        <div className="mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKS8zeocPzj1XVp7MjuU8dOvpgkBn0-eKQ&s"
            alt="Mr. Fashion Logo"
            className="w-32 lg:w-40 mx-auto mb-4 rounded-xl"
          />
          <h1 className="text-3xl font-semibold text-gray-800">Welcome to Mr. Fashion Dashboard</h1>
        </div>

        
        <div className="mb-8">
          <p className="text-xl text-gray-600">
            Hello, Admin! You are now at the heart of Mr. Fashion. Here, you can manage products, orders, customers, and more.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            Explore and manage the various sections of your website and stay on top of everything with ease.
          </p>
        </div>

        <div>
          <a
            href="/dashboard"
            className="inline-block bg-yellow-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Explore Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default DasHome;
