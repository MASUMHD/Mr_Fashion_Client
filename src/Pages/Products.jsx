import { useEffect, useState } from "react";
import SearchBar from "../Components/Products/SearchBar";
import SortByPrice from "../Components/Products/SortByPrice";
import FilterBar from "../Components/Products/FilterBar";
import Loading from "../Components/Loading";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqBrand, setUniqBrand] = useState([]);
  const [uniqCategory, setUniqCategory] = useState([]);
  const axiosPublic = useAxiosPublic();

  
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosPublic.get(
          `/products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
        );

        const { products, brands, categories } = response.data;

        setProducts(products);
        setUniqBrand(brands);
        setUniqCategory(categories);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, sort, brand, category, axiosPublic]);

  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  
  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
  };

  return (
    <div className="container mx-auto mb-20">
      <h1 className="my-8 text-2xl font-semibold text-center">All Products</h1>

      {/* Search and Sort */}
      <div className="flex justify-between items-center w-full mb-6 mt-20">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      {/* Content */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqBrand={uniqBrand}
            uniqCategory={uniqCategory}
          />
        </div>

        {/* Products */}
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-3xl text-center font-bold">
                    No products found
                  </h1>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-3 gap-4">
                  {products.map((product) => (
                    <div
                      key={product._id}
                      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 "
                    >
                      <div className="relative">
                        <img
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                          src={
                            product.image || "https://via.placeholder.com/150"
                          }
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
                            {product.description ||
                              "No description available"}
                          </p>
                        </div>
                        <div className="mt-4 ">
                          <button className="w-full primary-btn text-whit bg-yellow-500 font-bold py-2 px-4 rounded hover:bg-[#3183ffd4] ">
                            Add to Wishlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
