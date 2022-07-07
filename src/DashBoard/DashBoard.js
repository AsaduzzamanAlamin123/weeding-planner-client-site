import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { GrServices } from 'react-icons/gr';
import { GrArticle } from 'react-icons/gr';
import {FcPlanner } from 'react-icons/fc';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center ">
          {/* <!-- Page content here --> */}
         

          <Outlet></Outlet>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-6 overflow-y-auto w-80 bg-base-100 text-base-content mb-4">
            {/* <!-- Sidebar content here --> */}
            <li><NavLink className='mb-4 font-mono font-bold' to='/'><GoHome></GoHome> Home</NavLink></li>
            <li><NavLink className='mb-4 font-mono font-bold' to='/services'><GrServices></GrServices> Services</NavLink></li>
            <li><NavLink className='mb-4 font-mono font-bold' to='/Blogs'><GrArticle></GrArticle> Blogs</NavLink></li>
            <li><NavLink className='mb-4 font-mono font-bold' to='/planner'><FcPlanner></FcPlanner> Our Planner</NavLink></li>
           
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;