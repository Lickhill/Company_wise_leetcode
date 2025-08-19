"use client";

import Link from "next/link";
import { CompanyData } from "../types";

interface ProblemListProps {
	company: CompanyData;
	onBack: () => void;
}

export default function ProblemList({ company, onBack }: ProblemListProps) {
	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "text-green-800 bg-green-100 border-green-200";
			case "Medium":
				return "text-yellow-800 bg-yellow-100 border-yellow-200";
			case "Hard":
				return "text-red-800 bg-red-100 border-red-200";
			default:
				return "text-gray-800 bg-gray-100 border-gray-200";
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-lg">
			<div className="p-6 border-b border-gray-200">
				<h2 className="text-2xl font-bold text-gray-800 mb-2">
					{company.name} LeetCode Problems
				</h2>
				<p className="text-gray-600">
					{company.problems.length} problems ranked by frequency
				</p>
			</div>

			<div className="p-6">
				<div className="space-y-3">
					{company.problems.map((problem) => (
						<div
							key={problem.id}
							className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
						>
							<div className="flex items-center space-x-4 flex-1">
								<div className="flex-shrink-0">
									<span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white text-sm font-medium rounded-full">
										{problem.rank}
									</span>
								</div>

								<div className="flex-1 min-w-0">
									<div className="flex items-center space-x-3">
										<h3 className="text-lg font-medium text-gray-900 truncate">
											{problem.title}
										</h3>
										<span
											className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getDifficultyColor(
												problem.difficulty
											)}`}
										>
											{problem.difficulty}
										</span>
									</div>
									<p className="text-sm text-gray-500 mt-1">
										Problem #{problem.id} • Asked{" "}
										{problem.rank} times
									</p>
								</div>
							</div>

							<div className="flex-shrink-0 ml-4">
								<Link
									href={
										problem.url ||
										`https://leetcode.com/problems/${problem.title
											.toLowerCase()
											.replace(/\s+/g, "-")}/`
									}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
								>
									Solve
									<svg
										className="ml-2 -mr-1 w-4 h-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
