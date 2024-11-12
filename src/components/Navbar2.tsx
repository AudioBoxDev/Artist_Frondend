import Link from "next/link";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectBtn } from "./ConnectBtn";
import axios from "axios";
import { toast } from "react-toastify";

const url = "https://theaudiobox-backend.onrender.com";

const Navbar2 = () => {
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();
	const { signMessageAsync } = useSignMessage();

	const [token, setToken] = useState(null);
	const [message, setMessage] = useState(null);


	// useEffect(() => {
    //     if (isConnected && !token) {
    //         signMessage();
    //     }
    // }, [isConnected]);


	const signMessage = async () => {
		if (!isConnected) return alert("Please connect your wallet first");

		const messageToSign:any = `Sign this message to authenticate. Timestamp: ${new Date().toISOString()}`;
		setMessage(messageToSign);

		try {
			const signature = await signMessageAsync({ message: messageToSign });
			authenticateUser(address, signature, messageToSign);
		} catch (error) {
			console.error("Message signing failed:", error);
			alert("Message signing failed");
		}
	};

	const authenticateUser = async (address:any, signature:any, message:any) => {
		try {
			
			const response = await axios.post(
				`${url}/wallet/auth/verify_signature`,
				{
					address,
					signature,
					message,
					role: "admin",
				},
			);
			setToken(response.data.token);
			toast.success("Authentication successful!");
		} catch (error) {
			console.error("Authentication failed:", error);
			toast.error("Authentication failed!");
		}
	};
	return (
		<>
			<nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
				<div className="space-x-10 flex items-center">
					<Link href="/" className="flex space-x-3 items-center">
						<div className="bg-pink-500 rounded-full h-10 w-10"></div>
						<h1 className="text-2xl font-semibold text-pink-400">
							AudioBlocks
						</h1>
					</Link>
					<div className="md:block hidden">
						<ul className="flex gap-9 font-semibold text-gray-400">
							<Link href="/" className="hover:text-white">
								<li>Streams</li>
							</Link>
							<Link href="/" className="hover:text-white">
								<li>Artist hub</li>
							</Link>
							<Link href="/dashboard/marketplace" className="hover:text-white">
								<li>Marketplace</li>
							</Link>
						</ul>
					</div>
				</div>
				<div className=" ">
					<ul className="flex items-center font-semibold text-gray-400 gap-5">
						<Link href="/" className="hover:text-white md:block hidden">
							Support
						</Link>
						<Link href="/" className="hover:text-white md:block hidden">
							Download
						</Link>
						<ConnectBtn />
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;
