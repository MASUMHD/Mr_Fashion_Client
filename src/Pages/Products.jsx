import { useEffect, useState } from "react";
import SearchBar from "../Components/Products/SearchBar";
import SortByPrice from "../Components/Products/SortByPrice";
import FilterBar from "../Components/Products/FilterBar";
import Loading from "../Components/Loading";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";
import ProductsCard from "../Components/Products/ProductsCard";
import { Dialog } from "@headlessui/react";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import { Helmet } from "react-helmet";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqBrand, setUniqBrand] = useState([]);
  const [uniqCategory, setUniqCategory] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
      <Helmet>
        <title>Mr. Fashion | Products</title>
      </Helmet>
      <h1 className="my-8 text-3xl font-semibold text-center text-gray-800">
        All Products
      </h1>

      <div>
        <button
          className="lg:hidden fixed top-20 left-4 p-2 bg-yellow-500 text-black rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
          onClick={() => setIsDrawerOpen(true)}
        >
          <HiOutlineMenuAlt2 size={28} />
        </button>
      </div>

      {/* Search and Sort */}
      <div className="lg:flex justify-between items-center w-full mb-6 mt-20 hidden bg-yellow-500 p-3 rounded-lg">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
        {/* Drawer Trigger for Small Devices */}
      </div>

      {/* Drawer */}
      <Dialog
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="fixed inset-0 flex items-center justify-end">
          <Dialog.Panel className="w-80 h-12/3 bg-white p-6 rounded-lg shadow-lg transition-transform transform-gpu">
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="absolute top-4 left-4 text-red-500 font-bold text-3xl"
            >
              <HiX />
            </button>
            <FilterBar
              setBrand={setBrand}
              setCategory={setCategory}
              handleReset={handleReset}
              uniqBrand={uniqBrand}
              uniqCategory={uniqCategory}
            />
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Filter Sidebar for Large Devices */}
        <div className="hidden lg:block col-span-3 bg-gray-50 rounded-lg shadow-md p-4">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqBrand={uniqBrand}
            uniqCategory={uniqCategory}
          />
        </div>

        {/* Products */}
        <div className="col-span-12 lg:col-span-9 mt-10 lg:mt-0 p-4 lg:p-0">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center py-20">
                  <h2 className="text-3xl text-center font-bold text-gray-600">
                    No products found
                  </h2>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center mx-auto">
                  {products.map((product) => (
                    <ProductsCard key={product._id} product={product} />
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
