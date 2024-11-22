import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/useAuth";

const AllProduct = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!user?.email) {
        console.error("User email not available.");
        return;
      }
      try {
        const response = await axiosPublic.get(`/products/${user.email}`);
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      }
    };

    fetchProducts();
  }, [user, axiosPublic]);

  // Handle delete product
  const handleDelete = async () => {
    alert("Delete product");
  };

  // Handle edit product
  const handleEdit = (productId) => {
    alert(`Edit product with ID: ${productId}`);
  };

  if (!user) return <div>Loading user...</div>;
  if (products.length === 0) return <div>No products available.</div>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
      {products.map((product) => (
        <div
          key={product._id}
          className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-yellow-500 hover:border-2"
        >
          <div className="relative">
            <img
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              src={
                product.image ||
                "https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2024-2.jpg"
              }
              alt={product.title}
            />
            <span className="absolute top-2 right-2 bg-yellow-500 text-black font-bold text-base px-3 py-1 rounded-full">
              ${product.price}
            </span>
          </div>
          <div className="p-4">
            <div className="text-start">
              <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {product.title}
              </h2>
              <p className="text-sm text-gray-500 my-2">
                <span className="font-medium">Brand:</span> {product.brand}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </p>
              <p className="text-gray-600 mt-3 text-sm">
                {product.description}
              </p>
            </div>
            <div className="mt-4 flex justify-end gap-3 items-center">
              <button
                onClick={() => handleEdit(product._id)}
                className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded transition-all "
              >
                <FaEdit className="" />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex items-center px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded transition-all"
              >
                <FaTrashAlt className="mr" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
