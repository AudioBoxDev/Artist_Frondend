import { Search, Upload } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";

const Navbar = () => {
	return (
		<>
			<div className="w-full">
				<nav className="items-center font-roboto w-11/12 m-auto text-white py-7 flex justify-between">
					<div>
						<ul className="flex gap-9 font-semibold text-gray-400">
							<Link href="/" className="hover:text-white">
								<li>Home</li>
							</Link>
							<Link href="/" className="hover:text-white">
								<li>Artist hub</li>
							</Link>
						</ul>
					</div>
					<div className="w-1/2">
						<div className="flex items-center bg-[#1D1F1F] rounded-full px-3 py-2">
							<Search className="text-gray-500 mr-2" size={16} />
							<input
								type="text"
								placeholder="Search by artists, songs or albums"
								className="w-full rounded-full  px-3 border-none focus:outline-none  bg-[#1D1F1F] text-white placeholder-gray-400"
							/>
						</div>
					</div>
				</nav>
			</div>
		</>
	);
};

export default Navbar;
