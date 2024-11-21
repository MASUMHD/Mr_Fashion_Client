/* eslint-disable react/prop-types */
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const DashNavBar = ({ SideBarToggle, setSideBarToggle }) => {
  return (
    <div className="bg-black px-4 py-3 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center text-xl">
        <FaBars
          onClick={() => setSideBarToggle(!SideBarToggle)}
          className="text-white mr-4 cursor-pointer"
        />
      </div>

      <div className="flex items-center gap-x-5 pr-0 lg:pr-10">
        <div className="relative md:w-56">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            type="text"
            placeholder="Search products..."
          />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6 hover:text-yellow-500" />
        </div>
        <div className="relative">

        </div>
      </div>
    </div>
  );
};

export default DashNavBar;
