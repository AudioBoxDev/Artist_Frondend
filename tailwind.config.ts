import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				customDark: "#0A0507",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				"custom-gradient":
					"linear-gradient(180deg, rgba(40, 10, 34, 0.36) 0%, rgba(33, 21, 36, 0.36) 100%)",
				"custom-box-gradient":
					"linear-gradient(99.57deg, #4B0B3E 0%, #274749 98.82%)",
				"dot-pattern": `radial-gradient(white 1px, transparent 1px)`,
			},
		
			backgroundSize: {
				"dot-pattern": "20px 20px",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				moveLeftToRight: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				"music-bar": {
					"0%, 100%": { height: "100%" },
					"50%": { height: "30%" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"left-to-right": "moveLeftToRight 5s linear infinite",
				"music-bar-1": "music-bar 1s ease-in-out infinite",
				"music-bar-2": "music-bar 1.2s ease-in-out infinite",
				"music-bar-3": "music-bar 0.8s ease-in-out infinite",
				"spin-slow": "spin 2.5s linear infinite",
				spin: "spin 1s linear infinite",
			},
		},
	},
	plugins: [],
};
export default config;
