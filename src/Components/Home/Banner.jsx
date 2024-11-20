import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Banner = () => {
  const slides = [
    {
      title: "Step into Style",
      description:
        "Discover the latest fashion trends and timeless pieces crafted for every occasion. From casual wear to elegant designs, Mr. Fashion brings you the finest apparel. Explore a world where comfort meets sophistication, and redefine your wardrobe effortlessly with styles that inspire confidence and celebrate individuality.",
      buttonText: "Shop Now",
      image:
        "https://img.freepik.com/free-photo/woman-model-demonstrating-winter-cloths_1303-16967.jpg?t=st=1732085695~exp=1732089295~hmac=7f95a742bc9ca4f89e8b8f5d607b82d7f6149d9bff1511423bee63e9a2ff7043&w=996",
    },
    {
      title: "Redefine Your Wardrobe",
      description:
        "Explore chic, sophisticated collections designed to reflect your personality. Mr. Fashion offers premium styles for modern living. Our curated pieces blend quality with trend, making it simple to express yourself. Elevate your everyday look and embrace fashion that’s uniquely yours, tailored for confidence and individuality.",
      buttonText: "Browse Collection",
      image: "https://i.postimg.cc/Njc4qGYQ/asset-4.jpg",
    },
    {
      title: "Your Ultimate Fashion Partner",
      description:
        "Find exclusive designs and wardrobe essentials that transform any occasion into a style statement. Mr. Fashion ensures effortless shopping with premium choices. From versatile casuals to statement-making outfits, every piece is crafted to perfection. Elevate your fashion game with innovative designs that highlight your unique style.",
      buttonText: "Get Started",
      image: "https://i.postimg.cc/52g8hwnm/asset-5.jpg",
    },
    {
      title: "Unparalleled Elegance",
      description:
        "Discover unparalleled elegance and style at Mr. Fashion. Our premium selections bring the perfect balance of comfort and sophistication to your wardrobe. Whether for daily wear or special occasions, we provide designs that empower and inspire. Experience individuality with fashion tailored to elevate every moment effortlessly.",
      buttonText: "Explore Now",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20231226/pngtree-black-material-down-jacket-with-insulated-texture-on-a-black-background-image_13851106.png",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-0 lg:p-8 gap-10">
              
              <div className="lg:w-1/2 text-center lg:text-left ml-0 lg:ml-14 p-5 lg:p-0">
                <h1 className="text-3xl lg:text-5xl font-bold text-yellow-500 mb-10">
                  {slide.title}
                </h1>
                <p className="text-sm lg:text-lg text-gray-300 mb-8 ">
                  {slide.description}
                </p>
                <button className="mt-4 rounded bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400 transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>

              
              <div className=" lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" lg:rounded-lg shadow-lg w-full h-[600px] object-cover transition-all duration-500 transform hover:scale-105"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
