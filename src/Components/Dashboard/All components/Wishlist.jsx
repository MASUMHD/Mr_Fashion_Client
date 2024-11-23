import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUserData from "../../Hooks/useUserData";
import { MdOutlineCancel } from "react-icons/md";
import Loading from "../../Loading";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const axiosPublic = useAxiosPublic();
  const user = useUserData();
  const [wishlists, setWishlists] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (user?.email) {
        try {
          const response = await axiosPublic.get(`/wishlists/${user.email}`);
          setWishlists(response.data);
        } catch (error) {
          console.error("Error fetching wishlist:", error.message);
        }
      }
    };

    fetchWishlist();
  }, [user?.email, axiosPublic]);

  const handleDelete = async (wishlistId) => {
    try {
      const confirmation = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (confirmation.isConfirmed) {
        const response = await axiosPublic.delete(`/wishlists/${wishlistId}`);
        if (response.status === 200) {
          setWishlists((prev) =>
            prev.filter((item) => item._id !== wishlistId)
          );
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        }
      }
    } catch (error) {
      console.error("Error deleting wishlist item:", error.message);
      Swal.fire(
        "Error!",
        "Failed to delete the item. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="mb-20">
      <Helmet>
        <title>Mr. Fashion | Wishlist</title>
      </Helmet>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4">My Wishlist</h1>
      {wishlists.length === 0 ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 lg:px-32">
          {wishlists.map((item) => (
            <div
              key={item._id}
              className="relative bg-white shadow-lg rounded-lg p-4"
            >
              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(item._id)}
                className="absolute top-2 right-2 bg-yellow-500 p-1 rounded-full text-black hover:bg-red-700"
              >
                <MdOutlineCancel size={24} />
              </button>

              {/* Product Details */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <div className="text-start p-3">
                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Price:</span> ${item.price}
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Brand:</span> {item.brand}
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Category:</span> {item.category}
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
