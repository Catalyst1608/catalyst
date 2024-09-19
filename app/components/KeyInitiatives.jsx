"use client";

import React, { useState } from "react";

const KeyInitiatives = () => {
  const items = [
    "STATES STARTUP RANKING",
    "NATIONAL STARTUP AWARDS",
    "SEED FUND SCHEME",
    "MAARG",
    "SCO",
    "STARTUP INDIA INVESTOR CONNECT",
  ];

  const [selectedItem, setSelectedItem] = useState(items[0]);

  const renderContent = (selectedItem) => {
    switch (selectedItem) {
      case "STATES STARTUP RANKING":
        return (
          <div>
            <img
              className="pl-3 m-3  h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/investor-connect.svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The States’ Startup Ranking is an annual capacity building
              exercise which has been developed with the objective to build a
              conducive startup ecosystem across the country, through sustained
              efforts of States and Union Territories.{" "}
            </p>
          </div>
        );
      case "NATIONAL STARTUP AWARDS":
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/award.svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The National Startup Award is a marquee initiative by Startup
              India, DPIIT, in recognizing exceptional startups across India,
              creating economic impact and larger societal impact. The National
              Startup Awards have been pivotal in providing support to some of
              the most well-known startups in the Indian ecosystem currently,
              including unicorns, soonicorns and other high impact startups. The
              winners and finalists of the awards are provided extensive support
              in their growth journey. The National Startup Awards have become a
              key recognition of the impactful work being done by startups in
              the Indian startup ecosystem.
            </p>
          </div>
        );
      case "SEED FUND SCHEME":
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/scheme.svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The Startup India Seed Fund Scheme (SISFS) aims to provide
              financial assistance to startups for proof of concept, prototype
              development, product trials, market entry & commercialization.{" "}
            </p>
          </div>
        );
      case "MAARG":
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/maarg-new(1).svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The MAARG mentorship platform aims at facilitating intelligent
              matchmaking between mentors & startups across varied sectors at
              scale.{" "}
            </p>
          </div>
        );
      case "SCO":
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/SEO.png"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The Shanghai Cooperation Organisation (SCO), founded in 2001,
              includes over 25 nations. To promote innovation, the SCO created a
              Special Working Group for Startups, chaired permanently by India.
              India&#39;s DPIIT leads this group, organizing annual meetings and
              the SCO Startup Forum to support the startup ecosystem in member
              states.
            </p>
          </div>
        );
      case "STARTUP INDIA INVESTOR CONNECT":
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/investor-connect.svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              Startup India Investor Connect was launched in the sixth meeting
              of National Startup Advisory Council (NSAC), convened on 11th
              March 2023 to serve as a dedicated platform that connects startups
              to investors, and promote entrepreneurship and accelerate
              engagements across diverse sectors, functions, stages,
              geographies, and backgrounds, which is also the need of the
              ecosystem.{" "}
            </p>
          </div>
        );
      default:
        return (
          <div>
            <img
              className="pl-3 m-3 h-20"
              src="https://www.startupindia.gov.in/content/dam/invest-india/investor-connect.svg"
              alt="States Startup Ranking"
            />
            <h2 className="text-2xl pl-6 font-bold text-orange-600 mb-4">
              {selectedItem}
            </h2>
            <p className="text-gray-600 leading-relaxed pl-6 pr-6">
              The States’ Startup Ranking is an annual capacity building
              exercise which has been developed with the objective to build a
              conducive startup ecosystem across the country, through sustained
              efforts of States and Union Territories.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className=" p-6 border-b border-gray-300">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Key Initiatives
        </h1>
        <p className=" text-lg text-gray-600 mt-3 pl-9 pr-9">
          The Department for Promotion of Industry and Internal Trade (DPIIT)
          through the Startup India initiative has executed various projects &
          undertaken recurring models to propel the Indian Startup Ecosystem.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4  p-4 border-b md:border-b-0 md:border-r border-gray-300">
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
