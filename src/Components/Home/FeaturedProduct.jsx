const FeaturedProduct = () => {
    const products = [
      { name: "Full Shirt", img: "../../../public/image/drop-t-shirt-6733dadfbf4b5-150x150.webp" },
      { name: "Half Shirt", img: "../../../public/image/DSC04261-Copy-scaled.jpeg" },
      { name: "T-Shirt", img: "../../../public/image/DSC04593-Copy-scaled.jpeg" },
      { name: "Drop T-Shirt", img: "../../../public/image/DSC04729-Copy-scaled.jpeg" },
      { name: "Polo T-Shirt", img: "../../../public/image/DSC05015-scaled.jpeg" },
      { name: "Women", img: "../../../public/image/t-shirt-6733dae9bc38e.webp" },
      { name: "Panjabi", img: "../../../public/image/sunglasses-6733dae87c647-150x150.webp" },
      { name: "Pajama", img: "../../../public/image/DSC05022-Copy-scaled.jpeg" },
      { name: "Pant", img: "../../../public/image/full-shirt-6733dae22d67e-150x150.webp" },
      { name: "Joggers", img: "../../../public/image/half-shirt-6733dae2bbced-150x150.webp" },
      { name: "Long Coat", img: "../../../public/image/long-coat-6722c798bb341.webp" },
      { name: "Blazer", img: "../../../public/image/DSC04261-Copy-scaled.jpeg" },
    ];
  
    return (
      <div className="container mx-auto p-6 mt-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-10">Featured Product</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
          {products.map((product, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-medium mt-2">{product.name}</h2>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
            See More
          </button>
        </div>
      </div>
    );
  };
  
  export default FeaturedProduct;
  