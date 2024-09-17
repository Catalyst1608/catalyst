"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icon2 from '../../public/idea.png';
import icon1 from "../../public/flow-chart.png";
import icon3 from "../../public/inno.png";
import icon4 from "../../public/research.png";

const cardData = [
  {
    title: "Gujarat Government Schemes",
    description: "An aggregation of all Startup-focused schemes and policies by the Central Government of India.",
    color: "bg-green-500",
    buttonLink: "https://startup.gujarat.gov.in/policy/startup-policies",
    image: icon1,
    imageBgColor: "",
  },
  {
    title: "IPR Schemes",
    description: "Know about the vision, mission and policies for Intellectual Property Rights in Gujarat.",
    color: "bg-blue-900",
    buttonLink: "https://www.ssipgujarat.in/datafiles/Intellectual%20Property%20Guidelines_Academia_Gujarat.pdf",
    image: icon2,
    imageBgColor: "",
  },
  {
    title: "Science Technology and Innovation Policy of Gujarat",
    description: "Get information about respective policies.",
    color: "bg-orange-500",
    buttonLink: "https://gujcost.gujarat.gov.in/Home/STIPG",
    image: icon3,
    imageBgColor: "",
  },
  {
    title: "Research Projects",
    description: "Stay on top with knowing essentials for research projects in Gujarat.",
    color: "bg-green-500",
    buttonLink: "https://www.gujaratvidyapith.org/gvpresearchpolicy/GV-Research%20Policy.pdf",
    image: icon4,
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
        An insight into the schemes and policies landscape of the Gujarat Startin Ecosystem,
        including steps taken for Startup, IPR, Research Projects and Innovation,  to ease the regulatory burden.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-10 lg:mx-28 lg:gap-6">
        {cardData.map((card) => (
          <div
            className={`p-4 rounded-2xl shadow-md ${card.color} text-white flex flex-col justify-between`}
          >
            
            <div className="relative">
              <div className={`px-4 rounded-xl ${card.imageBgColor} overflow-hidden `}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={60}
                  height={40}
                />
              </div>
              <div className="p-2 lg:p-4">
                <h3 className="text-xl font-semibold my-2">{card.title}</h3>
                <p className="my-4 text-sm">{card.description}</p>
              </div>
            </div>
            <button
              onClick={() => handleNavigation(card.buttonLink)}
              className="bg-white text-black text-sm px-6 mx-2 py-2 w-1/2 rounded-full hover:bg-gray-200 transition duration-200"
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
