"use client"
import AudioBoxFeatures from "@/components/AudioBoxFeatures";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar2 from "@/components/Navbar2";
import Link from "next/link";
import Faq from "@/components/Faq";
import FanEngagementSection from "@/components/FanEngagementSection";
import AnalyticsDashboardSection from "@/components/AnalyticsDashboardSection";

export default function Home() {
  return (
  <>
    <Navbar2/>
      <Hero/>
    <AudioBoxFeatures/>
    <AnalyticsDashboardSection/>
    <FanEngagementSection/>

    <Faq/>
    
    <div className="border-[#0E0B0E] border font-roboto w-11/12 mx-auto rounded-xl text-white py-16 my-16 px-4">
      <div className=" w-2/3 m-auto">
     
        <h1 className="text-3xl md:text-5xl text-[#68BDE4] text-center font-bold leading-tight">
        Join AudioBox and transform the way you share your music.
        </h1>
        <div className="mt-9 flex items-center justify-center">

        <Link href="/login" className="bg-gradient-to-r from-[#B1198E] to-[#B81A3F] text-white text-sm px-7 py-4 rounded-full">Start Listening</Link>
        </div>
      </div>
    </div>
    <Footer/>
  </>
    
  );
}
