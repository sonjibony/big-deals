import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
<div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content bg-base-100">
      <li><Link to='/dashboard'>My Booked Furniture</Link></li>
      {/* {
        isAdmin && <>
              <li><Link to='/dashboard/allusers'>All users</Link></li>
              <li><Link to='/dashboard/adddoctor'>Add A Doctor</Link></li>
              <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>

        </>
      } */}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;