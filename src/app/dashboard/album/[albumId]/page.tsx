"use client"
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import Image from 'next/image';
import { Play } from 'lucide-react';

const AlbumId = () => {
    const [show, setShow]= useState(false);
    const params = useParams();
    const albumId = params.albumId;


    const songs = [
		{
			id: 1,
			title: "Relax and Unwind",
			artist: "Artist Name",
			streams: 4000,
			listeners: 2000,
			saves: 500,
			released: 2024,
			coverImage: Rectangle1,
		},
		{
			id: 2,
			title: "Chill Vibes",
			artist: "Artist Name",
			streams: 3000,
			listeners: 1500,
			saves: 300,
			released: 2023,
			coverImage: Rectangle2,
		},
		{
			id: 3,
			title: "Evening Jazz",
			artist: "Artist Name",
			streams: 5000,
			listeners: 2500,
			saves: 800,
			released: 2024,
			coverImage: Rectangle3,
		},
		{
			id: 4,
			title: "Morning Light",
			artist: "Artist Name",
			streams: 4500,
			listeners: 2200,
			saves: 600,
			released: 2024,
			coverImage: Rectangle4,
		},
	];


  return (
    <>
       <div className=" font-roboto">
      <div className="bg-gradient-to-r from-[#4B0B3E] to-[#274749] p-8 rounded-lg text-white flex items-center justify-between">
        <div className="flex-1 pt-5">
          <h1 className="text-4xl font-bold">Album Name</h1>

		  <div className=' grid grid-flow-col gap-2 w-1/2 mt-3'>
          <span className="text-xs">Artist Name</span>

		  </div>
        </div>
        <div className="flex-shrink-0">
          <img
            src="path/to/artist-image.jpg" 
            alt="Artist"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>



      <div className="mt-4 overflow-x-auto">
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
                <tr key={song.id} className="hover:bg-[#0E0B0E]"  onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                  <td className="p-3">{show ? <Play size={15}/>: index + 1 }</td>
                  <td className="p-3 flex items-center">
                    <Image
                      src={song.coverImage}
                      alt={`${song.title} Cover`}
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <p className="font-medium text-sm">{song.title}</p>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                  </td>
                  <td className="p-3 text-sm font-medium text-center">{song.streams.toLocaleString()}</td>
                  <td className="p-3 text-sm font-medium text-center">{song.listeners.toLocaleString()}</td>
                  <td className="p-3 text-sm font-medium text-center">{song.saves.toLocaleString()}</td>
                  <td className="p-3 text-sm font-medium text-center">{song.released}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AlbumId;