import { useState } from "react";
import SideBar from "../Components/Dashboard/SideBar";
import Dashboard from "../Components/Dashboard/Dashboard";
import { Helmet } from "react-helmet";

const DasMain = () => {
  const [SideBarToggle, setSideBarToggle] = useState(false);

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard</title>
      </Helmet>

      <div className="flex">
        <SideBar SideBarToggle={SideBarToggle} />
        <Dashboard SideBarToggle={SideBarToggle} setSideBarToggle={setSideBarToggle} />
      </div>
    </div>
  );
};

export default DasMain;
