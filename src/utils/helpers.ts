/**
 * Utility function to generate LeetCode problem URL
 * @param problemId - The LeetCode problem ID
 * @returns The complete LeetCode URL for the problem
 */
export const getLeetCodeUrl = (problemId: number): string => {
	return `https://leetcode.com/problems/${problemId}/`;
};

/**
 * Utility function to format company name for display
 * @param companyName - Raw company name from data
 * @returns Formatted company name
 */
export const formatCompanyName = (companyName: string): string => {
	return companyName
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

/**
 * Utility function to get difficulty color based on rank
 * @param rank - Problem rank within company
 * @returns Tailwind CSS color class
 */
export const getDifficultyColor = (rank: number): string => {
	if (rank <= 15) return "text-green-600 bg-green-50 border-green-200";
	if (rank <= 35) return "text-yellow-600 bg-yellow-50 border-yellow-200";
	return "text-red-600 bg-red-50 border-red-200";
};

/**
 * Utility function to get difficulty label based on rank
 * @param rank - Problem rank within company
 * @returns Difficulty label
 */
export const getDifficultyLabel = (rank: number): string => {
	if (rank <= 15) return "High Priority";
	if (rank <= 35) return "Medium Priority";
	return "Low Priority";
};
