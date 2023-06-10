import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nabvar from "../../Home/Nabver/Nabvar";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    //TODO: ...
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    const isInstructor = false
  return (
    <>

    <Nabvar/>
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
      <div className="drawer-side bg-sky-300">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
        {isAdmin ? <><li>
            <NavLink to="/dashboard/adminhome"> Admin Home</NavLink>
          </li>
            <li>all item</li>
            <li><NavLink to='/dashboard/manageClasses' >Manage Classes</NavLink></li>
            <li><NavLink to='/dashboard/manageUsers' >Manage Users</NavLink></li>
            </>:<>
              {/* TODO: */}
            </> }
            {
                isInstructor ? <><li>hi</li></> : <>
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
