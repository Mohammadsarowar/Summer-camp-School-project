import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Component/Home/Main/Main";
import Home from "../Component/Home/Home";
import SingUp from "../Component/page/SingUp";
import LoginPage from "../Component/page/LoginPage";
import ShowClass from "../Layout/ShowClass";
import Dashboard from "../Component/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../Component/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/singUp',
            element:<SingUp/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
        {
          path:'HeaderClass',
          element:<ShowClass/>
        }
      ],
      
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path:'ManageClasses',
          element:<ManageClasses/>
        }
      ]
      
    }
  ]);
  export default router