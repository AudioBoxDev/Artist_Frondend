import { NextRequest, NextResponse } from "next/server";
import {toast} from "react-toastify";

const protectedRoutes = [
	"/dashboard",
	"/dashboard/song",
	"/dashboard/profile",
	"/dashboard/upload",
	"/dashboard/wallet",
	"/dashboard/subscription",
	"/dashboard/addalbum",
];

export default function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;

	// Check for authentication token in cookies
	const token = req.cookies.get("audioblocks_artist_jwt");

	// If no token and trying to access protected route, redirect to home
	if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
		toast.error("Please login to access this page");
		return NextResponse.redirect(new URL("/", req.url));
	}

	// Allow request to proceed
	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*"], // Matches all dashboard-related paths
};
