"use client";

import { useState, useEffect } from "react";
import { fetchCompanyProblems } from "../services/dataService";
import { CompanyData } from "../types";
import CompanyCard from "../components/CompanyCard";
import ProblemList from "../components/ProblemList";

export default function Home() {
	const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [companyData, setCompanyData] = useState<Record<string, CompanyData>>(
		{}
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadData = async () => {
			try {
				setLoading(true);
				const data = await fetchCompanyProblems();
				setCompanyData(data);
				setError(null);
			} catch (err) {
				setError("Failed to load company data. Using fallback data.");
				console.error("Error loading data:", err);
			} finally {
				setLoading(false);
			}
		};

		loadData();
	}, []);

	const companies = Object.keys(companyData);

	const filteredCompanies = companies.filter((company) =>
		company.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const selectedCompanyData = selectedCompany
		? companyData[selectedCompany]
		: null;

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
					<p className="mt-4 text-lg text-gray-600">
						Loading company data...
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-gray-900">
								Company-wise LeetCode Problems
							</h1>
							<p className="text-gray-600 mt-1">
								Discover coding problems asked by top tech
								companies ({companies.length} companies loaded)
							</p>
							{error && (
								<p className="text-yellow-600 text-sm mt-1">
									⚠️ {error}
								</p>
							)}
						</div>
						{selectedCompany && (
							<button
								onClick={() => setSelectedCompany(null)}
								className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
							>
								← Back to Companies
							</button>
						)}
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				{!selectedCompany ? (
					<>
						<div className="mb-8">
							<div className="relative max-w-md mx-auto">
								<input
									type="text"
									placeholder="Search companies..."
									value={searchTerm}
									onChange={(e) =>
										setSearchTerm(e.target.value)
									}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<svg
									className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>

						<div className="mb-8 bg-white rounded-lg shadow p-6">
							<h2 className="text-xl font-semibold text-gray-800 mb-4">
								Platform Statistics
							</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-blue-600">
										{companies.length}
									</div>
									<div className="text-sm text-gray-600">
										Companies
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">
										{Object.values(companyData).reduce(
											(total, company) =>
												total + company.problems.length,
											0
										)}
									</div>
									<div className="text-sm text-gray-600">
										Total Problems
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-purple-600">
										{companies.length > 0
											? Math.round(
													Object.values(
														companyData
													).reduce(
														(total, company) =>
															total +
															company.problems
																.length,
														0
													) / companies.length
											  )
											: 0}
									</div>
									<div className="text-sm text-gray-600">
										Avg per Company
									</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-orange-600">
										2022
									</div>
									<div className="text-sm text-gray-600">
										Data Year
									</div>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{filteredCompanies.map((companyName) => (
								<CompanyCard
									key={companyName}
									company={companyData[companyName]}
									onClick={() =>
										setSelectedCompany(companyName)
									}
								/>
							))}
						</div>

						{filteredCompanies.length === 0 && (
							<div className="text-center py-12">
								<p className="text-gray-500 text-lg">
									No companies found matching &ldquo;
									{searchTerm}&rdquo;
								</p>
							</div>
						)}
					</>
				) : (
					selectedCompanyData && (
						<ProblemList
							company={selectedCompanyData}
							onBack={() => setSelectedCompany(null)}
						/>
					)
				)}
			</main>
		</div>
	);
}
