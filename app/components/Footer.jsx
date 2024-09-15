import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#292929] text-white pt-16">
      <div className="container mx-auto px-8 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col justify-between">
            <div>
              <img src="/startingujaratdark.png" alt="Startup India Logo" className="h-16 mb-6" />
            </div>
            <div>
              <p className="mb-2">Toll Free Number: 1800 233 0616</p>
              <p>Working Hrs: 10:00 am - 6:10 pm</p>
            </div>
          </div>
          <div className="flex flex-col justify-between lg:items-center">
            <div className="flex items-center mb-6 font-semibold space-x-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 px-4 py-2 focus:outline-none flex-grow"
              />
              <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300">
                Subscribe
              </button>
            </div>
            <ul className="space-y-2 mt-10">
              <li><Link href="">Terms of Use</Link></li>
              <li><Link href="">Use Startin Gujarat Logo</Link></li>
              <li><Link href="">Request For Proposal</Link></li>
              <li><Link href="">Blogs</Link></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between lg:items-center">
            <div className="text-base mb-6">
              Last Updated: 17-SEP-2024 | 03:33 PM
            </div>
            <ul className="space-y-2">
              <li><Link href="">Disclaimer</Link></li>
              <li><Link href="">Privacy Policy</Link></li>
              <li><Link href="">Contact Us</Link></li>
              <li><Link href="">Site map</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t text-center py-6">
        <p>1,09,81,843 users have visited the Startin Gujarat portal since inception.</p>
      </div>
      
      <div className="bg-black py-4">
        <div className="container mx-auto px-8 lg:px-32 flex flex-col md:flex-row justify-between items-center">
          <img
            src="/startupgujratcommisionerate.png"
            alt="Government of India Logo"
            className="h-16 mb-4 md:mb-0"
          />
          <p>&copy; 2024 Startin Gujarat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;