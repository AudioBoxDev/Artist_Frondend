"use client";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import MacBookAir1 from "/public/images/container.png";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ConnectBtn } from "@/components/ConnectBtn";
import axios from "axios";
import ToastNotification from "@/components/Toast";
import { useState } from "react";

const url = "https://theaudiobox-backend.onrender.com";

const imageUrls = [
	MacBookAir1,
	"/public/images/MacBookAir1.png",
	"/path/to/image3.jpg",
];
const SignupModal = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastTitle, setToastTitle] = useState("");
	const [toastOpen, setToastOpen] = useState(false);

	const handleSignUp = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post(`${url}/user/signup`, {
				email: email,
				password: password,
				role: "artist",
			});

			const message = response.data.message || "Signup successful!";
			setToastTitle("Success");
			setToastMessage(message);
			setToastOpen(true);

			console.log(response.data.message);
		} catch (error: any) {
			const message = error.response?.data?.message || "Signup failed!";
			setToastTitle("Error");
			setToastMessage(message);
			setToastOpen(true);
		}
	};

	return (
		<>
			<div className="bg-black text-white rounded-lg shadow-lg w-full min-h-screen fixed grid grid-cols-6 gap-32">
				<div className="md:col-span-2 col-span-6 w-full  bg-[#0E0B0E] rounded-xl shadow-lg m-8 p-8">
					<Link
						href="/"
						className="text-gray-400 flex items-center gap-2 hover:text-gray-200 mb-4"
					>
						<ArrowLeft size={14} /> back
					</Link>
					<h1 className="text-2xl font-bold mb-6">Create Account</h1>
					<p className="text-xs font-normal mb-4">
						Please provide the required info to create an account.
					</p>
					<div className="space-y-5">
						<Input
							type="email"
							value={email}
							onChange={(e: any) => setEmail(e.target.value)}
							className="rounded-full py-5 border border-[#282325]"
							placeholder="Provide email"
						/>
						<div className="relative mb-4">
							<Input
								className="rounded-full py-5 border border-[#282325]"
								type="password"
								value={password}
								onChange={(e: any) => setPassword(e.target.value)}
								placeholder="Password"
							/>
							<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
								{passwordVisible ? <EyeClosed size={16} /> : <Eye size={16} />}
							</button>
						</div>
					</div>
					<button
						onClick={handleSignUp}
						className="w-full bg-gradient-to-r rounded-full  from-[#B51960] to-[#B11990] mt-4 py-2"
					>
						Create Account
					</button>

					<div className="flex items-center my-4">
						<div className="flex-1 border-t border-[#282325]"></div>
						<span className="px-2 text-sm text-gray-500">Or</span>
						<div className="flex-1 border-t border-[#282325]"></div>
					</div>

					<button className="w-full bg-transparent border-[#B51960] border mt-4 py-2 rounded-full flex items-center justify-center">
						Sign up with Google <span className="ml-2">G</span>
					</button>
					<p className="mt-4 text-center text-sm font-normal">
						Already have an account?
						<Link href="#" className="text-[#B51960] hover:text-[#B11990] ml-1">
							Sign in
						</Link>
					</p>
				</div>
				<div className="md:col-span-2 w-full md:hidden items-center justify-center flex flex-col bg-[#0E0B0E] rounded-lg shadow-lg m-8 p-8">
					<p className="text-xs font-normal mb-4">
						Please provide the required info to create an account.
					</p>
					<ConnectBtn />
					<p className="mt-4 text-center text-sm font-normal">
						Already have an account?
						<Link href="#" className="text-[#B51960] hover:text-[#B11990] ml-1">
							Sign in
						</Link>
					</p>
				</div>

				<div className="md:col-span-4 col-span-6  rounded-xl relative border border-gray-100 items-end shadow-lg  m-8 md:block hidden">
					<Slider {...settings}>
						{imageUrls.map((url, index) => (
							<div>
								<Image
									src={url}
									alt={`Slide ${index + 1}`}
									width={500}
									height={500}
									className="rounded-lg absolute w-full  object-cover"
								/>
							</div>
						))}
					</Slider>
				</div>
				<ToastNotification
					open={toastOpen}
					setOpen={setToastOpen}
					title={toastTitle}
					message={toastMessage}
				/>
			</div>
		</>
	);
};

export default SignupModal;
