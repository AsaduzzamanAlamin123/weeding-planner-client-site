import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assest/icon/download.png'

const Navbar = () => {
    const menuItems = <>
     <li><NavLink className='font-mono font-bold text-secondary-focus'  to='/login'>Login</NavLink></li>
    <li><NavLink  className='font-mono font-bold text-secondary-focus'  to='/signup'>SignUp</NavLink></li>
   
    </>
    return (
        <div class="navbar bg-gradient-to-r from-secondary via-purple-500  to-primary ">
        <div class="navbar-start">
        <label for="my-drawer-2" tabindex="0"  class="btn btn-ghost lg:hidden">
         
       <h2 title='sidebar'> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></h2>
      </label>
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {menuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl  font-serif">  Weeding Planner</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 mr-5">
           {menuItems}
            
          
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;