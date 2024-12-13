import React from "react";
import Rectangle4 from "/public/images/Rectangle4.png";

const NftHolderCard = () => {
  return (
    <div className=" mx-auto bg-[#0E0B0E] mb-7 mt-4 text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:space-x-6">
      {/* Left Section: Image and Details */}
      <div className="flex-1">
        {/* NFT Image */}
        <div className="mb-6 rounded-lg w-full">
          <img
            src="/images/Rectangle4.png" 
            alt="Happy Day"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* NFT Details */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">Happy Day</h2>
            <p className="text-gray-400 text-sm">1 Item</p>
          </div>
          <p className="text-gray-300 text-sm">
            Vestibulum faucibus eget est eget pretium. Donec commodo convallis
            eget suscipit orci. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-300 text-sm">
            <div>
              <p className="text-gray-500">Current Holder</p>
              <p>Marcus of Causal now</p>
            </div>
            <div>
              <p className="text-gray-500">Artist</p>
              <p>Travis Bloom</p>
            </div>
            <div>
              <p className="text-gray-500">Contract Address</p>
              <p>0x172...F9</p>
            </div>
            <div>
              <p className="text-gray-500">Asset ID</p>
              <p>200</p>
            </div>
            <div>
              <p className="text-gray-500">Creator Fee</p>
              <p>1.5%</p>
            </div>
            <div>
              <p className="text-gray-500">Royalties</p>
              <p>1.75%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Price, Actions, and Bids */}
      <div className="md:w-96 w-full md:mt-0 mt-8 flex flex-col space-y-6">
        {/* Price Details */}
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500">Highest Bid</p>
            <p className="text-xl font-bold">0.27 ETH</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Floor Price</p>
            <p className="text-xl font-bold">0.25 ETH</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="bg-[#B81A3C] hover:bg-[#d81e46e5] px-4 py-3 rounded-lg text-sm">
            Accept Bid
          </button>
          <button className="bg-transparent hover:bg-[#d81e46e5] border border-[#B81A3C] px-4 py-3 rounded-lg text-sm">
            Put on Sale
          </button>
        </div>

        {/* Bidding History */}
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-4">Bidding History</h3>
          <table className="w-full text-gray-300 text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left pb-2">Bidders</th>
                <th className="text-left pb-2">Price</th>
                <th className="text-left pb-2">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2">Meason Smith</td>
                <td className="py-2">0.27 ETH</td>
                <td className="py-2">6/15/2021, 3:20 AM</td>
              </tr>
              <tr>
                <td className="py-2">John Doe</td>
                <td className="py-2">0.25 ETH</td>
                <td className="py-2">6/13/2021, 2:50 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NftHolderCard;
