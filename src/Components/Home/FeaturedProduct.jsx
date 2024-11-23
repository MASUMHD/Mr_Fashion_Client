import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://mr-fashion-server.vercel.app/features");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  

  return (
    <div className="container mx-auto p-6 mt-16">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-16">
        Featured Product
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-medium mt-2">{product.name}</h2>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to="/Shop">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
