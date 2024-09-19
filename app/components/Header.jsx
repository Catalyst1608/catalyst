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
            <img src="/satyamev_jayate.png" alt="Government of Gujarat" className="h-8 rounded-full" />
            <div className="flex flex-row space-y-1 space-x-4">
              <p className="text-xs pr-4 border-gray-400 border-r-2">ગુજરાત સરકાર <br /> GOVERNMENT OF GUJARAT</p>
              <img src="/startupgujratcommisionerate.png" alt="Industries Commissionerate of Gujarat" className="h-8 border-gray-400 border-r-2" />
            </div>
          </div>
          <div className="flex items-center space-x-4 mx-16">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <span className="text-sm"><span className='font-bold'>Our Toll Free Number</span>: <span className='text-xs'>1800 233 0616</span> (10:30 AM to 06:10 PM)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4 mx-16">
            <img src="/startupgujrat.png" alt="#startupindia" className="h-10 border-r-2 border-gray-300" />
            <div className="flex items-center space-x-2">
              <img src="/dpiit.png" alt="DPIIT" className="h-8 pr-4 border-r-2 border-gray-300" />
              <img src="/azadiamritmahotsav.png" alt="Azadi ka Amrit Mahotsav" className="h-8" />
            </div>
          </div>

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

          <div className="flex items-center space-x-4 mx-16">
            <Link href="/login" className="text-orange-500 text-sm font-bold hover:text-orange-700">Login</Link>
            <Link href="/register" className="text-orange-500 text-sm font-bold hover:text-orange-700">Register</Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white py-3">
        <div className="container mx-auto flex justify-center space-x-14">
          <DropdownLink label="About">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Overview</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Mission & Vision</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">History</a>
          </DropdownLink>
          <DropdownLink label="Recognition">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Awards & Achievements</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Success Stories</a>
          </DropdownLink>
          <DropdownLink label="Funding">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Available Grants</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Application Process</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Success Stories</a>
          </DropdownLink>
          <DropdownLink label="Schemes & Policies">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Current Schemes</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Policy Updates</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Guidelines</a>
          </DropdownLink>
          <DropdownLink label="Market Access">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Export Opportunities</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Domestic Market</a>
          </DropdownLink>
          <DropdownLink label="Marquee Initiatives">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Major Projects</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Partnerships</a>
          </DropdownLink>
          <DropdownLink label="Resources">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Research Publications</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Data & Reports</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Training Materials</a>
          </DropdownLink>
          <DropdownLink label="Get Featured">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Submit Your Story</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Success Stories</a>
          </DropdownLink>
          <DropdownLink label="Network">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Networking Events</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">Partner Organizations</a>
          </DropdownLink>
        </div>
      </div>
    </div>
  );
};

const DropdownLink = ({ label, children }) => {
  return (
    <div className="relative group">
      <button className="text-gray-600 hover:text-orange-500">{label}</button>
      <div className="absolute left-0 mt-2 hidden bg-white shadow-lg group-hover:block z-50">
        {children}
      </div>
    </div>
  );
};

export default Header;
