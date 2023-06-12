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
import ManageUsers from "../Component/Dashboard/ManageUsers/ManageUsers";
import ShowInstructor from "../Share/ShowInstructor";
import MyClass from "../Component/Dashboard/StudentDashboard.jsx/MyClass";
import AddClass from "../Component/Dashboard/InstructorsPage/AddClass";
import NotFoundPage from "../Share/NotFoundPage";
import MyEnrolledClasses from "../Component/Dashboard/StudentDashboard.jsx/MyEnrolledClasses";
// import Payment from "../Component/page/Payment/Payment";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<NotFoundPage/>,
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
        },
        {
          path:'/HeaderInstructors',
          element:<ShowInstructor/>
        }

      ],
      
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path:'manageClasses',
          element:<ManageClasses/>
        },
        {
          path:'manageUsers',
          element:<ManageUsers/>
        },
        {
          path:'/dashboard/myClass',
          element:<MyClass/>
        },
        {
          path:'/dashboard/addClass',
          element:<AddClass/>
        },
        {
          path:'/dashboard/myEnrolled',
          element:<MyEnrolledClasses/>
        },
      //   {
      //     path:'/dashboard/:id',
      //     element:<Payment/>,
      //     loader: ({ params }) =>fetch(`https://summer-camp-school-server-nu.vercel.app/dashboard/${params.id}`),
      // },
        
      ]
      
    }
  ]);
  export default router