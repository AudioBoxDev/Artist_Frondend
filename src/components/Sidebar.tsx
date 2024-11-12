"use client";
import React from "react";
import SidebarItems from "./SidebarItems";
import {
	Subscript,
	User,
	Settings,
	Music,
	FileMusic,
	Wallet,
	PowerIcon,
	Home,
	X,
	ArrowBigLeft,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, toggleClose }: any) => {
	const pathname = usePathname();
	return (
		<>
			{isOpen && (
				<div
					onClick={toggleClose}
					className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
				></div>
			)}
			<div 
				className={`bg-custom-gradient z-30 overflow-y-scroll  lg:translate-x-0 scrollbar-hide lg:block transform transition-transform duration-300  fixed h-screen ${
					isOpen ? "translate-x-0" : "-translate-x-96"
				} bg-black text-white text-base p-5`}
			>
				<div className="flex">
					<Link href="/" className="flex items-center space-x-3 mb-10">
						<div className="bg-pink-500 rounded-full h-10 w-10"></div>
						<h1 className="text-xl font-semibold text-pink-400">AudioBlocks</h1>
					</Link>
					
						<ArrowBigLeft
							onClick={toggleClose}
							className="lg:hidden ml-5 mt-3 block cursor-pointer"
							size={16}
						/>
					
				</div>

				<nav className="space-y-4">
					<div className="space-y-6">
						<SidebarItems
							icon={Home}
							label="Dashboard"
							to="/dashboard"
							isActive={pathname === "/dashboard"}
						/>
						<SidebarItems
							icon={Music}
							label="Albums"
							to="/dashboard/album"
							isActive={pathname === "/dashboard/album"}
						/>
						<SidebarItems
							icon={Wallet}
							label="Wallet"
							to="/dashboard/wallet"
							isActive={pathname === "/dashboard/wallet"}
						/>
						<SidebarItems
							icon={Subscript}
							label="Subscription"
							to="/dashboard/subscription"
							isActive={pathname === "/dashboard/subscription"}
						/>
						<SidebarItems
							icon={FileMusic}
							label="Audience Insights"
							to="/dashboard/audience"
							isActive={pathname === "/dashboard/audience"}
						/>
						<SidebarItems
							icon={Settings}
							label="Settings"
							to="/dashboard/settings"
							isActive={pathname === "/dashboard/settings"}
						/>
						<div>
							<Link
								href="/dashboard/upload"
								className="bg-[#DC143C] text-sm text-[#fff] font-semibold py-2 px-4 rounded-full"
							>
								Upload Music
							</Link>
						</div>
					</div>

					<div className=" space-y-3 pt-32 text-base text-gray-500">
						<SidebarItems
							icon={User}
							label="Profile"
							to="/dashboard/profile"
							isActive={pathname === "/dashboard/profile"}
						/>
						<SidebarItems icon={PowerIcon} label="Log Out" to="/dashboard" />
					</div>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
