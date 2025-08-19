"use client";

import Image from "next/image";
import { CompanyData } from "../types";

interface CompanyCardProps {
	company: CompanyData;
	onClick: () => void;
}

export default function CompanyCard({ company, onClick }: CompanyCardProps) {
	return (
		<div
			onClick={onClick}
			className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-blue-300 p-6 flex flex-col items-center text-center group"
		>
			<div className="w-16 h-16 mb-4 relative">
				<Image
					src={company.logo}
					alt={`${company.name} logo`}
					width={64}
					height={64}
					className="object-contain group-hover:scale-110 transition-transform duration-300"
					onError={(e) => {
						// Fallback to a default logo or text if image fails to load
						const target = e.target as HTMLImageElement;
						target.style.display = "none";
					}}
				/>
				<div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
					{company.logo ? "" : company.name.charAt(0)}
				</div>
			</div>

			<h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
				{company.name}
			</h3>

			<div className="flex items-center text-sm text-gray-600">
				<div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
					{company.problems.length} problems
				</div>
			</div>

			<div className="mt-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
				Click to view problems
			</div>
		</div>
	);
}
