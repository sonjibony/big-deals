import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {

const {user, logOut} = useContext(AuthContext);

//implementing log out
const onLogOut = () =>{
    logOut()
    .then (() => {})
    .catch (error => console.log(error));
}

  //menu items
  const menuItems = (
    <>
      <li>
        <Link to='/'>Home </Link>
      </li>
      
      
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
      {
        user?.uid?
        <>
    <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
        <li><button onClick={onLogOut} >Sign out</button></li>
        </>
         
        : <li><Link to='/login'>Log in</Link></li>
      }
    </>
  );

  return (
    <div className="navbar bg-base-100 justify-between">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
          Big <span className="text-red-300">Deal</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">            {menuItems}
</ul>
      </div>
     
    </div>
  );
};

export default Navbar;
