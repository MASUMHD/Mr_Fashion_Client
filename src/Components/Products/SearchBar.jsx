/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearch }) => {
  return (
    <form className="flex items-center gap-[2px] " onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search Products"
        name="search"
        className="max-w-44 lg:max-w-md p-[10px] rounded-l-md  border-2 border-black"
      />
      <button className="px-4 py-3 rounded-l-none rounded-r-md btn-outline bg-gray-200 border-2 border-black">
        <FaSearch className="w-5 h-5" />
      </button>
    </form>
    
  );
};

export default SearchBar;
