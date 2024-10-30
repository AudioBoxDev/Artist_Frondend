import React from "react";

const MusicScene = () => {
  const artists = [
    { name: "John McGuire", image: "path/to/john-mcguire.jpg" },
    { name: "Taya Bloom", image: "path/to/taya-bloom.jpg" },
    { name: "Merola Brian", image: "path/to/merola-brian.jpg" },
    { name: "Saha Bloomer", image: "path/to/saha-bloomer.jpg" },
  ];

  return (
    <div className=" text-white w-11/12 m-auto py-16 md:px-8 px-1">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Explore the Music Scene</h1>
        <p className="text-gray-400 md:w-1/2 w-full m-auto">
          Browse our extensive catalog, search for specific genres or moods, and follow your
          favorite creators to stay updated on their latest releases.
        </p>
      </div>

      {/* Artist Profile Section */}
      <div className="grid md:grid-cols-4 grid-cols-1 justify-center gap-8">
        {artists.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular Image with Border */}
            <div className="rounded-full border-4 border-pink-500 p-1">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            {/* Artist Name */}
            <p className="mt-4 text-center">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicScene;
