"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const options = [
  {
    label: "User",
    description: "An individual looking to explore various resources or services available.",
    color: "bg-blue-100",
    textColor: "text-blue-600",
    value: "user"
  },
  {
    label: "Startup",
    description: "A newly established business or entrepreneur looking for resources and support.",
    color: "bg-pink-100",
    textColor: "text-pink-600",
    value: "startup"
  },
  {
    label: "IPR",
    description: "Focus on protecting and managing intellectual property rights for innovations.",
    color: "bg-teal-100",
    textColor: "text-teal-600",
    value: "ipr"
  },
  {
    label: "Researcher",
    description: "A person or institution involved in conducting research and seeking innovation opportunities.",
    color: "bg-purple-100",
    textColor: "text-purple-600",
    value: "researcher"
  },
  {
    label: "Innovation",
    description: "Focus on creating and implementing new ideas, methods, or products.",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
    value: "innovation"
  }
];

const UserType = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  const handleNextStep = () => {
    if (selectedOption === 'startup') {
      router.push('/startupform');
    } else {
      alert(`You selected: ${selectedOption}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">WELCOME!</h2>
        <p className="text-center text-gray-500 mb-8">SELECT YOUR COUNTRY</p>
        <select className="w-full p-2 mb-6 border rounded-md focus:outline-none">
          <option>India</option>
        </select>
        <p className="text-center mb-4">
          TELL US WHO YOU ARE? <span className="font-semibold">SELECT ONE OF THESE</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md cursor-pointer ${option.color} ${selectedOption === option.value ? 'ring-4 ring-blue-400' : ''}`}
              onClick={() => handleSelect(option.value)}
            >
              <h3 className={`text-lg font-semibold ${option.textColor}`}>{option.label}</h3>
              <p className="text-gray-600">{option.description}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-8 w-full py-2 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-md"
          onClick={handleNextStep}
          disabled={!selectedOption}
        >
          NEXT STEP
        </button>
      </div>
    </div>
  );
};

export default UserType;