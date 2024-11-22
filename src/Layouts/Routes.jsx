import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Shop from "../Pages/Products";
import DasMain from "../Pages/DasMain";
import AllUsers from "../Components/Dashboard/All components/AllUsers";
import AllProduct from "../Components/Dashboard/All components/AllProduct";
import DasHome from "../Components/Dashboard/All components/DasHome";
import Contact from "../Pages/Contact";
import AddNewProduct from "../Components/Dashboard/All components/AddNewProduct";
import MainLayouts from "./MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <DasMain />,
    children: [
      {
        path: "/dashboard",
        element: <DasHome />,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/products",
        element: <AllProduct />,
      },
      {
        path: "/dashboard/addProducts",
        element: <AddNewProduct />,
      }
    ],
  },
]);
