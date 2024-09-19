import React from "react";
import Cards from "../components/cards";
import Flowchart from "../components/flowchart";

const Page = () => {
  return (
    <div className="mx-10 lg:mx-28 py-24 text-center">
      <h1 className="text-2xl md:text-4xl font-semibold font-Montserrat mb-4 text-gray-800">
        DPIIT Recognition
      </h1>
      <p className="text-base text-gray-600 max-w-5xl mx-auto mb-8 leading-relaxed">
        Under the initiative to streamline research, innovation, and start-up
        growth in Gujarat, DPIIT recognition offers eligible companies the
        opportunity to access a range of benefits. These include easier
        compliance, fast-tracked intellectual property rights (IPR) processes,
        tax incentives, and mentorship for startups. Learn more about the
        process and benefits below.
      </p>
      <div className="flex justify-between gap-5">
        <Cards />
        <Flowchart />
      </div>
    </div>
  );
};

export default Page;
