"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Card = ({ title, by, time, eth }: any) => {
	const route = useRouter();
	const handleClick = (id:any) => {
		route.push(`/dashboard/song/${id}`)
	}
	return (
		<div onClick={()=>handleClick(1)} className="bg-[#0E0B0E]  cursor-pointer rounded-xl shadow-lg p-4 text-white">
			<div className="overflow-hidden h-80 rounded-lg">
				<img
					src="/images/Rectangle4.png" // Replace with your image URL
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
					<div>
						<p className="text-base text-[#68676E]">Highest bid</p>
						<p className="text-sm text-white">{by}</p>
					</div>
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
	const data = Array(4).fill({
		title: "Good Day",
		price: "20",
		eth: "0.08",
		by: "peter",
	});

	return (
		<div className=" min-h-screen">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
				{data.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						price={item.price}
						eth={item.eth}
						by={item.by}
					/>
				))}
			</div>
		</div>
	);
};

export default CardGrid;
