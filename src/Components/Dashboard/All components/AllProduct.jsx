import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import Loading from "../../Loading";
import { Helmet } from "react-helmet";

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
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error.message);
      }
    };

    fetchProducts();
  }, [user, axiosPublic]);

  const handleDelete = async (productId) => {
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
      try {
        const response = await axiosPublic.delete(`/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.status === 200) {
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          setProducts((prev) =>
            prev.filter((product) => product._id !== productId)
          );
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire("Error!", "Failed to delete the product.", "error");
      }
    }
  };

  const handleEdit = (product) => {
    Swal.fire({
      title: "Edit Product",
      html: `
        <input id="swal-title" class="swal2-input" placeholder="Title" value="${product.title}" />
        <textarea id="swal-description" class="swal2-textarea" placeholder="Description">${product.description}</textarea>
        <input id="swal-price" class="swal2-input" placeholder="Price" type="number" value="${product.price}" />
        <input id="swal-stock" class="swal2-input" placeholder="Stock" type="number" value="${product.stock}" />
        <input id="swal-category" class="swal2-input" placeholder="Category" value="${product.category}" />
        <input id="swal-brand" class="swal2-input" placeholder="Brand" value="${product.brand}" />
      `,
      showCancelButton: true,
      confirmButtonText: "Save",
      preConfirm: () => {
        return {
          title: document.getElementById("swal-title").value,
          description: document.getElementById("swal-description").value,
          price: parseFloat(document.getElementById("swal-price").value),
          stock: parseInt(document.getElementById("swal-stock").value, 10),
          category: document.getElementById("swal-category").value,
          brand: document.getElementById("swal-brand").value,
        };
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const updatedProduct = result.value;
          const response = await axiosPublic.put(
            `/products/${product._id}`,
            updatedProduct,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );

          if (response.status === 200) {
            Swal.fire("Updated!", "Product has been updated.", "success");
            setProducts((prev) =>
              prev.map((item) =>
                item._id === product._id ? { ...item, ...updatedProduct } : item
              )
            );
          }
        } catch (error) {
          console.error("Error updating product:", error);
          Swal.fire("Error!", "Failed to update the product.", "error");
        }
      }
    });
  };

  if (!user)
    return (
      <div>
        <div>
          <Loading />
        </div>
      </div>
    );
  if (products.length === 0)
    return (
      <div className="text-center text-2xl font-semibold">
        No products available.
      </div>
    );

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
      <Helmet>
        <title>Mr. Fashion | All Product</title>
      </Helmet>
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
                <span className="font-medium text-gray-800 text-base">
                  Brand:
                </span>{" "}
                {product.brand}
              </p>
              <p className="text-sm text-gray-500 my-2">
                <span className="font-medium text-gray-800 text-base">
                  Category:
                </span>{" "}
                {product.category}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-800 text-base">
                  Stock:
                </span>{" "}
                {product.stock}
              </p>
              <p className="text-gray-600 mt-3 text-sm">
                {product.description}
              </p>
            </div>
            <div className="mt-4 flex justify-end gap-3 items-center">
              <button
                onClick={() => handleEdit(product)}
                className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded transition-all"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex items-center px-4 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded transition-all"
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProduct;
