import React from 'react';
import MacBookAir from "/public/images/MacBookAir.png"
import Image from 'next/image';

const FanEngagementSection = () => {
  return (
    <div className="bg-gradient-to-b z-10 font-roboto w-11/12 mx-auto rounded-3xl from-[#394B5E1F] to-[#2A313D24] text-[#DACFD3] my-16 md:py-32 py-16 md:px-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <Image
            src={MacBookAir}
            alt="NFT Platform Preview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="md:text-5xl text-3xl font-semibold mb-4">Fan Engagement & NFT Exclusives</h2>
          <p className="text-gray-400 mb-8">
            Bring fans closer with exclusive releases and collectible music NFTs, making every interaction a unique part of your journey.
          </p>
          <button className="bg-traparent border border-[#52C9DE] hover:bg-teal-400 text-white font-bold py-3 px-9 rounded-full transition duration-300">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default FanEngagementSection;
