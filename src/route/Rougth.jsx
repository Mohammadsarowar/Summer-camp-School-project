import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Component/Home/Main/Main";
import Home from "../Component/Home/Home";
import SingUp from "../Component/page/SingUp";
import LoginPage from "../Component/page/LoginPage";

  
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
            path:'singUp',
            element:<SingUp/>
        },
        {
            path:'login',
            element:<LoginPage/>
        }
      ]
    },
  ]);
  export default router