import React, { useState } from "react";
import { useAppKit } from "@reown/appkit/react";
import { useSignMessage, useAccount, useConnect } from "wagmi";
import { toast } from "react-toastify";
import axios from "axios";
import AvatarDropdown from "./Dropdown";
import Cookies from "js-cookie";

export const ConnectBtn = () => {
	const { open } = useAppKit();
	const { address, isConnected } = useAccount();
	const { signMessageAsync } = useSignMessage();

	const [isLoadingConnect, setIsLoadingConnect] = useState(false);
	const [isLoadingSign, setIsLoadingSign] = useState(false);
	const jwt= Cookies.get("audioblocks_artist_jwt");

	const handleConnect = async () => {
		setIsLoadingConnect(true);
		try {
			if (!isConnected) {
				await open();
			}
		} catch (error: any) {
			toast.error(error.message || "Failed to connect wallet");
		} finally {
			setIsLoadingConnect(false);
		}
	};

	const handleSignMessage = async () => {
		setIsLoadingSign(true);
		try {
			const messageToSign = `Welcome to AudioBlocks! Sign this message to verify your wallet and unlock a world of decentralized music. Timestamp: ${new Date().toISOString()}`;

			// Sign message
			const signature = await signMessageAsync({ message: messageToSign });

			// Authenticate user
			const token = await authenticateUser(
				address,
				signature,
				messageToSign,
				"artist",
			);
			window.location.reload();
		} catch (error: any) {
			toast.error(error.message || "Signing message failed");
		} finally {
			setIsLoadingSign(false);
		}
	};

	const authenticateUser = async (
		address: any,
		signature: string,
		message: string,
		role: string,
	) => {
		const url = process.env.NEXT_PUBLIC_API_URL;

		try {
			const response = await axios.post(`${url}/wallet/auth/verify_signature`, {
				address,
				signature,
				message,
				role,
			});
			const token = response.data.token;
			Cookies.set("audioblocks_artist_jwt", token);
			return token;
		} catch (error: any) {
			console.error(error.response?.data?.message);
			toast.error(error.response?.data?.message || "Authentication failed");
			throw error;
		}
	};

	return (
		<>
			{!isConnected && !jwt && (
				<button
					onClick={handleConnect}
					className="w-full bg-gradient-to-r from-[#B51960] to-[#B81A3F] text-white py-2 px-7 text-sm rounded-full hover:brightness-110 transition-all duration-300"
					disabled={isLoadingConnect}
				>
					{isLoadingConnect ? (
						<div className="relative w-5 h-5 m-auto">
							<div className="absolute inset-0 border-2 border-blue-100 rounded-full animate-spin-slow"></div>
							<div className="absolute inset-0 border-2 border-pink-900 border-t-transparent rounded-full animate-spin"></div>
						</div>
					) : (
						"Connect Wallet"
					)}
				</button>
			)}

			{isConnected && !jwt && (
				<button
					onClick={handleSignMessage}
					className="w-full bg-gradient-to-r from-[#B51960] to-[#B81A3F] text-white py-2 px-7 text-sm rounded-full hover:brightness-110 transition-all duration-300"
					disabled={isLoadingSign}
				>
					{isLoadingSign ? (
						<div className="relative w-5 h-5 m-auto">
							<div className="absolute inset-0 border-2 border-blue-100 rounded-full animate-spin-slow"></div>
							<div className="absolute inset-0 border-2 border-pink-900 border-t-transparent rounded-full animate-spin"></div>
						</div>
					) : (
						"Sign Message"
					)}
				</button>
			)}

			{jwt && <AvatarDropdown />}
		</>
	);
};

export default ConnectBtn;
