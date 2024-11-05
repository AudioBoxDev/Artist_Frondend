"use client";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye } from "lucide-react";
import Link from "next/link";
import MacBookAir1 from "/public/images/container.png"
import React, { useRef, useState, useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const imageUrls = [
	MacBookAir1,
	"/public/images/MacBookAir1.png",
	"/path/to/image3.jpg",
];
const SignupModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 font-roboto flex justify-center items-center z-50">
			<div ref={modalRef} className="bg-black text-white rounded-lg shadow-lg w-full max-w-4xl flex">
				<div className="md:w-1/2 w-full bg-[#0E0B0E] rounded-lg shadow-lg m-8 p-8">
					<button
						onClick={onClose}
						className="text-gray-400 flex items-center gap-2 hover:text-gray-200 mb-4"
					>
						<ArrowLeft size={14}/> back
					</button>
					<h1 className="text-2xl font-bold mb-6">Create Account</h1>
					<p className="text-xs font-normal mb-4">
						Please provide the required info to create an account.
					</p>
          <div className="space-y-5">

					<Input
						type="email"
						className="rounded-full py-5"
						placeholder="Provide email"
					/>
					<div className="relative mb-4">
						<Input
							className="rounded-full py-5"
							type="password"
							placeholder="Password"
						/>
						<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
							<Eye size={16}/>
						</button>
					</div>
          </div>
					<button className="w-full bg-gradient-to-r rounded-full  from-[#B51960] to-[#B11990] mt-4 py-2">
						Create Account
					</button>

          <div className="flex items-center my-4">
								<div className="flex-1 border-t border-gray-300"></div>
								<span className="px-2 text-sm text-gray-500">Or</span>
								<div className="flex-1 border-t border-gray-300"></div>
							</div>

					<button className="w-full bg-transparent border-[#B51960] border mt-4 py-2 rounded-full flex items-center justify-center">
						Sign up with Google <span className="ml-2">G</span>
					
					</button>
					<p className="mt-4 text-center text-sm font-normal">
						Already have an account?
						<Link href="#" className="text-[#B51960] hover:text-[#B11990] ml-1">
							Sign in
						</Link>
					</p>
				</div>

				<div className="w-1/2 rounded-lg shadow-lg  m-8 md:block hidden">
					<Carousel
						autoPlay
						interval={5000}
						infiniteLoop
						showThumbs={false}
						showStatus={false}
						className="rounded-r-lg"
					>
						{imageUrls.map((url, index) => (
							 <div key={index} className="relative">
               <Image src={url} width="200" height="100" alt={`Slide ${index + 1}`} className="object-cover w-full h-full rounded-r-lg" />
              
               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-r-lg">
                 <p className="text-white text-2xl font-bold">Explore Latest Hits and Artists</p>
               </div>
             </div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default SignupModal;
