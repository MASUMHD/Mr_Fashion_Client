/* eslint-disable react/prop-types */
const SortByPrice = ({ setSort }) => {
    return (
      <div>
        <select className="p-[11px] max-w-md w-40 border border-black rounded-md" onChange={(e) => setSort(e.target.value)}>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
        </select>
      </div>
    );
  };
  
  export default SortByPrice;