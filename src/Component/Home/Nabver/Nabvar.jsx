import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { BeakerIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../route/AuthProvider";
import DarkMood from "../../../Share/DarkMood";
const Nabvar = () => {
  const {user,logOut } = useContext(AuthContext)
  const singOut = () =>{
    return logOut()
  }
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending bg-blue-700" : isActive ? "active bg-blue-700" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-blue-700 hover:bg-black" : ""
                }
              >
              Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active bg-blue-700 hover:bg-black" : ""
                }
              >
                
              </NavLink>
            </li>
          </ul>
        </div>
        
        <Link to='/' className="btn"><img className="w-40" src='https://themeadapt.com/tm/eduvalt/assets/img/logo/logo.png'></img></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending " : isActive ? "active bg-blue-700 hover:bg-black" : ""
  }
>
 Home
</NavLink>
          </li>
          <li>
          <NavLink
  to="/HeaderInstructors"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-blue-700 hover:bg-black" : ""
  }
>
 Instructors
</NavLink>
           
          </li>
          <li>
          <NavLink
  to="/HeaderClass"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-blue-700 hover:bg-black" : ""
  }
>
 Classes
</NavLink>
          
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <li className="mr-5"><button><DarkMood/></button></li>
      <NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active bg-blue-700 hover:bg-black" : ""
  }
>
<button className="btn btn-outline btn-primary">Dashboard</button>
</NavLink>

        { user ?<>
        <div className="dropdown dropdown-end">
        
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><button onClick={singOut}>Logout</button></li>
      </ul>
    </div>
 

        </>:<Link to='/login' className="btn">
          <UserIcon className="h-6 w-6 text-blue-500" />
        </Link>}
        
      </div>
    </div>
  );
};

export default Nabvar;
