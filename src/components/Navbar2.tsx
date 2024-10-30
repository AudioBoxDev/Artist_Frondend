import Link from "next/link";
import React from "react";

const Navbar2 = () => {
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
						
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar2;
