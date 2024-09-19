"use client";

import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const navigate = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add name attributes to input fields to access them here
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Navigating to the dashboard with the email and password in the query string
    navigate.push(`/dashboard?email=${email}&password=${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500">
      <div className="bg-white p-8 my-8 rounded-lg shadow-lg w-full max-w-4xl flex">
        <div className="w-1/2 pr-8">
          <Link href="/" className="text-sm text-blue-500 mb-4 block hover:underline">
            &larr; Back to Home
          </Link>
          <h2 className="text-2xl font-semibold mb-6">Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email id
         x     </label>
              <input
                name="email"
                required
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                name="password"
                required
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-md">
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Don't have an account?
            <Link href="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>

        <div className="w-1/2 pl-8 border-l">
          <div className="flex items-center justify-center">
            <img src="/startupgujrat.png" alt="Startup India" className="h-32 mb-6" />
          </div>
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500">
              Login with your social accounts
            </p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-red-500 p-2 rounded-full text-white">
                <i className="fab fa-google"></i> G+
              </button>
              <button className="bg-blue-500 p-2 rounded-full text-white">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
              <button className="bg-black p-2 rounded-full text-white">
                <i className="fab fa-twitter"></i> X
              </button>
              <button className="bg-blue-700 p-2 rounded-full text-white">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Industries Commisionerate, <br />
            Government of Gujrat <br />
            <span className="mt-2">INVEST GUJRAT</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
