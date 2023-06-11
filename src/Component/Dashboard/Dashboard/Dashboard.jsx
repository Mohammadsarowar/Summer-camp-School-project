import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Nabvar from "../../Home/Nabver/Nabvar";
import useAdmin from "../../hooks/useAdmin";
import useTitle from "../../../Share/useTitel";
import useInstructors from "../../hooks/useInstructor";

const Dashboard = () => {
    useTitle('Dashboard')
    //TODO: ...
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
     const [isInstructor] = useInstructors()
    
  return (
    <>

    <Nabvar/>
    <div className="drawer drawer-mobile lg:drawer-open">
    
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <label htmlFor="my-drawer-2" className=" z-10 btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
      <div className="drawer-content mx-auto">
        
        <Outlet />
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" menu p-4 w-80 h-full sm:mt-28 lg:mt-0 bg-orange-300 text-base-content">
        {isAdmin ? <><li>
            <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
          </li>
            <li><NavLink to='/dashboard/manageClasses' >Manage Classes</NavLink></li>
        
            </>:<><li><NavLink to='/dashboard/myClass' >My Classes</NavLink></li>
              {/* TODO: */}
            </> }
            {
                isInstructor ? <><li><Link to='/dashboard/addClass'>Add Class</Link></li></> : <>
                    {/* TODO: */}
                    
                </>
            }
          
        </ul>
      
      </div>
    </div>
    </>
  );
};

export default Dashboard;
