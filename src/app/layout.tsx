import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Company-wise LeetCode Problems | Interview Prep Platform",
	description:
		"Discover LeetCode problems organized by top tech companies. Practice coding interviews with real questions asked by Google, Amazon, Microsoft, Facebook, and more.",
	keywords: [
		"leetcode",
		"coding interview",
		"algorithm",
		"data structure",
		"tech companies",
		"programming",
		"software engineer",
	],
	authors: [{ name: "Company-wise LeetCode" }],
	creator: "Company-wise LeetCode",
	publisher: "Company-wise LeetCode",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://company-wise-leetcode.vercel.app",
		title: "Company-wise LeetCode Problems | Interview Prep Platform",
		description:
			"Discover LeetCode problems organized by top tech companies. Practice coding interviews with real questions asked by Google, Amazon, Microsoft, Facebook, and more.",
		siteName: "Company-wise LeetCode",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Company-wise LeetCode Problems Platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Company-wise LeetCode Problems | Interview Prep Platform",
		description:
			"Discover LeetCode problems organized by top tech companies. Practice coding interviews with real questions.",
		images: ["/og-image.png"],
		creator: "@companywisecode",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Script
					id="adsense-script"
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5475289645274873"
					crossOrigin="anonymous"
					strategy="afterInteractive"
				/>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
