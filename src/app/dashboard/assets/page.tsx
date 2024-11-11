"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Assets() {
	const router = useRouter();

	const Back = () => {
		router.push("/dashboard/wallet");
	};
	

	return (
		<div className=" font-roboto text-[#ABABAB]  ">
			<button
				onClick={Back}
				className="text-gray-400 flex items-center gap-2 hover:text-gray-200 mb-4"
			>
				<ArrowLeft size={14} /> back
			</button>
			<h2 className="text-2xl border-b border-[#151515] pb-4 font-bold mb-4">
				My Assets (14)
			</h2>
			<div className="bg-[#0E0B0E] p-4 rounded-lg overflow-x-auto text-sm "></div>
		</div>
	);
}
