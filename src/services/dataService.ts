import { Problem, CompanyData } from "../types";

const CSV_URL =
	"https://raw.githubusercontent.com/hxu296/leetcode-company-wise-problems-2022/main/data/leetcode_problems_and_companies.csv";

// Company logo URLs - using more reliable sources
const companyLogos: Record<string, string> = {
	Google: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
	Microsoft:
		"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
	Amazon: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/122018/untitled-1_282.png?itok=c0VNr82y",
	Facebook:
		"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
	Meta: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
	Apple: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
	Netflix: "https://assets.brand.netflix.com/Logos/Netflix-Brand-Logo.png",
	Uber: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
	LinkedIn:
		"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
	Twitter:
		"https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png",
	Adobe: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg",
	Bloomberg: generateCompanyImage("Bloomberg", "#1f5582"),
	Salesforce:
		"https://c1.sfdcstatic.com/content/dam/web/en_us/www/assets/logos/salesforce-with-type-logo.svg",
	Oracle: "https://www.oracle.com/asset/web/favicons/favicon-192.png",
	IBM: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
	Intel: "https://logos-world.net/wp-content/uploads/2020/07/Intel-Logo.png",
	Cisco: "https://www.cisco.com/c/en/us/about/brand-center/network-hardware-brand-name-logo-usage-guidelines/_jcr_content/Grid/category_atl/layout-category-atl/anchor_info.img.jpg/1564687905046.jpg",
	PayPal: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
	eBay: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
	Airbnb: "https://news.airbnb.com/wp-content/uploads/sites/4/2014/01/appartment-1.png",
	Dropbox:
		"https://cfl.dropboxstatic.com/static/images/logo_catalog/dropbox_logo_glyph_2015_m1.svg",
	Spotify:
		"https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png",
	Snapchat: generateCompanyImage("Snapchat", "#FFFC00"),
	Tesla: "https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/favicon-196x196.png",
	VMware: "https://logos-world.net/wp-content/uploads/2021/02/VMware-Logo.png",
	Square: generateCompanyImage("Square", "#000000"),
	Twilio: "https://www.twilio.com/content/dam/twilio-com/global/en/blog/legacy/2017/Twilio_logo_red.png",
	Lyft: "https://assets.website-files.com/5e9aa66fd3886aa2b4ec01ca/5e9aadc0314e7b8a052c7c5f_lyft-logo-FB.png",
	DoorDash: generateCompanyImage("DoorDash", "#ff3008"),
	Zoom: "https://st1.zoom.us/zoom.ico",
	Robinhood: generateCompanyImage("Robinhood", "#00c805"),
	Coinbase:
		"https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg",
	Stripe: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4hlMPNA/cacf1bb88b9fc492dfad34378d844280/Stripe_icon_-_square.svg",
	TikTok: generateCompanyImage("TikTok", "#000000"),
	tiktok: generateCompanyImage("TikTok", "#000000"),
	ByteDance: generateCompanyImage("ByteDance", "#1D4ED8"),
	"Goldman Sachs": generateCompanyImage("Goldman Sachs", "#4A90E2"),
	JPMorgan: generateCompanyImage("JPMorgan", "#005A8B"),
	"Morgan Stanley": generateCompanyImage("Morgan Stanley", "#005A8B"),
	"Walmart Global Tech": generateCompanyImage("Walmart", "#004C91"),
	Walmart: generateCompanyImage("Walmart", "#004C91"),
	Intuit: generateCompanyImage("Intuit", "#365ebf"),
	Expedia: generateCompanyImage("Expedia", "#FFC72C"),
	"Booking.com": generateCompanyImage("Booking", "#003580"),
	Wayfair: generateCompanyImage("Wayfair", "#7B68C7"),
	Karat: generateCompanyImage("Karat", "#007AFF"),
	default: generateCompanyImage("?", "#636670"),
};

