import { useEffect, useState } from "react";
import SearchBar from "../Components/Products/SearchBar";
import SortByPrice from "../Components/Products/SortByPrice";
import FilterBar from "../Components/Products/FilterBar";
import Loading from "../Components/Loading";
import useAxiosPublic from "../Components/Hooks/useAxiosPublic";
import ProductsCard from "../Components/Products/ProductsCard";

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
