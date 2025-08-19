import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.google.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "img-prod-cms-rt-microsoft-com.akamaized.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "d1yjjnpx0p53s8.cloudfront.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.apple.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.brand.netflix.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "d3i4yxtzktqr9n.cloudfront.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "content.linkedin.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "abs.twimg.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.adobe.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "c1.sfdcstatic.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.oracle.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.ibm.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "logos-world.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.cisco.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.paypalobjects.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "news.airbnb.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cfl.dropboxstatic.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "developer.spotify.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.tesla.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.twilio.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.website-files.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "st1.zoom.us",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "",
				pathname: "/**",
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
