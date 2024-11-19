import {
    createBrowserRouter,
  } from "react-router-dom";
  import Main from "../Layouts/Main";
import ErrorPage from "../Components/ErrorPage";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            
        },
      ]
    },
  ]);