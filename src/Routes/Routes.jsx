import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
         path: '/',
         element: <Home></Home>
        },
        {
          path:'allCollege',
          element: <Colleges></Colleges>
        }
    ]
  },
]);
