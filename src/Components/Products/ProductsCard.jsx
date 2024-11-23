/* eslint-disable react/prop-types */
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useUserData from "../Hooks/useUserData";
import Swal from "sweetalert2";

const ProductsCard = ({ product }) => {
  const user = useUserData();
  const axiosPublic = useAxiosPublic();

  const isRoleTrue = user.role === "admin" || user.role === "seller";

  const handleAddToWishlist = async () => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to add items to your wishlist.",
      });
      return;
    }

    const wishlistItem = {
      email: user.email,
      productId: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      brand: product.brand,
      category: product.category,
      description: product.description,
    };

    try {
      const response = await axiosPublic.post("/wishlists", wishlistItem);
      if (response.data?.message === "Wishlist already exists") {
        Swal.fire({
          icon: "info",
          title: "Already Added",
          text: "This product is already in your wishlist.",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Added to Wishlist",
          text: "Product has been successfully added to your wishlist.",
        }).then(() => {
          window.location.reload(); 
        });
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add the product to your wishlist. Please try again.",
      });
    }
  };

  return (
    <div>
      <div
        key={product._id}
        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative">
          <img
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            src={product.image}
            alt={product.title}
          />
          <span className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-base px-3 py-1 rounded-full">
            ${product.price || "N/A"}
          </span>
        </div>
        <div className="p-5">
          <div className="text-start">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 my-2">
              <span className="font-medium text-gray-800 text-base">Brand:</span>{" "}
              {product.brand}
            </p>
            <p className="text-sm text-gray-500 my-2">
              <span className="font-medium text-gray-800 text-base">Category:</span>{" "}
              {product.category}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-800 text-base">Stock:</span>{" "}
              {product.stock}
            </p>
            <p className="text-gray-600 mt-3 text-sm">
              <span className="font-medium text-gray-800 text-base">
                Description:
              </span>{" "}
              {product.description || "No description available"}
            </p>
          </div>
          <div className="mt-4">
            {/* Add to Wishlist button */}
            <button
              onClick={handleAddToWishlist}
              className={`w-full primary-btn text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
                isRoleTrue
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-[#3183ffd4]"
              }`}
              disabled={isRoleTrue}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
