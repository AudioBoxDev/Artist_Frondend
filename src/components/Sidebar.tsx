import React from "react";
import SidebarItems from "./SidebarItems";
import {
	Upload,
	TrendingUp,
	Bolt,
	Settings,
	Star,
	CirclePlus,
	MicVocal,
	Music,
	FileMusic,
	Wallet,
	PowerIcon,
} from "lucide-react";
import Link from "next/link";
// import UploadModal from './UploadModal';

const Sidebar = () => {
	return (
		<>
			<div className="bg-custom-gradient overflow-y-scroll fixed h-screen w-[214px)] bg-black text-white text-base p-5">
				<Link href="/" className="flex items-center space-x-3 mb-10">
					<div className="bg-pink-500 rounded-full h-10 w-10"></div>
					<h1 className="text-2xl font-semibold text-pink-400">AudioBox</h1>
				</Link>

				<nav className="space-y-4">
					
					<div className="space-y-6">
						<SidebarItems icon={Wallet} label="Dashboard" to="/dashboard" />
						<SidebarItems icon={Music} label="Albums" to="/dashboard" />
						<SidebarItems
							icon={FileMusic}
							label="Wallet"
							to="/dashboard/album"
						/>
						<SidebarItems
							icon={FileMusic}
							label="Subscription"
							to="/dashboard/album"
						/>
						<SidebarItems
							icon={FileMusic}
							label="Audience Insights"
							to="/dashboard/album"
						/>
            <SidebarItems
							icon={FileMusic}
							label="Settings"
							to="/dashboard/album"
						/>
					</div>

					
					
						<div className=' space-y-3 pt-32 text-base text-gray-500'>
            <SidebarItems
							icon={FileMusic}
							label="Profile"
							to="/dashboard/profile"
						/>
						<SidebarItems
							icon={PowerIcon}
							label="Log Out"
							to="/dashboard/album"
						/>
            
						</div>
				</nav>
			</div>
		</>
	);
};

export default Sidebar;
