"use client"
import AudioBoxFeatures from "@/components/AudioBoxFeatures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";
import Faq from "@/components/Faq";
import FanEngagementSection from "@/components/FanEngagementSection";
import AnalyticsDashboardSection from "@/components/AnalyticsDashboardSection";
import { uploadProfileDetails } from "@/hooks/uploadProfileDetails";
import {useRouter} from "next/navigation" 

export default function Home() {
  const {artistProfileDetails} =  uploadProfileDetails();
	const router =useRouter();

	const getStarted=()=>{
		if(artistProfileDetails){
			router.push("/dashboard")
		}else{
			router.push("/dashboard/profile")
		}
	}
  return (
  <>
    <Navbar2/>
      <Hero/>
    <AudioBoxFeatures/>
      <div className="relative">

    <AnalyticsDashboardSection/>

    <div className="bg-[#791f685c] md:block hidden z-0 blur-[60px] -mt-32  rounded-full -left-52 absolute h-[400px] w-[400px]"> </div>
    <FanEngagementSection/>
      </div>

    <Faq/>
    
    <div className="bg-gradient-to-b from-[#394B5E1F] to-[#2A313D24] font-roboto w-11/12 mx-auto rounded-xl text-white py-16 my-16 px-4">
      <div className=" md:w-2/3 m-auto">
     
        <h1 className="text-3xl md:text-5xl text-[#68BDE4] text-center font-bold leading-tight">
        Join AudioBlocks and transform the way you share your music.
        </h1>
        <div className="mt-9 flex items-center justify-center">

        <button
								onClick={getStarted} className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-7 py-4 rounded-full">Get Started</button>
        </div>
      </div>
    </div>
    
    <Footer/>
  </>
    
  );
}
