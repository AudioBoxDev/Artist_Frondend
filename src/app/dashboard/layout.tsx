"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
// import LeftBar from "@/components/LeftBar";
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Dashboardlayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpened] = useState(false);

	const toggleOpen = () => {
		setIsOpened(true);
	};
	const toggleClose = () => {
		setIsOpened(false);
	};

	// const Close = () => {
	// 	setOpen(false);
	// };
	// const toggleLeftBar = () => {
	// 	setOpen(true);
	//   };

	return (
		<>
				<Sidebar isOpen={isOpen} toggleClose={toggleClose} toggleOpen={toggleOpen}  />

				<div className="md:ml-48 px-4 font-roboto  gap-1">
					<div className="flex flex-col justify-center items-center">
						<Navbar 
						// toggleLeftBar={toggleLeftBar}  
						toggleOpen={toggleOpen}/>
						
						<div className="text-white md:w-11/12 w-full">{children}</div>

					</div>
					{/* <div
						className={`fixed top-0 right-0 h-full w-72 transform transition-transform duration-300 ${
							open ? "translate-x-0" : "translate-x-full"
						} lg:translate-x-0 lg:block`}
					>
						<LeftBar open={open} close={Close} />
					</div> */}
				</div>
				<ToastContainer />
		</>
	);
};

export default Dashboardlayout;
