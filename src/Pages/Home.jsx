import { Helmet } from "react-helmet";
import Banner from "../Components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mr. Fashion | Home</title>
      </Helmet>
      <div className="mt-[64px]">
        <Banner />
        <div className="container mx-auto">
          <h1> Welcome to Home</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
