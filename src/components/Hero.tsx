import React, { useState } from "react";
import bottom from "/public/images/bottoms.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

	return (
		<>
			<div className=" bg-gradient-to-br flex flex-col md:pt-36 pt-10 font-roboto  md:-mt-24 from-[#1d02185c] to-transparent md:h-screen  justify-center items-center">
				<div className="text-center w-11/12 m-auto">
					<h1
						className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#B11993] to-[#50F3FF] text-transparent bg-clip-text"
						style={{
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Stream Music <br /> Own the Experience
					</h1>
					<p className="text-lg md:text-xl text-white mt-5">
						Own the music, support the artists, revolutionize the industry
					</p>
					<div className=" flex  justify-center items-center  gap-5">
					<div className="mt-10">
							<Link
								href="/dashboard"
								className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-5 py-4 rounded-3xl"
							>
								Start Listening
							</Link>
						</div>
						
						
						
					</div>
					<div>
						<Image src={bottom} alt="" className="w-full mt-5" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
