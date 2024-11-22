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
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
        >
          <img
            className="w-full h-48 object-cover rounded-md mb-4"
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
          />
          <h2 className="text-lg font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-blue-600 font-bold">Price: ${product.price}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleEdit(product._id)}
              className="flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
            >
              <FaEdit className="mr-2" /> Edit
            </button>
            <button
              onClick={() => handleDelete(product._id)}
              className="flex items-center px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md"
            >
              <FaTrashAlt className="mr-2" /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
