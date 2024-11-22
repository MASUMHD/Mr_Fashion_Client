/* eslint-disable react/prop-types */
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdMedicalServices, MdOutlineArrowBack } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import useUserData from "../Hooks/useUserData";

const SideBar = ({ SideBarToggle }) => {
  const location = useLocation();
  const user = useUserData();

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
            className={`mb-3 py-2 px-3 rounded ${
              location.pathname === "/dashboard"
                ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                : "hover:bg-yellow-500 hover:text-black"
            }`}
          >
            <p className="flex items-center">
              <FaHome className="w-6 h-6 mr-2" />
              Dashboard Home
            </p>
          </li>
        </Link>

        {/* Show admin */}
        {user.role === "admin" && (
          <Link to="/dashboard/users">
            <li
              className={`mb-3 py-2 px-3 rounded ${
                location.pathname === "/dashboard/users"
                  ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                  : "hover:bg-yellow-500 hover:text-black"
              }`}
            >
              <p className="flex items-center">
                <FaUsers className="w-6 h-6 mr-2" />
                All Users
              </p>
            </li>
          </Link>
        )}

        {/* Show Seller */}

        {user.role === "seller" && (
          <>
            <Link to="/dashboard/products">
              <li
                className={`mb-3 py-2 px-3 rounded ${
                  location.pathname === "/dashboard/products"
                    ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                    : "hover:bg-yellow-500 hover:text-black"
                }`}
              >
                <p className="flex items-center">
                  <MdMedicalServices className="w-6 h-6 mr-2" />
                  Add a new product
                </p>
              </li>
            </Link>
            <Link to="/dashboard/products">
              <li
                className={`mb-3 py-2 px-3 rounded ${
                  location.pathname === "/dashboard/products"
                    ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                    : "hover:bg-yellow-500 hover:text-black"
                }`}
              >
                <p className="flex items-center">
                  <MdMedicalServices className="w-6 h-6 mr-2" />
                  All product
                </p>
              </li>
            </Link>
          </>
        )}

        {/* Show buyer */}
        {user.role === "buyer" && (
          <Link to="/">
            <li
              className={`mb-2 py-2 px-3 rounded ${
                location.pathname === "/dashboard/appointments"
                  ? "text-yellow-500 font-bold border border-yellow-500 rounded-lg"
                  : "hover:bg-yellow-500 hover:text-black"
              }`}
            >
              <p className="flex items-center">
                <BsChatSquareQuoteFill className="w-6 h-6 mr-2" />
                Wishlist
              </p>
            </li>
          </Link>
        )}

        <hr className="mt-20 "/>

        <Link to="/">
          <li
            className="mb-2 py-2 mt-5  px-3 rounded border hover:bg-yellow-500 hover:text-black border-white
            "
          >
            <p className="flex items-center">
              <MdOutlineArrowBack className="w-6 h-6 mr-2" />
              Back to Home
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
