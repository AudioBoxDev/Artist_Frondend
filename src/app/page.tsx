"use client"
import AudioBlocksFeatures from "@/components/AudioBlocksFeatures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";
import Faq from "@/components/Faq";
import FanEngagementSection from "@/components/FanEngagementSection";
import AnalyticsDashboardSection from "@/components/AnalyticsDashboardSection";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import { useRouter } from "next/navigation"
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import Cookies from "js-cookie";
import GoToTopButton from "@/components/GoToTopButton";

export default function Home() {
  const { artistProfileDetails } = uploadProfileDetails();
  const router = useRouter();
  const { isConnected } = useAccount();
  const token = Cookies.get("audioblocks_artist_jwt");

  const getStarted = async () => {
    try {
      if (token && token.trim() !== "") {
        const redirectPath = artistProfileDetails ? "/dashboard" : "/dashboard/profile";

        // router.push(redirectPath);
        window.open(redirectPath, "_blank");

      } else {
        // Handle missing wallet connection or token
        if (!isConnected) {
          toast.error("Please connect your wallet");
        } else if (isConnected && !token) {
          toast.error("Please sign the Authentication message");
        }
      }
    } catch (error: any) {
      toast.error(error);
    }

  };
  return (
    <>
      <Navbar2 />
      <Hero />
      <AudioBlocksFeatures />
      <div className="relative">

        <AnalyticsDashboardSection />

        <div className="bg-[#791f685c] md:block hidden z-0 blur-[60px] -mt-32  rounded-full -left-52 absolute h-[400px] w-[400px]"> </div>
        <FanEngagementSection />
      </div>

      <Faq />

      <div className="bg-gradient-to-b from-[#1a202c] to-[#121212] py-16 my-16 px-4 md:px-0">
        <div className="md:w-2/3 m-auto text-center"> 
          <h1 className="text-4xl md:text-6xl text-[#68BDE4] font-bold leading-tight mb-4drop-shadow-sm">
            Own Your Sound
          </h1>
          <p className="p-2 md:text-xl leading-relaxed mb-8 text-gray-400">
            AudioBlocks is more than just a streaming platform; it's a music ecosystem that values you
          </p>
          <button
            onClick={getStarted}
            className="bg-gradient-to-r from-[#B1198E] p-1 to-[#B81A3F] text-white text-sm px-8 py-3 rounded-3xl duration-300 hover:scale-105" 
          >
            Get Started
          </button>
        </div>
      </div>
      
      <GoToTopButton />
      <Footer />
  </>
    
  );
}
