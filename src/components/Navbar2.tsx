import Link from "next/link";
// import { useAccount, useDisconnect, useSignMessage } from "wagmi";
// import { useEffect, useState } from "react";
import { ConnectBtn } from "./ConnectBtn";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import AvatarDropdown from "./Dropdown";
import { motion } from "framer-motion";
// import logo from "../public/logo1.png";
import Image from 'next/image';

// const url = "https://theaudiobox-backend.onrender.com";

const Navbar2 = () => {
	// const { address, isConnected } = useAccount();
	// const { signMessageAsync } = useSignMessage();

	// const [token, setToken] = useState(null);
	// const [message, setMessage] = useState(null);

	// useEffect(() => {
	// 	if (isConnected) {
	// 		signMessage();
	// 	}
	// }, [isConnected, token]);

	// const signMessage = async () => {
	// 	if (!isConnected) return alert("Please connect your wallet first");

	// 	const messageToSign: any = `Welcome to AudioBlocks! Sign this message to verify your wallet and unlock a world of decentralized music. Timestamp: ${new Date().toISOString()}`;

	// 	setMessage(messageToSign);

	// 	try {
	// 		const signature = await signMessageAsync({ message: messageToSign });
	// 		authenticateUser(address, signature, messageToSign, "artist");
	// 	} catch (error) {
	// 		console.error("Message signing failed:", error);
	// 		toast.error("Message signing failed");
	// 	}
	// };

	// const authenticateUser = async (
	// 	address: any,
	// 	signature: any,
	// 	message: any,
	// 	role: any,
	// ) => {
	// 	try {
	// 		const response = await axios.post(`${url}/wallet/auth/verify_signature`, {
	// 			address: address,
	// 			signature: signature,
	// 			message: message,
	// 			role: role,
	// 		});
	// 		setToken(response.data.token);
	// 		Cookies.set("audioblocks_jwt", response.data.token, { expires: 30 });
	// 		toast.success(response.data.message || "Authentication successful!");
	// 	} catch (error: any) {
	// 		toast.error(error.response.data.message || "Authentication failed!");
	// 		console.error("Authentication failed:", error);
	// 	}
	// };
	return (
		<>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 text-white py-5 px-6 md:px-12 flex justify-between items-center shadow-lg border-b border-transparent hover:border-pink-400 transition-all duration-500"
			>
				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					<Link href="/" className="flex items-center space-x-3">
						<motion.div
							whileHover={{ scale: 1.1, rotate: 5 }}
							transition={{ type: "spring", stiffness: 200 }}
						>
							<Image
								src="/images/logo1.png"
								alt="AudioBlocks Logo"
								width={40}
								height={40}
								className="rounded-full"
							/>
						</motion.div>
						<h1 className="text-2xl font-semibold text-pink-400">AudioBlocks</h1>
					</Link>
				</motion.div>

				{/* Navigation Links */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="hidden md:flex items-center space-x-8"
				>
					<motion.div
						whileHover={{ scale: 1.1, color: "#FF4081" }}
						transition={{ duration: 0.3 }}
					>
						<a
							href="https://www.audioblocks.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg"
						>
							Stream
						</a>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1, color: "#FF4081" }}
						transition={{ duration: 0.3 }}
					>
						<a
							href="https://audioblocks-artist.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg"
						>
							Artist Hub
						</a>
					</motion.div>
					
					{/* Connect Button */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<ConnectBtn />
					</motion.div>
				</motion.div>
			</motion.nav>
		</>
	);
};


export default Navbar2;
