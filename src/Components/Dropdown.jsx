import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import UseAuth from "./Hooks/UseAuth";

const Dropdown = () => {
    const { logout } = UseAuth();
  return (
    <div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="mt-3 hover:cursor-pointer hover:text-yellow-500"
        >
          <IoIosArrowDown className="text-2xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-yellow-400 text-black font-bold rounded-box z-[1] w-32 p-2 mt-3 shadow"
        >
          <Link to="">
            <li className="">
              <p>Dashboard</p>
            </li>
          </Link>
          <li className="hover:text-red-500">
            <button onClick={logout}>Log out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
