/* eslint-disable react/prop-types */
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const SideBar = ({ SideBarToggle }) => {
  const location = useLocation();

  return (
    <div
      className={`${
        SideBarToggle ? "hidden" : "block"
      } w-64 bg-black fixed h-full px-4 py-2`}
    >
      <div className="my- mb">
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="w-40 h-32 bg-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKS8zeocPzj1XVp7MjuU8dOvpgkBn0-eKQ&s"
            alt="Logo"
          />
        </Link>
      </div>
      <hr className="  " />
      <ul className="mt-8 text-white font-bold ">
        <Link to="/dashboard">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard"
                ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <FaHome className="w-6 h-6 mr-2" />
              Dashboard Home
            </p>
          </li>
        </Link>
        <Link to="/dashboard/users">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard/users"
                ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <FaUsers className="w-6 h-6 mr-2" />
              All Users
            </p>
          </li>
        </Link>
        <Link to="/dashboard/products">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard/products"
                ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <MdMedicalServices className="w-6 h-6 mr-2" />
              Products
            </p>
          </li>
        </Link>
        <Link to="/">
          <li
            className={`mb-2 py-2 px-3 rounded ${
              location.pathname === "/dashboard/appointments"
                ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                : "hover:bg-blue-500"
            }`}
          >
            <p className="flex items-center">
              <BsChatSquareQuoteFill className="w-6 h-6 mr-2" />
              Home
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
