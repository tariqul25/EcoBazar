import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router";
const Navbar = () => {
  return (
   <div className=" bg-base-100 shadow-sm">
     <div className="navbar max-w-7xl mx-auto ">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
          <li>
            <Link>Pages</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center space-x-1">
        <img className="w-5" src="/src/assets/images/logo.png" alt="" />
        <p className="text-xl">Ecobazar</p>
      </div>
      <div className="navbar-end space-x-1">
        <div className="flex mr-4">
          <MdOutlinePhoneInTalk size='20px' />
          <p>(219) 555-0114</p>
        </div>
        <IoSearchOutline size='20px'/>
        <GoHeart size='20px' />
        <img src="/src/assets/images/cart.png" className="w-6" alt="" />
        <FaRegUser size='20px'/>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
