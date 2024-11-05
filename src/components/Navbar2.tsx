import SignupModal from "@/app/(auth)/signup/page";
import Link from "next/link";
import  { useState } from "react";

const Navbar2 = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<nav className="items-center font-roboto w-11/12 hidden m-auto text-white py-7 md:flex justify-between">
				<div className="col-span-1 space-x-10 flex items-center">
					<Link href="/" className="flex space-x-3 items-center">
						<div className="bg-pink-500 rounded-full h-10 w-10"></div>
						<h1 className="text-2xl font-semibold text-pink-400">AudioBox</h1>
					</Link>
					<div>
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
				<div className="col-span-1 ">
					<ul className="flex items-center font-semibold text-gray-400 gap-5">
						<Link href="/" className="hover:text-white">Support</Link>
						<Link href="/" className="hover:text-white">Download</Link>
						<Link
								href="#"
								// href="/"
								onClick={handleShow}
								className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-7 py-3 rounded-full"
							>
								Sign up
							</Link>
							<SignupModal isOpen={show} onClose={handleClose} />
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;
