import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import MusicPlayer from "@/components/MusicPlayer";
import LeftBar from "@/components/LeftBar";
import "react-datepicker/dist/react-datepicker.css";

const Dashboardlayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<div>
				<Sidebar />

				<div className="md:ml-48 px-4 font-roboto grid grid-cols-12 gap-1">
					<div className="flex flex-col md:col-span-9 col-span-12 justify-center items-center">
						<Navbar />

						<div className="text-white w-11/12 ">{children}</div>

						{/* <MusicPlayer /> */}
					</div>
					<div className="col-span-3 md:block hidden">
						<LeftBar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
