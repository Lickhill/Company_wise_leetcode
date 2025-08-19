// Types for the LeetCode data
export interface Problem {
	title: string;
	id: number;
	rank: number;
}

export interface CompanyData {
	[companyName: string]: Problem[];
}

// Company-wise LeetCode problems data
export const companyProblemsData: CompanyData = {
	Amazon: [
		{
			title: "Number of Islands",
			id: 200,
			rank: 1,
		},
		{
			title: "Rotting Oranges",
			id: 1036,
			rank: 2,
		},
		{
			title: "Most Common Word",
			id: 837,
			rank: 3,
		},
		{
			title: "Copy List with Random Pointer",
			id: 138,
			rank: 4,
		},
		{
			title: "Partition Labels",
			id: 768,
			rank: 5,
		},
	],
	Adobe: [
		{
			title: "Two Sum",
			id: 1,
			rank: 1,
		},
		{
			title: "Add Two Numbers",
			id: 2,
			rank: 2,
		},
		{
			title: "Merge Two Sorted Lists",
			id: 21,
			rank: 3,
		},
		{
			title: "Longest Palindromic Substring",
			id: 5,
			rank: 4,
		},
		{
			title: "Longest Substring Without Repeating Characters",
			id: 3,
			rank: 5,
		},
	],
	Google: [
		{
			title: "Expressive Words",
			id: 827,
			rank: 1,
		},
		{
			title: "Delete Nodes And Return Forest",
			id: 1207,
			rank: 2,
		},
		{
			title: "Two Sum",
			id: 1,
			rank: 3,
		},
		{
			title: "Split Array into Consecutive Subsequences",
			id: 659,
			rank: 4,
		},
		{
			title: "Minimum Window Subsequence",
			id: 727,
			rank: 5,
		},
	],
	Apple: [
		{
			title: "Peeking Iterator",
			id: 284,
			rank: 1,
		},
		{
			title: "Two Sum",
			id: 1,
			rank: 2,
		},
		{
			title: "Perfect Rectangle",
			id: 391,
			rank: 3,
		},
		{
			title: "LRU Cache",
			id: 146,
			rank: 4,
		},
		{
			title: "Flatten Nested List Iterator",
			id: 341,
			rank: 5,
		},
	],
	Microsoft: [
		{
			title: "Integer to English Words",
			id: 273,
			rank: 1,
		},
		{
			title: "LRU Cache",
			id: 146,
			rank: 2,
		},
		{
			title: "Design Tic-Tac-Toe",
			id: 348,
			rank: 3,
		},
		{
			title: "Copy List with Random Pointer",
			id: 138,
			rank: 4,
		},
		{
			title: "Spiral Matrix",
			id: 54,
			rank: 5,
		},
	],
	Facebook: [
		{
			title: "Verifying an Alien Dictionary",
			id: 990,
			rank: 1,
		},
		{
			title: "Minimum Remove to Make Valid Parentheses",
			id: 1371,
			rank: 2,
		},
		{
			title: "K Closest Points to Origin",
			id: 1014,
			rank: 3,
		},
		{
			title: "Product of Array Except Self",
			id: 238,
			rank: 4,
		},
		{
			title: "Remove Invalid Parentheses",
			id: 301,
			rank: 5,
		},
	],
};

// Company logos mapping (using company logos from various sources)
export const companyLogos: { [key: string]: string } = {
	Amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
	Adobe: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
	Google: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
	Apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
	Microsoft:
		"https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
	Facebook:
		"https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
};
