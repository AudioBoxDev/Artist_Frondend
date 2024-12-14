import { useState, useEffect } from 'react';
import axios from 'axios';
import { generateRandomFileName, generateRandomSongTitle, replaceSpecialCharacters } from '@/lib/helper';
import { contractAddress, abi } from "@/config/abi";
import {
	useWaitForTransactionReceipt,
	useWriteContract,
	useReadContract,
} from "wagmi";
import { useAccount } from "wagmi";
import {toast} from "react-toastify"

// Pinata API credentials
// const PINATA_API_KEY = 'YOUR_PINATA_API_KEY';
// const PINATA_SECRET_API_KEY = 'YOUR_PINATA_SECRET_API_KEY';

export const useIpfsUpload = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
	const [txHash, setTxHash] = useState<`0x${string}` | null>(null);


  const pinFileToIpfs = async (file: File, setProgress: (progress: number) => void): Promise<string> => {
    const formData = new FormData();
    const randomFileName = generateRandomFileName(file.name);
    const renamedFile = new File([file], randomFileName, { type: file.type });
    // formData.append('file', file);
    formData.append('file', renamedFile);

    try {
      setLoading(true);
      const response = await axios.post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, formData, {
        maxContentLength: Infinity, // Prevents larger file restrictions
        headers: {
          'Content-Type': `multipart/form-data;`,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
						pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
						pinata_secret_api_key:
							process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
        },
        onUploadProgress: (progressEvent:any) => {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(progress); 
          console.log(progress);// Update progress in the frontend
        },
      });
      return response.data.IpfsHash;
      // return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (err) {
      console.error('Error uploading file to Pinata:', err);
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const pinJsonToIpfs = async (json: any) => {

    // Ensure that json.songtitle exists and is a valid string
    const defaultSongTitle = generateRandomSongTitle();
    const songTitle = json.name || defaultSongTitle;
    const formattedTitle = replaceSpecialCharacters(songTitle);
    console.log("Formatted Title:", formattedTitle);

    const pinataPayload = {
        pinataContent: json, // Your actual JSON content to upload
        pinataMetadata: {
            name: formattedTitle,
        },
        pinataOptions: {
          groupId: process.env.NEXT_PUBLIC_PINATA_GROUP_ID,
        }
    };

    try {
        setLoading(true);
        const response = await axios.post(`https://api.pinata.cloud/pinning/pinJSONToIPFS`, pinataPayload, {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
              pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
              pinata_secret_api_key:
                process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
            },
        });

        console.log("Pinata response:", response.data);
        // return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
        return response.data.IpfsHash;
    } catch (err) {
        console.error('Error uploading JSON to Pinata:', err);
        setError(err as Error);
    } finally {
        setLoading(false);
    }
};

const uploadSongToBackend= async (songDetails:any)=>{
  const url = process.env.NEXT_PUBLIC_API_URL;

		try {
			const response = await axios.post(`${url}/song/create`, {
				...songDetails
			});
			const data = response.data;
			return data;
		} catch (error: any) {
			console.error(error.response?.data?.message);
			toast.error(error.response?.data?.message || "Authentication failed");
		}
}

const writeToContract = async (songHash: any) => {
  try {
    const tx = await writeContractAsync({
      abi: abi,
      address: contractAddress,
      functionName: "uploadSong",
      args: [`ipfs://${songHash}`],
      account: address,
    });
    setTxHash(tx);
    toast.success("Song Submitted. Waiting for confirmation...");
  } catch (error: any) {
    console.error("Error uploading music:", error.message);
    toast.error("Error uploading music: " + error.message);
  }
};
const { isLoading: isConfirming, isSuccess: isConfirmed } =
  useWaitForTransactionReceipt({
    hash: txHash ?? undefined,
  });

useEffect(() => {
  if (isConfirmed) {
    toast.success("Song uploaded successfully");
  }
}, [isConfirmed]);

  return {
    pinFileToIpfs,
    pinJsonToIpfs,
    uploadSongToBackend,
    loading,
    writeToContract,
    error,
  };
};
