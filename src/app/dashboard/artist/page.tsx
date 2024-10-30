import React from 'react';

const AddMusicForm = () => {
  return (
    <div className="w-11/12 m-auto flex items-center justify-center  text-[#A4A4A4]">
      <div>
        <h2 className="text-3xl font-bold mb-6">Add Music</h2>
        <form className="space-y-6 mb-8">
          <div>
            <label className="block text-base font-medium mb-1" htmlFor="title">
              Song Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Song Title"
              className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
              required
            />
          </div>

          <div>
            <label className="block text-base font-medium mb-1" htmlFor="description">
              Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description of music"
              className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="trackNumber">
                Track Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="trackNumber"
                placeholder="Enter Track Number"
                className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="releaseDate">
                Release Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="releaseDate"
                placeholder="DD-MM-YYYY"
                className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="purchasePrice">
                Purchase Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="purchasePrice"
                placeholder="Enter Purchase Price"
                className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="royalty">
                Royalty <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="royalty"
                placeholder="Enter Royalty"
                className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="pricePerStream">
                Price per Stream <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="pricePerStream"
                placeholder="Enter Price per Stream"
                className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                required
              />
            </div>
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="albumCover">
                Album Cover Art <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="albumCover"
                  className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
                  required
                />
                <button
                  type="button"
                  className="ml-2 px-4 py-2 bg-[#DC143C] rounded-md text-white font-medium hover:bg-pink-600"
                >
                  Select File
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" w-1/3 bg-[#DC143C] hover:bg-pink-600 text-white font-semibold py-2 rounded-full"
          >
            Upload Music
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMusicForm;
