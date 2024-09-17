"use client";
import React from "react";

const cardData = [
  {
    title: "Research Projects",
    description: "Access funding and resources to accelerate your research projects and innovations.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/eligibility.svg?raw=1",
  },
  {
    title: "IPR Management",
    description: "Manage and fast-track intellectual property rights, including patents and trademarks.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/recognised.svg?raw=1",
  },
  {
    title: "Innovation Support",
    description: "Leverage resources, mentorship, and tools for innovation development and commercialization.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/notification.svg?raw=1",
  },
  {
    title: "Start-up Growth",
    description: "Connect with investors and policy makers to grow your start-up and expand your network.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/certificate.svg?raw=1",
  },
];

const Cards = () => {
  const handleCheckEligibility = (title) => {
    console.log(`Checking eligibility for ${title}`);
    // Add your logic here
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-md space-y-10 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden cursor-pointer border border-gray-200 w-full"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-base font-bold mb-2 text-gray-800 font-serif tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 font-sans leading-relaxed">
                {card.description}
              </p>
              <button
                onClick={() => handleCheckEligibility(card.title)}
                className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-500 hover:to-green-400 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
