import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAdmin = true;
    const isInstructor = false
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
        <p>jddh</p>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
        {isAdmin ? <><li>
            <NavLink to="/dashboard/adminhome"> Admin Home</NavLink>
          </li>
            <li>all item</li>
            <li><NavLink to='ManageClasses' >Manage Classes</NavLink></li>
            </>:<>
              
            </> }
            {
                isInstructor ? <><li>hi</li></> : <></>
            }
          
        </ul>
      
      </div>
    </div>
  );
};

export default Dashboard;
