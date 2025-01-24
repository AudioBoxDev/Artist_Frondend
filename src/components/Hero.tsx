import  { useState } from "react";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import {useRouter} from "next/navigation" 
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

const Hero = () => {
	const {artistProfileDetails} =  uploadProfileDetails();
	const router =useRouter();
	const {isConnected} = useAccount();
	const token = Cookies.get("audioblocks_artist_jwt");

const getStarted = async() => {
	try {
		if (token && token.trim() !== "") {
			console.log(artistProfileDetails);
			
			const redirectPath = artistProfileDetails ? "/dashboard" : "/dashboard/profile";
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
		<>
			<div className=" bg-gradient-to-br  flex flex-col md:pt-36 pt-40  pb-6 font-roboto  -mt-28  from-[#1d02185c] to-transparent md:h-screen  justify-center items-center">
				<div className="text-center w-11/12 m-auto">
					<h1
						className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#057F88] to-[#50F3FF] text-transparent bg-clip-text"
						style={{
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Amplify Your Reach <br />  Own Your Success
					</h1>
					<p className="text-lg md:text-xl text-white mt-5">
					AudioBlocks empowers artists with ownership, fan connection, and financial control
					</p>
					<div className=" flex  justify-center items-center  gap-5">
					<div className="mt-10">
							<button
								onClick={getStarted}
								className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-8 py-3 rounded-3xl"
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
				<div className="bg-[#490D3E5C] md:block hidden blur-[60px] rounded-full -left-40 absolute h-96 w-96"> </div>
			</div>
		</>
	);
};

export default Hero;