// Function to generate a simple company logo image
function generateCompanyImage(name: string, color: string): string {
	const initial = name.charAt(0).toUpperCase();
	const svg = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<rect width="100" height="100" fill="${color}" rx="10"/>
		<text x="50" y="65" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="white" text-anchor="middle">${initial}</text>
	</svg>`;
	return `data:image/svg+xml;base64,${btoa(svg)}`;
}

interface CSVRow {
	problemLink: string;
	problemName: string;
	companyName: string;
	numOccur: number;
}

// Function to get difficulty level (placeholder implementation)
function getDifficultyFromProblemId(id: number): "Easy" | "Medium" | "Hard" {
	// This is a simple heuristic - in reality you'd want to cross-reference with LeetCode API
	if (id <= 200) return "Easy";
	if (id <= 800) return "Medium";
	return "Hard";
}

// Parse CSV text into structured data
function parseCSV(csvText: string): CSVRow[] {
	const lines = csvText.split("\n").filter((line) => line.trim());
	const rows: CSVRow[] = [];

	for (const line of lines) {
		// Handle CSV parsing with potential commas in problem names
		const parts = line.split(",");
		if (parts.length >= 3) {
			const problemLink = parts[0];
			const companyName = parts[parts.length - 2];
			const numOccur = parseInt(parts[parts.length - 1]) || 1;

			// Extract problem name from the middle parts
			const problemName = parts.slice(1, parts.length - 2).join(",");

			if (problemLink && problemName && companyName) {
				rows.push({
					problemLink: problemLink.trim(),
					problemName: problemName.trim(),
					companyName: companyName.trim(),
					numOccur,
				});
			}
		}
	}

	return rows;
}

// Extract problem ID from LeetCode URL
function extractProblemId(url: string): number {
	const match = url.match(/\/problems\/([^\/]+)\//);
	if (!match) return 1;

	// Convert problem slug to approximate ID (this is a heuristic)
	const slug = match[1];
	return slug.length * 10 + (slug.charCodeAt(0) % 100);
}

// Transform CSV data into our application format
function transformData(csvRows: CSVRow[]): Record<string, CompanyData> {
	const companies: Record<string, CompanyData> = {};

	for (const row of csvRows) {
		const { problemLink, problemName, companyName, numOccur } = row;

		if (!companies[companyName]) {
			companies[companyName] = {
				name: companyName,
				logo: getCompanyLogo(companyName),
				problems: [],
			};
		}

		const problemId = extractProblemId(problemLink);
		const problem: Problem = {
			id: problemId,
			title: problemName,
			difficulty: getDifficultyFromProblemId(problemId),
			rank: numOccur,
			url: problemLink,
		};

		companies[companyName].problems.push(problem);
	}

	// Sort problems by rank (frequency) descending
	Object.values(companies).forEach((company) => {
		company.problems.sort((a, b) => b.rank - a.rank);
	});

	return companies;
}

// Main function to fetch and process data
export async function fetchCompanyProblems(): Promise<
	Record<string, CompanyData>
> {
	try {
		console.log("Fetching company problems data...");
		const response = await fetch(CSV_URL);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const csvText = await response.text();
		console.log("CSV data fetched successfully, parsing...");

		const csvRows = parseCSV(csvText);
		console.log(`Parsed ${csvRows.length} problem entries`);

		const transformedData = transformData(csvRows);
		console.log(
			`Organized data for ${
				Object.keys(transformedData).length
			} companies`
		);

		return transformedData;
	} catch (error) {
		console.error("Error fetching company problems:", error);

		// Return fallback data on error
		return getFallbackData();
	}
}

// Fallback data in case the API is unavailable
function getFallbackData(): Record<string, CompanyData> {
	return {
		Google: {
			name: "Google",
			logo: companyLogos["Google"],
			problems: [
				{
					id: 1,
					title: "Two Sum",
					difficulty: "Easy",
					rank: 44,
					url: "https://leetcode.com/problems/two-sum/",
				},
				{
					id: 2,
					title: "Add Two Numbers",
					difficulty: "Medium",
					rank: 25,
					url: "https://leetcode.com/problems/add-two-numbers/",
				},
				{
					id: 3,
					title: "Longest Substring Without Repeating Characters",
					difficulty: "Medium",
					rank: 34,
					url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
				},
			],
		},
		Amazon: {
			name: "Amazon",
			logo: companyLogos["Amazon"],
			problems: [
				{
					id: 1,
					title: "Two Sum",
					difficulty: "Easy",
					rank: 117,
					url: "https://leetcode.com/problems/two-sum/",
				},
				{
					id: 200,
					title: "Number of Islands",
					difficulty: "Medium",
					rank: 103,
					url: "https://leetcode.com/problems/number-of-islands/",
				},
				{
					id: 146,
					title: "LRU Cache",
					difficulty: "Medium",
					rank: 117,
					url: "https://leetcode.com/problems/lru-cache/",
				},
			],
		},
		Microsoft: {
			name: "Microsoft",
			logo: companyLogos["Microsoft"],
			problems: [
				{
					id: 146,
					title: "LRU Cache",
					difficulty: "Medium",
					rank: 52,
					url: "https://leetcode.com/problems/lru-cache/",
				},
				{
					id: 200,
					title: "Number of Islands",
					difficulty: "Medium",
					rank: 42,
					url: "https://leetcode.com/problems/number-of-islands/",
				},
				{
					id: 151,
					title: "Reverse Words in a String",
					difficulty: "Medium",
					rank: 34,
					url: "https://leetcode.com/problems/reverse-words-in-a-string/",
				},
			],
		},
		Facebook: {
			name: "Facebook",
			logo: companyLogos["Facebook"],
			problems: [
				{
					id: 680,
					title: "Valid Palindrome II",
					difficulty: "Easy",
					rank: 252,
					url: "https://leetcode.com/problems/valid-palindrome-ii/",
				},
				{
					id: 314,
					title: "Binary Tree Vertical Order Traversal",
					difficulty: "Medium",
					rank: 188,
					url: "https://leetcode.com/problems/binary-tree-vertical-order-traversal/",
				},
				{
					id: 236,
					title: "Lowest Common Ancestor of a Binary Tree",
					difficulty: "Medium",
					rank: 180,
					url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
				},
			],
		},
		Apple: {
			name: "Apple",
			logo: companyLogos["Apple"],
			problems: [
				{
					id: 1,
					title: "Two Sum",
					difficulty: "Easy",
					rank: 40,
					url: "https://leetcode.com/problems/two-sum/",
				},
				{
					id: 146,
					title: "LRU Cache",
					difficulty: "Medium",
					rank: 20,
					url: "https://leetcode.com/problems/lru-cache/",
				},
				{
					id: 14,
					title: "Longest Common Prefix",
					difficulty: "Easy",
					rank: 14,
					url: "https://leetcode.com/problems/longest-common-prefix/",
				},
			],
		},
	};
}

// Get company logo URL
export function getCompanyLogo(companyName: string): string {
	// Check if we have a predefined logo
	if (companyLogos[companyName]) {
		return companyLogos[companyName];
	}

	// Generate a random color for the company
	const colors = [
		"#1f77b4",
		"#ff7f0e",
		"#2ca02c",
		"#d62728",
		"#9467bd",
		"#8c564b",
		"#e377c2",
		"#7f7f7f",
		"#bcbd22",
		"#17becf",
		"#3498db",
		"#e74c3c",
		"#2ecc71",
		"#f39c12",
		"#9b59b6",
		"#1abc9c",
		"#34495e",
		"#e67e22",
		"#95a5a6",
		"#16a085",
	];

	// Use company name to generate consistent color
	const colorIndex =
		companyName
			.split("")
			.reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
	const color = colors[colorIndex];

	return generateCompanyImage(companyName, color);
}

// Get all available companies
export function getAvailableCompanies(
	data: Record<string, CompanyData>
): string[] {
	return Object.keys(data).sort();
}

// Search problems across all companies
export function searchProblems(
	data: Record<string, CompanyData>,
	query: string
): Array<{ company: string; problem: Problem }> {
	const results: Array<{ company: string; problem: Problem }> = [];
	const lowerQuery = query.toLowerCase();

	Object.entries(data).forEach(([companyName, companyData]) => {
		companyData.problems.forEach((problem) => {
			if (problem.title.toLowerCase().includes(lowerQuery)) {
				results.push({ company: companyName, problem });
			}
		});
	});

	return results.sort((a, b) => b.problem.rank - a.problem.rank);
}

// Get top companies by problem count
export function getTopCompanies(
	data: Record<string, CompanyData>,
	limit: number = 10
): Array<{ name: string; problemCount: number; logo: string }> {
	return Object.values(data)
		.map((company) => ({
			name: company.name,
			problemCount: company.problems.length,
			logo: company.logo,
		}))
		.sort((a, b) => b.problemCount - a.problemCount)
		.slice(0, limit);
}
