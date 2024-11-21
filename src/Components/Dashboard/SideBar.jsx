/* eslint-disable react/prop-types */
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = ({ SideBarToggle }) => {
  return (
    <div
      className={`${
        SideBarToggle ? "hidden" : "block"
      } w-64 bg-gray-800 fixed h-full px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <> 
          <li className="mb-2 rounded hover:bg-blue-500 py-2">
            <p className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
              Home
            </p>
          </li>
        </>
        <> 
          <li className="mb-2 rounded hover:bg-blue-500 py-2">
            <p className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2 " />
              Services
            </p>
          </li>
        </>
      </ul>
    </div>
  );
};

export default SideBar;