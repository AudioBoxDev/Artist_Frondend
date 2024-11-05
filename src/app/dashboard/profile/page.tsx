import React from "react";

export default function Profile() {
	return (
		<section className="space-y-4 text-[#A4A4A4]">
			<h2 className="text-2xl font-bold">My Profile</h2>
			<div className=" border-b pb-5 border-[#282325]">
				<div className=" flex  items-center  justify-between w-11/12 m-auto">
					<div className="w-24 h-24 rounded-full border ">
						<img
							src="https://via.placeholder.com/100" 
							alt="Profile"
							className="w-24 h-24 rounded-full"
						/>
					</div>
					<button className="bg-[#DC143C] font-medium text-sm text-[white] px-4 py-2 rounded-full">
						Edit Profile
					</button>
				</div>
			</div>

			<div className="mb-8 space-y-4">
				<div className="">
					<input
						type="text"
						placeholder="Alexar Combs"
						className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
					/>
				</div>

				<input
					type="text"
					placeholder="I Am Contemporary Artist Based in London, UK."
					className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
				/>

				<div className="flex space-x-4">
					<input
						type="text"
						placeholder="Twitter: @AlexarCombs"
						className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
					/>
					<input
						type="text"
						placeholder="Facebook: @AlexarCombs"
						className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
					/>
				</div>
			</div>

			<div className="mb-8">
				<h3 className="text-lg mt-9 border-b border-[#282325] pb-3 font-bold mb-4">
					Change Password
				</h3>
				<div className="space-y-5">
					<input
						type="password"
						placeholder="Enter Password"
						className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
					/>
					<input
						type="password"
						placeholder="Reenter Password"
						className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
					/>
					<button className=" md:w-1/3 w-1/2 bg-[#DC143C] text-white text-sm px-4 py-2 rounded-full font-semibold">
						Change Password
					</button>
				</div>
			</div>

			<div className="pt-8 space-y-5">
				<div className=" flex justify-between items-center pb-2 mb-4 border-b border-[#282325]">
					<h3 className="text-lg font-semibold">Change Wallet Address</h3>
					<button className="bg-[#DC143C] text-sm text-white md:px-4 px-2 py-2 rounded-full font-semibold">
						Connect New Address
					</button>
				</div>
				<input
					type="text"
					placeholder="Enter Address"
					className="w-full bg-transparent  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:shadow-[#FF9393]"
				/>

				<button className=" md:w-1/3 w-1/2 text-sm bg-[#DC143C] text-white px-4 py-2 rounded-full font-semibold">
					Change Address
				</button>
			</div>
		</section>
	);
}
