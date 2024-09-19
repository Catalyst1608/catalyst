"use client";

import React, { useState } from "react";

const KeyInitiatives = () => {
  const items = [
    "GUJARAT INNOVATION & IPR INITIATIVE",
    "EXPERT GUIDANCE COMMUNITY",
    "GOVERNMENT & CORPORATE COLLABORATION",
    "IPR REGISTRATION HUB",
    "RESEARCH & INNOVATION DATABASE",
    "STARTUP SUPPORT FOR IP DEVELOPMENT",
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const renderContent = (selectedItem) => {
    switch (selectedItem) {
      case "GUJARAT INNOVATION & IPR INITIATIVE":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://images.vexels.com/content/148723/preview/gujarat-state-map-4d55d2.png"
              alt="Gujarat Innovation & IPR Initiative"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              Gujarat is leading the way in fostering innovation and intellectual property management. This initiative focuses on supporting startups and innovators in Gujarat to protect and commercialize their intellectual property, which is vital for scaling businesses and ensuring compliance with national standards.
            </p>
          </div>
        );
      case "IPR REGISTRATION HUB":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://cdn-icons-png.flaticon.com/512/6521/6521996.png"
              alt="IPR Registration Hub"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The platform simplifies the IPR registration process, offering streamlined tools for patent, trademark, and copyright registration. This hub serves as a one-stop solution for newcomers and seasoned professionals alike, guiding users through each step of protecting their creations.
            </p>
          </div>
        );
      case "EXPERT GUIDANCE COMMUNITY":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://static.thenounproject.com/png/1071933-200.png"
              alt="Expert Guidance Community"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              Our community connects newcomers with experienced experts, providing mentorship, guidance, and advice. 
              Whether you are filing your first patent or navigating complex IP laws, mentors are available to support you, fostering growth and learning across the IPR ecosystem.
            </p>
          </div>
        );
      case "GOVERNMENT & CORPORATE COLLABORATION":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://images.vexels.com/media/users/3/158039/isolated/preview/05331045aee2a8e5142775d30365b88e-handshake-silhouette-icon.png"
              alt="Government & Corporate Collaboration"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              This initiative encourages collaboration between government bodies, including the Ministry of Gujarat, and corporate entities. Innovators gain access to legal frameworks, funding, and public-sector projects, creating a transparent and supportive environment for IP development.
            </p>
          </div>
        );
      case "RESEARCH & INNOVATION DATABASE":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://cdn-icons-png.flaticon.com/512/9243/9243391.png"
              alt="Research & IPR Database"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
            This database provides access to extensive research and innovation data. It helps startups and researchers stay informed about the latest trends, patents, and market analysis, crucial for strategic decision-making.
            </p>
          </div>
        );
      case "STARTUP SUPPORT FOR IP DEVELOPMENT":
        return (
          <div>
            <img
              className="pl-3 m-3 h-28"
              src="https://static.vecteezy.com/system/resources/thumbnails/014/435/741/small_2x/adjustment-and-optimization-for-business-improvement-png.png"
              alt="Startup Support for IP Development"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              This initiative is dedicated to startups, providing resources for intellectual property development from concept to commercialization. Entrepreneurs can access funding, legal support, and tools for protecting and leveraging their IP to foster business growth.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              Select an initiative to view more details.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-300">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Key Initiatives
        </h1>
        <p className="text-lg text-gray-600 mt-3 pl-9 pr-9">
          Our platform addresses key areas of IPR management, research, and support, while fostering community growth and collaboration between startups, experts, and government bodies, especially in the state of Gujarat.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-300">
          <ul className="space-y-2">
            {items.map((item) => (
              <li
                key={item}
                className={`cursor-pointer py-2 px-4 text-gray-600 hover:text-black hover:bg-gray-100 ${
                  selectedItem === item
                    ? "font-semibold text-black border-b-4 border-orange-600 bg-gray-100"
                    : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-3/4 p-6 bg-white">
          {renderContent(selectedItem)}
        </div>
      </div>
    </div>
  );
};

export default KeyInitiatives;
