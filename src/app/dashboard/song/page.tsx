"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { abi, contractAddress } from "@/config/abi";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { dataTagSymbol } from "@tanstack/react-query";
import axios from "axios";

const Card = ({ title, by, image, eth, songid }: any) => {
	const route = useRouter();

	

	const songDetails = (id: any, title: any) => {
		// const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();

		route.push(
			`/dashboard/song/${id}`,
		);
	};
	return (
		<div
			onClick={() => songDetails(songid, title)}
			className="bg-[#0E0B0E]  cursor-pointer rounded-xl shadow-lg p-4 text-white"
		>
			<div className="overflow-hidden h-80 rounded-lg">
				<img
					src={image} // Replace with your image URL
					alt={title}
					className="w-full  object-cover object-center rounded-lg"
				/>
			</div>
			<div className="mt-4">
				<div>
					<h3 className="text-base font-semibold">{title}</h3>
				</div>
				<div className="flex justify-between items-center">
					<div>
						<p className="text-base text-[#68676E]">Price</p>
						<p className="text-sm text-white">{eth} ETH</p>
					</div>
					{/* <div>
						<p className="text-base text-[#68676E]">Highest bid</p>
						<p className="text-sm text-white">{by}</p>
					</div> */}
				</div>

				<div className="mt-4">
					<button className="bg-pink-600 w-full hover:bg-pink-700 text-white px-4 py-1 rounded-lg">
						Auction
					</button>
				</div>
			</div>
		</div>
	);
};

const CardGrid = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [songs, setSongsData] = useState<any[]>([]);
	const { address } = useAccount();

	const { data: songIds, isSuccess: issuccess }: any = useReadContract({
		address: contractAddress,
		abi: abi,
		functionName: "getArtistSongs",
		args: [address],
		account: address,
	});

	const { data, isSuccess: success }: any = useReadContracts({
		contracts:
			songIds?.map((songid: any) => ({
				abi: abi,
				address: contractAddress,
				functionName: "getSongById",
				args: [songid],
				account: address,
			})) || [],
	});

	const fetchSong = async (songDataArray: any[]) => {
		try {
			const songs = [];
			setIsLoading(true);
			for (const songData of songDataArray) {
				const gateway = songData.result.songCID.replace(
					"ipfs://",
					`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
				);
				const response = await axios.get(gateway, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				const artistSong = {
					...response.data,
					songId: Number(songData.result.songId),

					artistAddress: songData.result.artistAddress,
				};

				songs.push(artistSong);
				console.log(songs);

				setSongsData(songs);
			}
			setIsLoading(false);
		} catch (error: any) {
			setIsLoading(false);
			console.error("Error fetching song details:", error.message);
		}
	};

	useEffect(() => {
		if (data && success) {
			fetchSong(data);
		}
	}, [data, success]);

	return (
		<div className=" min-h-screen">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				{songs?.map((song: any, index: any) => (
					<Card
						key={index}
						title={song.name}
						image={song?.image.replace(
							"ipfs://",
							`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
						)}
						songid={song.songId}
						// price={song.price}
						// eth={song.eth}
						// by={song.artistAddress}
					/>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
