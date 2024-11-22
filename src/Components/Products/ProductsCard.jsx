/* eslint-disable react/prop-types */
const ProductsCard = ({ product }) => {
  return (
    <div>
      <div
        key={product._id}
        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 "
      >
        <div className="relative">
          <img
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.title || "Product Image"}
          />
          <span className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-base px-3 py-1 rounded-full">
            ${product.price || "N/A"}
          </span>
        </div>
        <div className="p-5">
          <div className="text-start">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {product.title || "Untitled Product"}
            </h2>
            <p className="text-sm text-gray-500 my-2">
              <span className="font-medium text-gray-800 text-base">
                Brand:
              </span>{" "}
              {product.brand || "Unknown"}
            </p>
            <p className="text-sm text-gray-500 my-2">
              <span className="font-medium text-gray-800 text-base">
                Category:
              </span>{" "}
              {product.category || "Uncategorized"}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-800 text-base">
                Stock:
              </span>{" "}
              {product.stock || "Uncategorized"}
            </p>
            <p className="text-gray-600 mt-3 text-sm">
              <span className="font-medium text-gray-800 text-base">
                Description:
              </span>{" "}
              {product.description || "No description available"}
            </p>
          </div>
          <div className="mt-4 ">
            <button className="w-full primary-btn text-whit bg-yellow-500 font-bold py-2 px-4 rounded hover:bg-[#3183ffd4] ">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
