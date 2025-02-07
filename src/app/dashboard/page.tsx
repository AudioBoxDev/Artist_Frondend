"use client";
import React, { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import song from "/public/images/Rectangle1.png";
import Image from "next/image";
import { Wallet } from "lucide-react";
import axios from "axios";
import Cookies from "js-cookie";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useRouter } from "next/navigation";

const Dashboard = () => {
	const [songStats, setSongStats] = useState<any[]>([]);
	const [artistStats, setArtistStats] = useState<any>(null);
	const jwt = Cookies.get("audioblocks_artist_jwt");
	const url = process.env.NEXT_PUBLIC_API_URL;
	const route = useRouter();
	const { artistProfileDetails, isLoading } = uploadProfileDetails();


	useEffect(() => {
		if (!isLoading && !artistProfileDetails) {
			route.push("/dashboard/profile");
		}
	}, [artistProfileDetails, isLoading, route]);

	const getArtistStat = async () => {
		try {
			const response = await axios.get(`${url}/user/get-artist-stats`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt}`,
				},
			});

			if (response.data.success) {
				console.log(response.data.data);
				setArtistStats(response.data.data); // Store the song stats in state
			}
		} catch (error: any) {}
	};

	useEffect(() => {
		const fetchArtistSongStats = async () => {
			try {
				const response = await axios.get(`${url}/song/get-artist-song-stats`, {
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${jwt}`,
					},
				});

				if (response.data.success) {
					setSongStats(response.data.data); // Store the song stats in state
				}
			} catch (error: any) {
				console.log(error.message);
			}
		};
		getArtistStat();
		fetchArtistSongStats();
	}, []);

	const data = [
		{ name: "Jan", value: 200 },
		{ name: "Feb", value: 300 },
		{ name: "Mar", value: 280 },
		{ name: "Apr", value: 400 },
		{ name: "May", value: 450 },
		{ name: "Jun", value: 480 },
		{ name: "Jul", value: 500 },
		{ name: "Aug", value: 450 },
		{ name: "Sep", value: 400 },
		{ name: "Oct", value: 470 },
		{ name: "Nov", value: 430 },
		{ name: "Dec", value: 490 },
	];

	return (
		<div className="font-roboto min-h-screen text-[#A4A4A4]">
			<h1 className="text-2xl font-bold mb-6">Welcome</h1>
			<div className="grid grid-cols-2 text-white lg:grid-cols-3 gap-4 mb-8">
				<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-[#1A3F35] rounded-full">
						<Wallet className=" text-white  h-5 w-5" />
					</div>
					<div>
						<p className="text-xs">Listeners</p>
						<p className="text-lg font-semibold">0</p>
					</div>
				</div>
				<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-[#1A3F35] rounded-full">
						<Wallet className=" text-white  h-5 w-5" />
					</div>
					<div>
						<p className="text-xs">Streams</p>
						<p className="text-lg font-semibold">0</p>
					</div>
				</div>
				<div className="bg-[#100D0F] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-[#1A3F35] rounded-full">
						<Wallet className=" text-white  h-5 w-5" />
					</div>
					<div>
						<p className="text-xs">Balance</p>
						<p className="text-lg font-semibold">0</p>
					</div>
				</div>
			</div>

			<div className="bg-[#100D0F] p-6 rounded-lg mb-8">
				<h2 className="text-xl font-semibold mb-4">Page Analytics</h2>
				<div className="h-64">
					<ResponsiveContainer>
						<LineChart data={data}>
							<defs>
								<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
									<stop offset="0%" stopColor="rgba(32, 201, 151, 0.29)" />
									<stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
								</linearGradient>
							</defs>
							<XAxis dataKey="name" tick={{ fill: "#ffffff" }} />
							<YAxis
								tick={{ fill: "#ffffff" }}
								domain={[0, 600]}
								ticks={[100, 200, 300, 400, 500]}
							/>
							<CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
							<Tooltip />
							<Line
								type="monotone"
								dataKey="value"
								stroke="rgba(32, 201, 151, 0.29)"
								strokeWidth={2}
								fill="url(#gradient)"
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-[#100D0F] p-6 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">Top Albums</h2>
					{/* <ul>
						<li className="flex justify-between py-2 border-b border-gray-700">
							<span>#</span>
							<span>Albums</span>
							<span>Streams</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
							<span>1.</span>
							<span className="flex items-center">
								<Image
									src={song}
									className="w-5 h-5 rounded-full mr-2"
									alt=""
								/>{" "}
								Good Day
							</span>
							<span>480</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
							<span>2.</span>
							<span className="flex items-center">
								<Image
									src={song}
									className="w-5 h-5 rounded-full mr-2"
									alt=""
								/>{" "}
								Good Day
							</span>
							<span>235</span>
						</li>
					</ul> */}

					<p>coming soon</p>
				</div>

				<div className="bg-[#100D0F] p-6 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">Top Songs</h2>
					<ul>
						<li className="flex justify-between py-2 border-b border-gray-700">
							<div className="flex space-x-10">
								<span>#</span>
								<span>Songs</span>
							</div>
							<span>Streams</span>
						</li>
						{songStats.map((song, index) => (
							<li key={index} className="flex justify-between py-2 border-b border-gray-700">
								<div className="flex space-x-10">
									<span>1.</span>
									<span className="flex items-center">
										<img
											src={song?.image.replace(
												"ipfs://",
												`https://${process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL}/ipfs/`,
											)}
											className="w-5 h-5 rounded-full mr-2"
											alt=""
										/>{" "}
										{song.name}
									</span>
								</div>
								<span>{song.totalStreams}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
