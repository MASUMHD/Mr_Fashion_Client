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
    <div className="bg-black text-white">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[500px] lg:h-[900px] w-full object-cover bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="z-10 text-center px-6 lg:px-12">
                <h1 className="text-4xl lg:text-6xl font-bold text-yellow-500 mb-4">
                  {slide.title}
                </h1>
                <p className="hidden md:block text-lg lg:text-lg text-gray-400 mb-6 pl-0 lg:pl-56 pr-0 lg:pr-56">
                  <i>{slide.description}</i>
                </p>
                <button className="mt-5 lg:mt-0 rounded bg-yellow-500 px-8 py-3 font-semibold text-black hover:bg-yellow-400 transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
