"use client";
import { log } from "console";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const AddMusicForm = () => {
	const [releaseDate, setReleaseDate] = useState(new Date());
	const [songTitle, setSongTitle] = useState("");
	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [audioFile, setAudioFile] = useState("");
	const [artFile, setArtFile] = useState<string | null>(null);
	const [description, setDescription] = useState("");
	const [composers, setComposers] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [price, setPrice] = useState("");

	const handleArtFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setArtFile(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		const data = {
			songTitle,
			title,
			genre,
			audioFile,
			artFile,
			description,
			composers,
			price,
			releaseDate,
		};
		console.log(data);
		setIsLoading(false);
	};
	return (
		<div className=" m-auto flex mb-12 font-roboto rounded-xl p-5  items-center justify-center  bg-[#0E0B0E] text-[#A4A4A4]">
			<div>
				<form className="space-y-6 mb-5">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-bold mb-6">Add Music</h2>
						<div className="grid items-center gap-3 grid-cols-2">
							<label className="border-[#DC143C] font-medium text-center border text-white px-2 text-xs py-2 rounded-full cursor-pointer">
								Upload Art
								<input
									type="file"
									onChange={handleArtFileChange}
									className="hidden"
									accept="image/*"
								/>
							</label>

							<div className="border border-white rounded-full h-24 w-24">
								{artFile ? (
									<img
										src={artFile}
										alt="Uploaded art preview"
										className="object-cover rounded-full h-full w-full"
									/>
								) : null}
							</div>
						</div>
					</div>
					<div className="grid md:grid-cols-3 gap-10">
						<div>
							<label className="block text-sm font-normal mb-1" htmlFor="album">
								Album Title <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="album"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Album Title"
								className="w-full bg-transparent placeholder:text-[#565656] placeholder:text-sm rounded-full border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-normal mb-1" htmlFor="genre">
								Genre <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="genre"
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
								placeholder="Genre"
								className="w-full bg-transparent placeholder:text-[#565656]  placeholder:text-sm rounded-full border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
							/>
						</div>
						<div>
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="releaseDate"
							>
								Release Date <span className="text-red-500">*</span>
							</label>
							<DatePicker
								id="releaseDate"
								className="w-full bg-transparent text-sm  placeholder:text-[#565656]  placeholder:text-sm  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
								selected={releaseDate}
								onChange={(date: any) => setReleaseDate(date)}
							/>
						</div>
					</div>

					<div>
						<label
							className="block text-sm font-normal mb-1"
							htmlFor="description"
						>
							Description <span className="text-red-500">*</span>
						</label>
						<textarea
							name="description"
							id="description"
							value={description}
							onChange={(e: any) => setDescription(e.target.value)}
							placeholder="Description of music"
							className="w-full bg-transparent  placeholder:text-sm  placeholder:text-[#565656]  rounded-2xl border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
							required
						></textarea>
					</div>

					<div className="grid md:grid-cols-10 gap-5">
						<div className="col-span-3">
							<label className="block text-sm font-normal mb-1" htmlFor="song">
								Song Title <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="song"
								value={songTitle}
								onChange={(e: any) => setSongTitle(e.target.value)}
								placeholder="Song Title"
								className="w-full bg-transparent placeholder:text-[#565656]  placeholder:text-sm rounded-full border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
							/>
						</div>
						<div className="col-span-2">
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="compose"
							>
								Composers <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="compose"
								value={composers}
								onChange={(e: any) => setComposers(e.target.value)}
								placeholder="separate with coma"
								className="w-full bg-transparent  placeholder:text-sm placeholder:text-[#565656] rounded-full border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
							/>
						</div>
						<div className="col-span-2">
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="purchase"
							>
								Purchase Price <span className="text-red-500">*</span>
							</label>
							<input
								type="number"
								id="purchase"
								placeholder=" Price"
								value={price}
								onChange={(e: any) => setPrice(e.target.value)}
								className="w-full bg-transparent  placeholder:text-sm  placeholder:text-[#565656] rounded-full border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#fc8888]"
								required
							/>
						</div>
						<div className="col-span-3">
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="purchase"
							>
								Song File <span className="text-red-500">*</span>
							</label>

							<div className="flex items-center border border-dashed border-[#282325] rounded-full px-2 py-1">
								<label className="flex-1 w-full overflow-hidden text-nowrap text-[#565656] text-xs">
									{audioFile =="" ?  "Select music file" :  audioFile}
								</label>
								<label className="bg-[#DC143C] text-white px-2 text-xs py-1 rounded-full cursor-pointer hover:bg-pink-700">
									Select File
									<input
										type="file"
										value={audioFile}
										onChange={(e: any) => setAudioFile(e.target.value)}
										className="hidden"
										accept="audio/*"
									/>
								</label>
							</div>
						</div>
					</div>

					<button
						type="submit"
						onClick={handleSubmit}
						className="md:w-1/5 w-full bg-[#DC143C] hover:bg-pink-600 text-white font-medium py-2 rounded-full"
					>
						{isLoading ? "loading..." : "Upload Music"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddMusicForm;
