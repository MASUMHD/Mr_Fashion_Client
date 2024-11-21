/* eslint-disable react/prop-types */
import DashNavBar from "./DashNavBar";

const Dashboard = ({ SideBarToggle, setSideBarToggle }) => {
  return (
    <div
      className={`${
        SideBarToggle ? "ml-0" : "ml-64"
      } w-full transition-all duration-300`}
    >
      <DashNavBar
        SideBarToggle={SideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-gray-700">
          Welcome Back, Dashboard
        </h1>
        {/* Other Dashboard content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
