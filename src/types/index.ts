export interface Problem {
	id: number;
	title: string;
	difficulty: "Easy" | "Medium" | "Hard";
	rank: number;
	url?: string;
}

export interface CompanyData {
	name: string;
	logo: string;
	problems: Problem[];
}

export interface SearchResult {
	company: string;
	problem: Problem;
}

export interface TopCompany {
	name: string;
	problemCount: number;
	logo: string;
}
