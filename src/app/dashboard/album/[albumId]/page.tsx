"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Album, Play } from "lucide-react";
import MusicPlayer, { Song } from "../../../../components/MusicPlayer";
import Rectangle1 from "/public/images/Rectangle1.png";

const AlbumId = () => {
  const songs: Song[] = [
    {
      id: "1",
      title: "Song 1",
      artist: "Artist 1",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
      coverImage: Rectangle1,
	  streams: 1000000,
      listeners: 500000,
      saves: 250000,
      released: "2024-01-01"
    },
	{
		id: "2",
		title: "Song 2",
		artist: "Artist ",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		coverImage: Rectangle1,
		streams: 1000000,
		listeners: 500000,
		saves: 250000,
		released: "2024-01-01"
	  },
	  {
		id: "3",
		title: "Song 3",
		artist: "Artist ",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
		coverImage: Rectangle1,
		streams: 1000000,
		listeners: 500000,
		saves: 250000,
		released: "2024-01-01"
	  },
	  {
		id: "4",
		title: "Song 4",
		artist: "Artist ",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
		coverImage: Rectangle1,
		streams: 1000000,
		listeners: 500000,
		saves: 250000,
		released: "2024-01-01"
	  },
	  {
		id: "5",
		title: "Song 5",
		artist: "Artist ",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
		coverImage: Rectangle1,
		streams: 1000000,
		listeners: 500000,
		saves: 250000,
		released: "2024-01-01"
	  },
    
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const playSong = (index: number) => {
    if (index === currentSongIndex && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  const renderSongNumber = (index: number) => {
    if (hoveredRow === index) {
      return <Play size={15} className="text-white" />;
    }
    if (currentSongIndex === index && isPlaying) {
      return <PlayingIndicator />;
    }
    return index + 1;
  };

  return (
    <div className="font-roboto">
      <div className="bg-gradient-to-r from-[#4B0B3E] to-[#274749] p-8 rounded-lg text-white flex items-center justify-between">
        <div className="flex-1 pt-5">
          <h1 className="md:text-4xl text-xl font-bold">Album Name</h1>
          <div className="grid grid-flow-col gap-2 w-1/2 mt-3">
            <span className="text-xs">Artist Name</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/api/placeholder/128/128"
            alt="Artist"
            className="md:w-32 w-24 h-24 md:h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      <div className="mt-4 overflow-x-auto mb-40">
	  <table className="min-w-full text-[#666C6C] border-separate border-spacing-y-2">
          <thead>
            <tr className="text-sm font-medium">
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Songs</th>
              <th className="p-3 text-center">Streams</th>
              <th className="p-3 text-center">Listeners</th>
              <th className="p-3 text-center">Saves</th>
              <th className="p-3 text-center">Released</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                className={`hover:bg-[#0E0B0E] cursor-pointer transition-colors ${
                  currentSongIndex === index ? 'bg-[#0E0B0E] bg-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                onClick={() => playSong(index)}
              >
                <td className="p-3 w-10">
                  <div className="flex items-center justify-center w-6">
                    {renderSongNumber(index)}
                  </div>
                </td>
                <td className="p-3 flex items-center">
                  <div className="relative">
                    <Image
                      src={song.coverImage}
                      alt={`${song.title} Cover`}
                      width={48}
                      height={48}
                      className={`rounded-md mr-4 ${
                        currentSongIndex === index && isPlaying ? 'animate-pulse' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <p className={`font-medium text-sm ${
                      currentSongIndex === index ? 'text-red-500' : ''
                    }`}>
                      {song.title}
                    </p>
                    <p className="text-sm text-gray-400">{song.artist}</p>
                  </div>
                </td>
                <td className="p-3 text-sm font-medium text-center">
                  {song.streams.toLocaleString()}
                </td>
                <td className="p-3 text-sm font-medium text-center">
                  {song.listeners.toLocaleString()}
                </td>
                <td className="p-3 text-sm font-medium text-center">
                  {song.saves.toLocaleString()}
                </td>
                <td className="p-3 text-sm font-medium text-center">
                  {song.released}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <MusicPlayer
          songs={songs}
          currentSongIndex={currentSongIndex}
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onNextSong={handleNextSong}
          onPreviousSong={handlePreviousSong}
          onSongEnd={handleNextSong}
        />
      </div>
    </div>
  );
};

export default AlbumId;



const PlayingIndicator = () => (
	<div className="flex gap-[3px] items-end h-3">
	  <span className="w-[3px] h-full bg-red-500 animate-music-bar-1"></span>
	  <span className="w-[3px] h-[60%] bg-red-500 animate-music-bar-2"></span>
	  <span className="w-[3px] h-[80%] bg-red-500 animate-music-bar-3"></span>
	</div>
  );