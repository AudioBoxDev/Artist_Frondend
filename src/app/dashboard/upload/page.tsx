"use client";
import { log } from "console";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useIpfsUpload } from '@/hooks/useIpfsUpload';
import { isValid } from "react-datepicker/dist/date_utils";
import Alert from '../../../components/Alert'; // Import the Alert component
import { replaceSpecialCharacters } from "@/lib/helper";
import { toast } from "react-toastify";



const AddMusicForm = () => {
	const [releaseDate, setReleaseDate] = useState(new Date());
	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [audioFile, setAudioFile] = useState<File | null>(null);
	const [artFile, setArtFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const [description, setDescription] = useState("");
	const [composers, setComposers] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submited, setSubmitted] = useState(false);


	const { pinFileToIpfs, pinJsonToIpfs, loading, error } = useIpfsUpload();


	const handleArtFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setArtFile(file); 
	
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string); 
			};
			reader.readAsDataURL(file);
		}
	};

	const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log("File selected:", file); // Log the selected file object
		if (file) {
			setAudioFile(file);
		}
	};

	

	const dismissError = (field: string) => {
		setErrors((prevErrors) => {
			const newErrors = { ...prevErrors };
			delete newErrors[field];
			return newErrors;
		});
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		console.log("Submit Clicked");
	
		const validateFields = () => {
			let isValid = true;
			const newErrors: Record<string, string> = {};
	
			// Title Validation
			if (!title) {
				newErrors.title = "Title is required.";
				isValid = false;
			} else if (title.length < 3) {
				newErrors.title = "Title must be at least 3 characters long.";
				isValid = false;
			}
	
			// Genre Validation
			if (!genre) {
				newErrors.genre = "Genre is required.";
				isValid = false;
			}
	
			// Audio File Validation
			if (!audioFile) {
				newErrors.audioFile = "Audio file is required.";
				isValid = false;
			} else if (!["audio/mpeg", "audio/wav", "audio/mp3"].includes(audioFile.type)) {
				console.log("Audio File MIME Type:", audioFile.type);  // Log the MIME type
				console.log("Audio File Name:", audioFile.name); 
				newErrors.audioFile = "Audio file must be in .mp3 or .wav format.";
				isValid = false;
			}
	
			// Art File Validation
			if (!artFile) {
				newErrors.artFile = "Art file is required.";
				isValid = false;
			}
	
			// Description Validation
			if (!description) {
				newErrors.description = "Description is required.";
				isValid = false;
			} else if (description.length < 10) {
				newErrors.description = "Description must be at least 10 characters long.";
				isValid = false;
			}
	
			// Release Date Validation
			if (!releaseDate || !(releaseDate instanceof Date) || isNaN(releaseDate.getTime())) {
				newErrors.releaseDate = "Valid release date is required.";
				isValid = false;
			}
			setErrors(newErrors);
			return isValid;
		};
	
		setIsLoading(true);
	
		if (!validateFields()) {
			setIsLoading(false);
			return;
		}
	
		console.log("Audio File Name:", audioFile?.name); // This should now work if audioFile is correctly set
	
		const data = {
			title,
			genre,
			audioFile,
			artFile,
			description,
			composers,
			releaseDate
		};
	
		const songHash = await pinFileToIpfs(audioFile!);
		const coverArtHash = await pinFileToIpfs(artFile!);
		console.log(songHash)
		const artistName = "";
		const metadata = {
			name: replaceSpecialCharacters(title) || "Default-Name",
			description: description || "No description provided.",
			image: `ipfs://${coverArtHash}`,
			animation_url: `ipfs://${songHash}`,  // Use this field for audio files (optional)
			attributes: [
				{ trait_type: "Genre", value: genre },
				{ trait_type: "Release Date", value: releaseDate },
				{ trait_type: "Artist Name", value: artistName || "" },
				{ trait_type: "Album Name", value: "" },
				{ trait_type: "Song Title", value: title },
				{ trait_type: "Composers", value: composers || "" },
				{ trait_type: "description", value: description || "" }
			],
			external_urls: {
				likes: `https://yourplatform.com/like/${songHash}`, // External links for dynamic data
				streams: `https://yourplatform.com/streams/${songHash}`
			},
			data: {
				songUrl: `ipfs://${songHash}`,
				coverArtUrl: `ipfs://${coverArtHash}`
			}
		}; 
		// Upload metadata JSON to IPFS using Pinata
		const metadatahash = await pinJsonToIpfs(metadata);
		console.log(metadatahash);
		//Smart Contract Intereaction Comes Here.
		setIsLoading(false);
		setSubmitted(true);
		toast.success("Song Uploaded Successful");

		// setReleaseDate(new Date)
		// setTitle("")
		// setGenre("")
		// setAudioFile(null)
		// setArtFile(null)
		// setPreviewUrl("")
		// setComposers("");
		// setErrors({});

		//Contract Comes Here.


	};
	


	return (
		<div className=" m-auto flex mb-12 font-roboto rounded-xl p-5  items-center justify-center  bg-[#0E0B0E] text-[#A4A4A4]">
			<div>
				{submited ? (
					<Alert
						key={"01"}
						message={"Song Uploaded Successfully"}
						type="success"
						onDismiss={() => dismissError("01")}
					/>
				) : ""}
			{Object.keys(errors).map((field) => (
				<Alert
					key={field}
					message={errors[field]}
					type="error"
					onDismiss={() => dismissError(field)}
				/>
			))}
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
								{previewUrl ? (
									<img
										src={previewUrl}
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
								Song Title <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="album"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Song Title"
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

					<div className="grid md:grid-cols-10 gap-5">
						<div className="col-span-4">
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

						<div className="col-span-3">
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="purchase"
							>
								Song File <span className="text-red-500">*</span>
							</label>

							<div className="flex items-center border border-dashed border-[#282325] rounded-full px-2 py-1">
								<label className="flex-1 w-full overflow-hidden text-nowrap text-[#565656] text-xs">
									{audioFile === null ? "Select music file" : audioFile.name}
								</label>
								<label className="bg-[#DC143C] text-white px-2 text-xs py-1 rounded-full cursor-pointer hover:bg-pink-700">
									Select File
									<input
										type="file"										
										onChange={handleAudioFileChange}
										className="hidden"
										accept="audio/*"
									/>
								</label>
							</div>
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
							rows={10}
							placeholder="Description of music"
							className="w-full bg-transparent  placeholder:text-sm  placeholder:text-[#565656]  rounded-2xl border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
							required
						></textarea>
					</div>

					
					{isLoading ? (<button
						type="button"
						className="md:w-1/5 w-full bg-[#DC143C] hover:bg-pink-600 text-white font-medium py-2 rounded-full"
					>
						loading...
					</button>) : (<button
						type="submit"
						onClick={handleSubmit}
						className="md:w-1/5 w-full bg-[#DC143C] hover:bg-pink-600 text-white font-medium py-2 rounded-full"
					>
						Upload Music
					</button>)}
					
					

				</form>
			</div>
		</div>
	);
};

export default AddMusicForm;
