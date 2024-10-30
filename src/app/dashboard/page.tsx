"use client";
import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import song from "/public/images/Rectangle1.png";
import Image from "next/image";

// Register the necessary components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);
import { Line } from "react-chartjs-2";
import { Wallet } from "lucide-react";

const Dashboard = () => {
	const data = {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Page Analytics",
				data: [200, 300, 280, 400, 450, 480, 500, 450, 400, 470, 430, 490],
				borderColor: "rgba(32, 201, 151, 0.29)",
				backgroundColor: "rgba(0, 196, 204, 0.1)",
				// fill: true,
				pointRadius: 0,
				tension: 0.4,
			},
		],
	};

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
				grid: { color: "rgba(255, 255, 255, 0.1)" },
				ticks: {
					color: "#ffffff",
					stepSize: 100,
					callback: function (value: any) {
						return [100, 200, 300, 400, 500].includes(value) ? value : null;
					},
				},
			},
			x: {
				grid: { display: false },
				ticks: { color: "#ffffff" },
			},
		},
		elements: {
			line: {
				fill: true,
			},
		},
	};

	return (
		<div className="font-roboto min-h-screen p-8 text-[#A4A4A4]">
			<h1 className="text-3xl font-bold mb-6">Welcome</h1>
			<div className="grid grid-cols-2 text-black lg:grid-cols-4 gap-4 mb-8">
				<div className="bg-[#20C997] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-slate-200 rounded-full">
						<Wallet className=" text-black  h-5 w-5" />
					</div>
					<div>
						<p className="text-sm">Listeners</p>
						<p className="text-lg font-semibold">1,000</p>
					</div>
				</div>
				<div className="bg-[#20C997] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-slate-200 rounded-full">
						<Wallet className=" text-black  h-5 w-5" />
					</div>
					<div>
						<p className="text-sm">Streams</p>
						<p className="text-lg font-semibold">50,000</p>
					</div>
				</div>
				<div className="bg-[#20C997] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-slate-200 rounded-full">
						<Wallet className=" text-black  h-5 w-5" />
					</div>
					<div>
						<p className="text-sm">Streams / Listeners</p>
						<p className="text-lg font-semibold">50,000</p>
					</div>
				</div>
				<div className="bg-[#20C997] p-4 flex items-center space-x-4 rounded-lg">
					<div className="p-2 bg-slate-200 rounded-full">
						<Wallet className=" text-black  h-5 w-5" />
					</div>
					<div>
						<p className="text-sm">Balance</p>
						<p className="text-lg font-semibold">50,000</p>
					</div>
				</div>
			</div>

			<div className="bg-[#19051578] p-6 rounded-lg mb-8">
				<h2 className="text-xl font-semibold mb-4">Page Analytics</h2>
				<div className="h-64">
					<Line data={data} options={options} />
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="bg-[#1D1D1E59] p-6 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">Top Albums</h2>
					<ul>
          <li className="flex justify-between py-2 border-b border-gray-700">
							<span>#</span>
              <span>Albums</span>
							<span>Streams</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
            <span>1.</span>
            <span className="flex items-center"><Image src={song} className="w-5 h-5 rounded-full mr-2" alt="" /> Good Day</span>
							<span>480</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
            <span>2.</span>
            <span className="flex items-center"><Image src={song} className="w-5 h-5 rounded-full mr-2" alt="" /> Good Day</span>
							<span>235</span>
						</li>
					</ul>
				</div>

				<div className="bg-[#1D1D1E59] p-6 rounded-lg">
					<h2 className="text-xl font-semibold mb-4">Top Songs</h2>
					<ul>
          <li className="flex justify-between py-2 border-b border-gray-700">
							<span>#</span>
              <span>Songs</span>
							<span>Streams</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
            <span>1.</span>
              <span className="flex items-center"><Image src={song} className="w-5 h-5 rounded-full mr-2" alt="" /> Good Day</span>
							<span>480</span>
						</li>
						<li className="flex justify-between py-2 border-b border-gray-700">
            <span>2.</span>
            <span className="flex items-center"><Image src={song} className="w-5 h-5 rounded-full mr-2" alt="" /> Good Day</span>
							<span>235</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
