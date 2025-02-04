import Link from "next/link";
// import { useAccount, useDisconnect, useSignMessage } from "wagmi";
// import { useEffect, useState } from "react";
import { ConnectBtn } from "./ConnectBtn";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import AvatarDropdown from "./Dropdown";

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
			<nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
				<div className="space-x-10 flex items-center">
					<Link href="/" className="flex space-x-3 items-center">
						<img
							src="/images/logo1.png"
							height={40}
							width={40}
							alt="logo"
							className="rounded-full"
						/>
						<h1 className="text-2xl font-semibold text-pink-400">
							AudioBlocks
						</h1>
					</Link>
				</div>
				<div className=" ">
					<div>
						<ConnectBtn />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;
