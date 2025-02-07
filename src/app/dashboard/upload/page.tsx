"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useIpfsUpload } from "@/hooks/useIpfsUpload";
import { isValid } from "react-datepicker/dist/date_utils";
import { replaceSpecialCharacters } from "@/lib/helper";
import { toast } from "react-toastify";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useRouter } from "next/navigation";

const AddMusicSchema = z.object({
	title: z.string().min(3, "Title must be at least 3 characters long."),
	genre: z.string().nonempty("Genre is required."),
	composers: z.string().nonempty("Composers are required."),
	audioFile: z
		.instanceof(File)
		.refine(
			(file) => ["audio/mpeg", "audio/wav", "audio/mp3"].includes(file.type),
			{ message: "Audio file must be in .mp3, .wav, or .mpeg format." },
		),
	artFile: z.instanceof(File, { message: "Art file is required." }),
	description: z
		.string()
		.min(10, "Description must be at least 10 characters."),
	releaseDate: z.date().refine((date) => !isNaN(date.getTime()), {
		message: "Valid release date is required.",
	}),
});

type AddMusicFormInputs = z.infer<typeof AddMusicSchema>;

const AddMusicForm = () => {
	const [releaseDate, setReleaseDate] = useState(new Date());
	const [title, setTitle] = useState("");
	const [genre, setGenre] = useState("");
	const [audioFile, setAudioFile] = useState<File | null>(null);
	const [artFile, setArtFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);

	const [description, setDescription] = useState("");
	const [composers, setComposers] = useState("");
	const [isUploading, setIsUploading] = useState(false);
	const [progress, setProgress]  =  useState<number | null>(null);
	const route = useRouter();
	const { artistProfileDetails, isLoading } = uploadProfileDetails();
	
	
		useEffect(() => {
			if (!isLoading && !artistProfileDetails) {
				route.push("/dashboard/profile");
			}
		}, [artistProfileDetails, isLoading, route]);

	// const [errors, setErrors] = useState<Record<string, string>>({});

	const { pinFileToIpfs, uploadSongToBackend, writeToContract, pinJsonToIpfs, loading, error } =
		useIpfsUpload();
		

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

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<AddMusicFormInputs>({
		resolver: zodResolver(AddMusicSchema),
	});

	const handleAudioFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setAudioFile(file);

			const audio = new Audio(URL.createObjectURL(file));

			// Listen for metadata to be loaded
			audio.addEventListener("loadedmetadata", () => {
				console.log(`Duration: ${audio.duration} seconds`);
			});
		}
	};



	const onSubmit = async (e: any) => {
		e.preventDefault();
		setIsUploading(true);
		try {
			setProgress(0);
			

			const songHash = await pinFileToIpfs(audioFile!, setProgress);
			const coverArtHash = await pinFileToIpfs(artFile!, setProgress);
			console.log(songHash);
			const artistName = artistProfileDetails?.fullName;
			const metadata = {
				name: replaceSpecialCharacters(title) || "Default-Name",
				description: description || "No description provided.",
				image: `ipfs://${coverArtHash}`,
				animation_url: `ipfs://${songHash}`, // Use this field for audio files (optional)
				genre:genre,
				releaseDate:releaseDate,
				artistName:artistName,
				title:title,
				composers:composers,
				albumName: "",
				external_urls: {
					likes: `https://yourplatform.com/like/${songHash}`, // External links for dynamic data
					streams: `https://yourplatform.com/streams/${songHash}`,
				},
				data: {
					songUrl: `ipfs://${songHash}`,
					coverArtUrl: `ipfs://${coverArtHash}`,
				},
			};
			// Upload metadata JSON to IPFS using Pinata
			const metadatahash = await pinJsonToIpfs(metadata);
			const songDetails = {
				title: title,
				songId: 12345,
				description: description,
				songCid: `ipfs://${songHash}`,
				metadataCID: metadatahash,
				artistName: artistName,
				genreId: "649f2b1832c3e3f2d9b45f0b",
				durationInSec: 180,
				coverImage: `ipfs://${coverArtHash}`,
				releaseDate: releaseDate,
				composers: composers,
			  };
			//Smart Contract Intereaction Comes Here.
			uploadSongToBackend(songDetails);
			writeToContract(metadatahash);
			setIsUploading(false);
			// setSubmitted(true);
			// toast.success("Song Uploaded Successful");
		} catch (error: any) {
			setProgress(null);
			setIsUploading(false);
			toast.error(error.message);
			console.log(error.message);
		}
		// setReleaseDate(new Date)
		// setTitle("")
		// setGenre("")
		// setAudioFile(null)
		// setArtFile(null)
		// setPreviewUrl("")
		// setComposers("");

	};

	return (
		<div className=" m-auto flex mb-12 font-roboto rounded-xl p-5  items-center justify-center  bg-[#0E0B0E] text-[#A4A4A4]">
			<div>
				
				<form  onSubmit={onSubmit} className="space-y-6 mb-5">
					<div className="flex md:flex-row flex-col md:items-center justify-between">
						<h2 className="md:text-3xl text-xl font-bold mb-6">Add Music</h2>
						<div className="grid items-center gap-3 grid-cols-2">
							<label className="border-[#DC143C] font-medium text-center border text-white px-2 text-xs py-2 rounded-full cursor-pointer">
								Upload Art
								<input
									type="file"
									{...register("artFile")}
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
					{errors.artFile && (
						<p className="text-red-500">{errors.artFile.message}</p>
					)}
					<div className="grid md:grid-cols-2 gap-10">
						<div>
							<label className="block text-sm font-normal mb-1" htmlFor="album">
								Song Title <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								{...register("title")}
								id="album"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Song Title"
								className="w-full bg-transparent placeholder:text-[#565656] placeholder:text-sm rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
							/>
							{errors.title && (
								<p className="text-red-500">{errors.title.message}</p>
							)}
						</div>
						<div>
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="compose"
							>
								Composers <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="compose"
								{...register("composers")}
								value={composers}
								onChange={(e: any) => setComposers(e.target.value)}
								placeholder="separate with coma"
								className="w-full bg-transparent  placeholder:text-sm placeholder:text-[#565656] rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
							/>
							{errors.composers && (
								<p className="text-red-500">{errors.composers.message}</p>
							)}
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-5">
						<div>
							<label className="block text-sm font-normal mb-1" htmlFor="genre">
								Genre <span className="text-red-500">*</span>
							</label>
							<select
								id="genre"
								{...register("genre")}
								value={genre}
								onChange={(e) => setGenre(e.target.value)}
								className="w-full bg-transparent placeholder:text-[#565656] placeholder:text-sm rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								required
							>
								<option value="" className="bg-black text-white" disabled>
									Select Genre
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Pop">
									Pop
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Rock">
									Rock
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Jazz">
									Jazz
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Christian">
									Christian
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Classical">
									Classical
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Electronic">
									Electronic
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Country">
									Country
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Reggae">
									Reggae
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Blues">
									Blues
								</option>
								<option className="bg-[#0E0B0E] text-white" value="R&B">
									R&B
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Soul">
									Soul
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Folk">
									Folk
								</option>
								<option className="bg-[#0E0B0E] text-white" value="Metal">
									Metal
								</option>
							</select>
							{errors.genre && (
								<p className="text-red-500">{errors.genre.message}</p>
							)}
						</div>
						<div>
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="releaseDate"
							>
								Release Date <span className="text-red-500">*</span>
							</label>
							<Controller
								name="releaseDate"
								control={control}
								render={({ field }) => (
									<DatePicker
										// {...field}
										id="releaseDate"
										selected={field.value}
										onChange={(date) => field.onChange(date)}
										className="w-full bg-transparent text-sm  placeholder:text-[#565656]  placeholder:text-sm  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
									/>
								)}
							/>
							{/* <DatePicker
								id="releaseDate"
								className="w-full bg-transparent text-sm  placeholder:text-[#565656]  placeholder:text-sm  rounded-full border border-[#282325] px-3 py-2 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
								
								selected={releaseDate}
								onChange={(date: any) => setReleaseDate(date)}
							/> */}
							{errors.releaseDate && (
								<p className="text-red-500">{errors.releaseDate.message}</p>
							)}
						</div>

						<div>
							<label
								className="block text-sm font-normal mb-1"
								htmlFor="purchase"
							>
								Song File <span className="text-red-500">*</span>
							</label>

							<div className="flex items-center border border-dashed border-[#282325] rounded-full px-2 py-2">
								<label className="flex-1 w-full overflow-hidden text-nowrap text-[#565656] text-xs">
									{audioFile === null ? "Select music file" : audioFile.name}
								</label>
								<label className="bg-[#DC143C] text-white px-2 text-xs py-1 rounded-full cursor-pointer hover:bg-pink-700">
									Select File
									<input
										type="file"
										// {...register("audioFile")}
										onChange={handleAudioFileChange}
										className="hidden"
										accept="audio/*"
									/>
								</label>
							</div>
							{/* {errors.audioFile && (
								<p className="text-red-500">{errors.audioFile.message}</p>
							)} */}
						</div>
					</div>

					{/* Progress Bar */}
					
					{progress !== null && (
						<div>
							<p>Uploading: {progress}%</p>
							<div className="rounded-lg" style={{ width: "100%", background: "#ccc" }}>
								<div className="bg-pink-700 rounded-lg"
									style={{
										width: `${progress}%`,
										height: "10px",
									}}
								></div>
							</div>
						</div>
					)}

					<div>
						<label
							className="block text-sm font-normal mb-1"
							htmlFor="description"
						>
							Description <span className="text-red-500">*</span>
						</label>
						<textarea
							id="description"
							{...register("description")}
							value={description}
							onChange={(e: any) => setDescription(e.target.value)}
							rows={10}
							placeholder="Description of music"
							className="w-full bg-transparent  placeholder:text-sm  placeholder:text-[#565656]  rounded-2xl border border-[#282325] px-3 py-1 text-white focus:outline-none focus:shadow-sm focus:border-[#FF9393]"
						></textarea>
						{errors.description && (
							<p className="text-red-500">{errors.description.message}</p>
						)}
					</div>

					<button
						type="submit"
						className="md:w-1/5 w-full bg-[#DC143C] hover:bg-pink-600 text-white font-medium py-2 rounded-full"
					>
						{isUploading ? (
							<div className="relative w-5 h-5 m-auto">
								<div className="absolute inset-0 border-2 border-blue-100 rounded-full animate-spin-slow"></div>
								<div className="absolute inset-0 border-2 border-pink-900 border-t-transparent rounded-full animate-spin"></div>
							</div>
						) : (
							"Upload Music"
						)}
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddMusicForm;
