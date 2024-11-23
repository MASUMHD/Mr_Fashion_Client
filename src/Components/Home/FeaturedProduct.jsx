// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch("FeaturedProduct.json");
  //     const data = await response.json();
  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []);

  const products = [
    {
      "id": 1,
      "name": "T-Shirt",
      "img": "https://nautunkee.com/cdn/shop/files/main-img.jpg?v=1709978926"
    },
    {
      "id": 2,
      "name": "Blazer",
      "img": "https://media.istockphoto.com/id/1092378606/photo/blue-womens-insulated-jacket-in-white-background-invisible-mannequin.jpg?s=612x612&w=0&k=20&c=4dOUxP-1-MsRUFwzQzb3mOLThYSysmFN0d9Gg3gWcXs="
    },
    {
      "id": 3,
      "name": "Hoodie",
      "img": "https://static.vecteezy.com/system/resources/previews/028/248/129/non_2x/design-mockup-clothes-realistic-3d-rendering-of-blank-hoodies-ai-generated-photo.jpg"
    },
    {
      "id": 4,
      "name": "Blazer",
      "img": "https://i.pinimg.com/736x/b3/d3/0c/b3d30c17584b1bc89d43009591a7bf02.jpg"
    },
    {
      "id": 5,
      "name": "Blazer",
      "img": "https://i.pinimg.com/736x/ab/80/f3/ab80f3f0e884f5d1e0f869721d753d17.jpg"
    },
    {
      "id": 6,
      "name": "T-Shirt",
      "img": "https://st.depositphotos.com/1026550/1985/i/450/depositphotos_19858499-stock-photo-blank-white-t-shirt-with.jpg"
    },
    {
      "id": 7,
      "name": "Sunglasses",
      "img": "https://images.pexels.com/photos/147641/pexels-photo-147641.jpeg?cs=srgb&dl=pexels-lanophotography-147641.jpg&fm=jpg"
    },
    {
      "id": 8,
      "name": "Blazer",
      "img": "https://t4.ftcdn.net/jpg/02/94/36/83/360_F_294368307_u6Vfld9S2p10EkRzziNUIoeWhhBsfK4Q.jpg"
    },
    {
      "id": 9,
      "name": "Full Shirt",
      "img": "https://media.istockphoto.com/id/590039970/photo/man-wearing-a-white-shirt-white-background.jpg?s=612x612&w=0&k=20&c=r15FPjb--n45lV9lWTeUXQspeC1OrX9Nk55GMt6jae8="
    },
    {
      "id": 10,
      "name": "Half Shirt",
      "img": "https://img.drz.lazcdn.com/static/bd/p/17bf43036546932f578761eafeb6e1a6.jpg_720x720q80.jpg"
    },
    {
      "id": 11,
      "name": "Long Coat",
      "img": "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2020/03/_x2a3492_1__1__4256.jpg"
    },
    {
      "id": 12,
      "name": "Blazer",
      "img": "https://www.shutterstock.com/image-photo/smiling-young-handsome-southeast-asian-600nw-1943015800.jpg"
    }
  ]

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
