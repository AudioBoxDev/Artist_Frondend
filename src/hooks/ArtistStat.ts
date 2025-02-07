import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const Stat = () => {
	const [artistStats, setArtistStats] = useState<any>(null);
	const jwt = Cookies.get("audioblocks_artist_jwt");
	const url = process.env.NEXT_PUBLIC_API_URL;
	const { address } = useAccount();

	const getArtistStat = async () => {
		try {
			const response = await axios.get(`${url}/user/get-artist-stats`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt}`,
				},
			});

			if (response.data.success) {
				console.log(response.data.data);
				setArtistStats(response.data.data); // Store the song stats in state
			}
		} catch (error: any) {}
	};

	// const getArtistMonthlyStat = async () => {

	// 	try {
	// 		const response = await axios.get(`${url}/user/artist-monthly-stats`,
    //             {
    //                 "artistAddress":address,
    //             },
	// 			// {
	// 			// 	headers: {
	// 			// 		"Content-Type": "application/json",
	// 			// 		Authorization: `Bearer ${jwt}`,
	// 			// 	}
	// 			// }
	// 		);

	// 		if (response.data.success) {
	// 			console.log("hello", response.data.data); // Store the song stats in state
	// 		}
	// 	} catch (error: any) {}
	// };

	useEffect(() => {
		getArtistStat();
		// getArtistMonthlyStat();
	}, []);

	return {
		artistStats,
	};
};
