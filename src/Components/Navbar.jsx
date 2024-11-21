import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaRandom,
  FaShoppingBag,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import UseAuth from "./Hooks/UseAuth";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = UseAuth();
  console.log("navbar", user?.email);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border-b-2 border-yellow-500"
            : "hover:text-yellow-500"
        }
      >
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive
            ? "text-yellow-500 border-b-2 border-yellow-500"
            : "hover:text-yellow-500"
        }
      >
        <li>
          <p>Shop</p>
        </li>
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        <li>
          <p>Blog</p>
        </li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        <li>
          <p>About Us</p>
        </li>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-yellow-500" : "hover:text-yellow-500"
        }
      >
        <li>
          <p>Contact Us</p>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="bg-black text-white fixed top-0 left-0 right-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start flex items-center">
          {/* Logo */}
          <a className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKS8zeocPzj1XVp7MjuU8dOvpgkBn0-eKQ&s"
              alt="Logo"
              className="w-12 lg:w-20 object-cover"
            />
            <div>
              <span className="text-yellow-500 font-bold text-2xl">
                Mr. Fashion
              </span>
              <p className="text-xs text-gray-400">Be Satisfied In Sha Allah</p>
            </div>
          </a>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-6">{navLinks}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center space-x-4">
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            <button className="hover:text-yellow-500 font-semibold">
              Login
            </button>
          </NavLink>{" "}
          /
          <NavLink
            to="/Register"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500"
                : "hover:text-yellow-500"
            }
          >
            <button className="hover:text-yellow-500 font-semibold">
              Register
            </button>
          </NavLink>
          <FaHeart className="text-xl hover:text-yellow-500 hidden lg:block" />
          <FaRandom className="text-xl hover:text-yellow-500 hidden lg:block" />
          <div className="relative hidden lg:block">
            <FaShoppingBag className="text-xl hover:text-yellow-500" />
            <span className="badge badge-sm absolute -top-2 -right-2 bg-yellow-500 text-black">
              0
            </span>
          </div>
          {/* Dropdown */}
          <Dropdown />
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden">
            {menuOpen ? (
              <FaTimes className="text-2xl text-yellow-500" />
            ) : (
              <FaBars className="text-2xl text-yellow-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 text-white p-4">
          <ul className="space-y-4">{navLinks}</ul>
          <div className="mt-4 space-y-2">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "hover:text-yellow-500"
              }
            >
              <button className="hover:text-yellow-500 font-semibold">
                Login
              </button>
            </NavLink>{" "}
            /
            <NavLink
              to="/Register"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "hover:text-yellow-500"
              }
            >
              <button className="hover:text-yellow-500 font-semibold">
                Register
              </button>
            </NavLink>
            <FaHeart className="text-xl hover:text-yellow-500" />
            <FaRandom className="text-xl hover:text-yellow-500" />
            <div className="relative">
              <FaShoppingBag className="text-xl hover:text-yellow-500" />
              <span className="badge badge-sm absolute -top-2 -right-2 bg-yellow-500 text-black">
                0
              </span>
            </div>
            {/* Dropdown */}
              <Dropdown />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
