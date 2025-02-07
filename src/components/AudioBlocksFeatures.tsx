import {
	CircleDollarSign,
	CirclePlay,
	CircleUserRound,
	CircleUserRoundIcon,
	Verified,
} from "lucide-react";
import React from "react";

const AudioBlocksFeatures = () => {
	return (
		<div className="bg-[#0E070C] font-roboto w-11/12 mx-auto rounded-xl text-white py-16 my-7 px-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold mb-2">Easy Steps to begin</h1>
				<p className="text-gray-400">
					Lets guide you on how to setup your AudioBlocks account
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
				<div className="border border-[#1B1B1B] p-6 rounded-lg hover:bg-[#FFFFFF08] hover:scale-105 transition-all duration-300">
					<div className="flex items-center mb-4">
						<div className="border-[#3B3B3B] border-2 p-1 rounded-full">
							<span aria-label="music-experience" className="text-[#3B3B3B]">
								
								<Verified/>
							</span>
						</div>
						<h2 className="ml-4 text-xl font-semibold">Connect Wallet</h2>
					</div>
					<p className="text-gray-400">
						Securely link your wallet to setup your account, manage your earnings, access exclusive NFTs, and take full control of your music sales.
					</p>
				</div>

				{/* Card 2 */}
				<div className="border border-[#1B1B1B] p-6 rounded-lg hover:bg-[#FFFFFF08] hover:scale-105 transition-all duration-300">
					<div className="flex items-center mb-4">
						<div className="border-[#3B3B3B] border-2 p-1 rounded-full">
							<span aria-label="music-experience" className="text-[#3B3B3B]">
								<CircleUserRoundIcon />
							</span>
						</div>
						<h2 className="ml-4 text-xl font-semibold">
							Setup your profile
						</h2>
					</div>
					<p className="text-gray-400">
						Create a standout artist profile that showcases your music, connects with fans and listeners
					</p>
				</div>

				{/* Card 3 */}
				<div className="border border-[#1B1B1B] p-6 rounded-lg hover:bg-[#FFFFFF08] hover:scale-105 transition-all duration-300">
					<div className="flex items-center mb-4">
						<div className="border-[#3B3B3B] border-2 p-1 rounded-full">
							<span aria-label="music-experience" className="text-[#3B3B3B]">
								<CirclePlay />
							</span>
						</div>
						<h2 className="ml-4 text-xl font-semibold">
							Upload your music
						</h2>
					</div>
					<p className="text-gray-400">
						Share your sound with the world in just a few clicks and start earning from every stream.
					</p>
				</div>

				{/* Card 4 */}
				<div className="border border-[#1B1B1B] p-6 rounded-lg hover:bg-[#FFFFFF08] hover:scale-105 transition-all duration-300">
					<div className="flex items-center mb-4">
						<div className="border-[#3B3B3B] border-2 p-1 rounded-full">
							<span aria-label="music-experience" className="text-[#3B3B3B]">
								<CircleDollarSign />
							</span>
						</div>
						<h2 className="ml-4 text-xl font-semibold">
							Track Earnings and Growth
						</h2>
					</div>
					<p className="text-gray-400">
						Monitor your revenue, streaming stats, and fan engagement
					</p>
				</div>
			</div>
		</div>
	);
};

export default AudioBlocksFeatures;
