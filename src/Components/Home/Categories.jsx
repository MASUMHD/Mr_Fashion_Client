import { FaTshirt, FaUserTie, FaFemale, FaMale } from "react-icons/fa";
import { GiShirt, GiClothes } from "react-icons/gi";
import { BsPencil, BsBoxArrowInDown } from "react-icons/bs";
import { MdOutlineStyle } from "react-icons/md"; 

const Categories = () => {
  const categories = [
    { name: "Full Shirt", icon: <GiShirt /> },
    { name: "Half Shirt", icon: <FaTshirt /> },
    { name: "T-Shirt", icon: <FaTshirt /> },
    { name: "Drop T-Shirt", icon: <GiClothes /> },
    { name: "Polo T-Shirt", icon: <FaTshirt /> },
    { name: "Women", icon: <FaFemale /> },
    { name: "Panjabi", icon: <MdOutlineStyle /> },
    { name: "Pajama", icon: <BsPencil /> },
    { name: "Pant", icon: <BsBoxArrowInDown /> },
    { name: "Joggers", icon: <FaUserTie /> },
    { name: "Long Coat", icon: <MdOutlineStyle /> }, 
    { name: "Blazer", icon: <FaMale /> },
  ];

  return (
    <div className="p-4 mt-12 lg:mt-20  mb-10 lg:mb-16">
      <h1 className="text-center text-3xl lg:text-4xl font-semibold my-4 mb-16">
        Our Product Categories
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 flex flex-col items-center"
          >
            <div className="text-yellow-500 text-3xl mb-4">
              {category.icon}
            </div>
            <p className="text-lg font-medium text-gray-800 text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
