import  { useState } from "react";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import {useRouter} from "next/navigation" 
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";



const containerVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const childVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
			<div className="bg-gradient-to-br flex flex-col md:pt-32 pt-36 pb-12 font-roboto from-[#1d021820] to-transparent md:h-screen justify-center items-center relative overflow-hidden">
			<div className="absolute inset-0 -z-20 bg-dot-pattern opacity-10 pointer-events-none" />
				<motion.div
					className="absolute inset-0 flex justify-center pointer-events-none"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<div className="bg-[#ff008020] blur-[80px] w-[400px] h-[400px] rounded-full -z-10"></div>
				</motion.div>

				{/* Content */}
				<motion.div
					className="text-center w-11/12 m-auto relative z-10"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<motion.h1
						variants={childVariants}
						className="text-7xl md:text-7xl font-bold bg-gradient-to-r from-[#057F88] to-[#50F3FF] text-transparent text-clip drop-shadow-lg"
						style={{
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Build • Engage • Earn
					</motion.h1>
					<motion.p
						variants={childVariants}
						className="text-lg md:text-2xl text-[#E0E0E0] mt-8 max-w-3xl mx-auto leading-relaxed"
					>
						Empowering Artists to Own, Earn, and Thrive on their Music
					</motion.p>
					<motion.div
						variants={childVariants}
						className="flex justify-center items-center gap-6 mt-10"
					>
						<button
							onClick={getStarted}
							className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-8 py-3 rounded-3xl duration-300 hover:scale-105"
						>
							Get Started
						</button>
					</motion.div>
				</motion.div>

				{/* Subtle background element with continuous movement */}
				<motion.div
					className="bg-[#490D3E20] md:block hidden blur-[60px] rounded-full -left-40 absolute h-[350px] w-[350px] -z-10"
					animate={{
						x: [0, 20, -20, 0],
						y: [0, 20, -20, 0],
						rotate: [0, 10, -10, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				></motion.div>
			</div>
		</>
	);
};

export default Hero;
