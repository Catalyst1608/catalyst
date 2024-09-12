import React from "react";
import Cards from "../components/cards";
import Flowchart from "../components/flowchart";
const Page = () => {
  return (
    <div className=" px-4 py-8 text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-800">
        DPIIT Recognition
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto mb-8 leading-relaxed">
        Under the Startup India initiative, eligible companies can get
        recognized as Startups by DPIIT, in order to access a host of tax
        benefits, easier compliance, IPR fast-tracking & more. Learn more about
        eligibility & benefits below.
      </p>
      <div className="flex justify-between gap-5">
        <Cards />
        <Flowchart />
      </div>
    </div>
  );
};

export default Page;
