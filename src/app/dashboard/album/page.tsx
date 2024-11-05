"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Rectangle1 from "/public/images/Rectangle1.png";
import Rectangle2 from "/public/images/Rectangle2.png";
import Rectangle3 from "/public/images/Rectangle3.png";
import Rectangle4 from "/public/images/Rectangle4.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart } from "lucide-react";

const AlbumPage = () => {
  const router = useRouter();

  const handleClick = (albumId: string) => {
    router.push(`/dashboard/album/${albumId}`);
  };

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
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
		<div className=" font-roboto">
			<div className="bg-gradient-to-r from-[#4B0B3E] to-[#274749] p-8 rounded-lg text-white flex items-center justify-between">
				<div className="flex-1">
					<h1 className="text-4xl font-bold">Album Name</h1>

					<div className=" grid grid-flow-col gap-2 w-2/5 mt-3">
						<span className="text-xs">1,020 Fans</span>
						<span className="text-xs">1,020 Albums</span>
            <span className="flex gap-2 text-xs "><Heart size={14}/> 1,020</span>
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

			<div className="mt-8">
				<div className="flex justify-between items-center">
					<h2 className="text-2xl font-bold">My Albums</h2>
					<Link
						href="/dashboard/addalbum"
						className="text-sm text-white rounded-full px-3 py-2 bg-[#DC143C] font-medium"
					>
						Add Album
					</Link>
				</div>

				<div className="text-white  font-roboto pt-6">
					<Slider {...settings}>
						{songs.map((item, index) => (
							<div key={index} className="p-2">
								<div onClick={() => handleClick(item.title)} className="flex flex-col rounded-lg shadow-lg items-center overflow-hidden">
									<div className="rounded-full cursor-pointer hover:bg-[#0E0B0E]">
										<Image
											src={item.coverImage}
											alt={item.title}
											width={180}
											height={200}
											className="w-40 rounded-full  h-40 object-cover"
										/>
									</div>
									<div className="p-4 text-center">
										<h3 className="text-lg font-semibold">{item.title}</h3>
										<p className="text-sm text-gray-400">{item.artist}</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default AlbumPage;
