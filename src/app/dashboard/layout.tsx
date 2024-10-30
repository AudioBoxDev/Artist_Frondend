import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";
import MusicPlayer from "@/components/MusicPlayer";
import LeftBar from "@/components/LeftBar";

const Dashboardlayout = ({ children }: Readonly<{
	children: React.ReactNode;
  }>) => {
	return (
		<>
			<div>
				<Sidebar />

				<div className="md:ml-52 px-4 font-roboto grid grid-cols-12 gap-1">
					<div className="flex flex-col col-span-9  justify-center items-center">
						<Navbar />

						<div className="text-white ">{children}</div>

						{/* <MusicPlayer /> */}
					</div>
          <div className="col-span-3">

					<LeftBar  />
          </div>
				</div>
			</div>
		</>
	);
};

export default Dashboardlayout;
