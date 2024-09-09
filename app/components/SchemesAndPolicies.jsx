"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icon1 from '../../public/bell.png';
import icon2 from "../../public/flow-chart.png";
import icon3 from "../../public/india.png";

const cardData = [
  {
    title: "Notifications",
    description: "Stay on top of all policy and regulatory updates that are important for your next startup move.",
    color: "bg-green-500",
    buttonLink: "https://www.startupindia.gov.in/content/sih/en/startupgov/regulatory_updates.html",
    image: icon1,
    imageBgColor: "",
  },
  {
    title: "Central Government Schemes",
    description: "An aggregation of all Startup-focused schemes and policies by the Central Government of India.",
    color: "bg-blue-900",
    buttonLink: "https://www.startupindia.gov.in/content/sih/en/government-schemes.html",
    image: icon2,
    imageBgColor: "",
  },
  {
    title: "Know Your State/UT",
    description: "Know about the States’ and UTs’ startup policies for Indian startups.",
    color: "bg-orange-500",
    buttonLink: "https://www.startupindia.gov.in/content/sih/en/state-startup-policies.html",
    image: icon3,
    imageBgColor: "",
  },
];

const SchemesPolicies = () => {
  const router = useRouter();

  const handleNavigation = (link) => {
    router.push(link);
  };

  return (
    <div className="flex flex-col items-center py-10">
      <h2 className="text-3xl font-semibold mb-4 font-Montserrat text-gray-800">Schemes & Policies</h2>
      <p className="text-center font-Montserrat text-gray-500 mb-8 mx-6 max-w-2xl ">
        An insight into the schemes and policies landscape of the Indian Startup Ecosystem,
        including steps taken by Startup India to ease the regulatory burden.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 lg:mx-20 lg:gap-12">
        {cardData.map((card) => (
          <div
            className={`p-6 rounded-3xl shadow-md ${card.color} text-white flex flex-col justify-between`}
          >
            
            <div className="relative">
              <div className={`px-4 rounded-xl ${card.imageBgColor} overflow-hidden `}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={50}
                  height={50}
                />
              </div>
              <div className="p-2 lg:p-4">
                <h3 className="text-2xl font-semibold my-2">{card.title}</h3>
                <p className="my-4">{card.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleNavigation(card.buttonLink)}
              className="bg-white text-black px-6 py-2  rounded-full hover:bg-gray-200 transition duration-200"
            >
              Know more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemesPolicies;
