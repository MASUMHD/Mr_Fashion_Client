import { Helmet } from "react-helmet";
import Banner from "../Components/Home/Banner";
import FeaturedProduct from "../Components/Home/FeaturedProduct";
import Testimonials from "../Components/Home/Testimonials";
import Categories from "../Components/Home/Categories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mr. Fashion | Home</title>
      </Helmet>
      <div className="mt-[64px]">
        <Banner />
        <div className="container mx-auto">
          <FeaturedProduct />
          <Testimonials/>
          <Categories/>
        </div>
      </div>
    </div>
  );
};

export default Home;
