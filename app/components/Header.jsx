import Link from 'next/link';
import React from 'react';
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-2 mx-16">
            <img src="/satyamev_jayate.png" alt="Government of Gujrat" className="h-8 rounded-full" />
            <div className="flex flex-row space-y-1 space-x-4">
              <p className="text-xs pr-4 border-gray-400 border-r-2">ગુજરાત સરકાર <br /> GOVERNMENT OF GUJRAT  </p>
              <img src="/startupgujratcommisionerate.png" alt="Industries Commisionerate of Gujrat" className="h-8 border-gray-400 border-r-2" />
            </div>
          </div>
          {/* Right Side: Social Icons and Toll-free number */}
          <div className="flex items-center space-x-4 mx-16">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            {/* Toll-Free Number */}
            <span className="text-sm"><span className='font-bold'>Our Toll Free Number</span>: <span className='text-xs'>1800 233 0616</span> (10:30 AM to 06:10 PM)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Left Side: Startup India Logo and Ministry Logo */}
          <div className="flex items-center space-x-4 mx-16">
            <img src="/startupgujrat.png" alt="#startupindia" className="h-10 border-r-2 border-gray-300" />
            <div className="flex items-center space-x-2">
              <img src="/dpiit.png" alt="DPIIT" className="h-8 pr-4 border-r-2 border-gray-300" />
              <img src="/azadiamritmahotsav.png" alt="Azadi ka Amrit Mahotsav" className="h-8" />
            </div>
          </div>

          {/* Search Bar and Language Selection */}
          <div className="flex items-center space-x-4">
            <select className="border border-orange-500 text-white bg-orange-500 cursor-pointer rounded-md px-2 py-1">
              <option value="ENGLISH">ENGLISH</option>
              <option value="Gujrati">ગુજરાતી</option>
              <option value="Hindi">हिन्दी</option>
            </select>
            <div className="relative rounded-md">
              <input
                type="text"
                placeholder="Search here"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-md">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Right Side: Login and Register */}
          <div className="flex items-center space-x-4 mx-16">
            <Link href="/login" className="text-orange-500 text-sm font-bold hover:text-orange-700">Login</Link>
            <Link href="/register" className="text-orange-500 text-sm font-bold hover:text-orange-700">Register</Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white py-3">
        <div className="container mx-auto flex justify-center space-x-6">
          <Link href="#" className="text-gray-600 hover:text-orange-500">About</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Recognition</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Funding</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Schemes & Policies</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Market Access</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Marquee Initiatives</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Resources</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Get Featured</Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500">Network</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
