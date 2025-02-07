import React from "react";
import MacBookAir from "/public/images/MacBookAir.png";
import Image from "next/image";
import Link from "next/link";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useAccount } from "wagmi";


const FanEngagementSection = () => {
	const { artistProfileDetails } = uploadProfileDetails();
	const router = useRouter();

	const {isConnected} = useAccount();
	const token = Cookies.get("audioblocks_artist_jwt");

const getStarted = async() => {
	try {
		if (token && token.trim() !== "") {
			const redirectPath = artistProfileDetails ? "/dashboard" : "/dashboard/profile";

			// router.push(redirectPath);
			window.open(redirectPath, "_blank");

		} else {
			// Handle missing wallet connection or token
			if (!isConnected) {
				toast.error("Please connect your wallet");
			} else if(isConnected && !token){
				toast.error("Please sign the Authentication message");
			}
		}
	} catch (error:any) {
		toast.error(error);
	}
	
};

	return (
		<div className="bg-gradient-to-b z-10 font-roboto w-11/12 mx-auto rounded-3xl from-[#394B5E1F] to-[#2A313D24] text-[#DACFD3] my-16 md:py-32 py-16 md:px-10 px-6">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
				<div className="w-full lg:w-1/2">
					<Image
						src={MacBookAir}
						alt="NFT Platform Preview"
						className="w-full rounded-lg shadow-lg"
					/>
				</div>
				<div className="w-full lg:w-1/2 text-center lg:text-left">
					<div>
						<h2 className="md:text-5xl text-3xl font-semibold mb-4">
							Fan Engagement & NFT Exclusives
						</h2>
						<p className="text-gray-400 mb-8">
							Give your fans something special exclusive drops they won’t find anywhere else and engage your audience with interactive experiences because music is more than just sound
						</p>
					</div>


					<button
						onClick={getStarted}
						className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-8 py-3 rounded-3xl duration-300 hover:scale-105"
					>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default FanEngagementSection;
