"use client";
import React from "react";

const cardData = [
  {
    title: "Personal Loan",
    description: "Get quick access to funds for your personal needs.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/eligibility.svg?raw=1",
  },
  {
    title: "Home Loan",
    description: "Make your dream home a reality with our flexible home loans.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/recognised.svg?raw=1",
  },
  {
    title: "Auto Loan",
    description: "Drive your dream car with our competitive auto loans.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/notification.svg?raw=1",
  },
  {
    title: "Business Loan",
    description: "Grow your business with our tailored financial solutions.",
    image: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/certificate.svg?raw=1",
  },
];

const Cards = () => {
  const handleCheckEligibility = (title) => {
    console.log(`Checking eligibility for ${title}`);
    // Add your logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 font-sans leading-relaxed">
                {card.description}
              </p>
              <button
                onClick={() => handleCheckEligibility(card.title)}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300"
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
