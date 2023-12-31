import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
         path: '/',
         element: <Home></Home>
         
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path:'allCollege',
          element: <Colleges></Colleges>
        },
        {
          path: '/collegeDetails/:id',
          element: <CollegeDetails></CollegeDetails>,
          loader: ()=> fetch('https://college-hub-server-five.vercel.app/colleges')
          
        }
    ]
  },
]);
