import React from 'react';
import MacBookAir1 from "/public/images/MacBookAir1.png"
import Image from 'next/image';

const AnalyticsDashboardSection = () => {
  return (
    <div className="bg-gradient-to-b z-10 w-11/12 mx-auto rounded-3xl from-[#394B5E1F] to-[#2A313D24] font-roboto text-[#DACFD3] my-16 md:py-32 py-16 md:px-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="md:text-5xl text-3xl font-semibold mb-6">Revenue and Analytics Dashboard</h2>
          <div className="mb-8">
            <h3 className="text-xl text-white font-semibold mb-2">Real-Time Insights</h3>
            <p className="text-gray-300">
              An embedded interactive calendar allowing you to view and subscribe to upcoming events and programs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold  mb-2">Flexible Revenue Options</h3>
            <p className="text-gray-300">
              Filter events by categories like Services, Group, Outreach, Study, and more.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 md:-mr-96  overflow-x-hidden">
          <Image
            src={MacBookAir1} 
            alt="Revenue and Analytics Dashboard Preview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboardSection;
