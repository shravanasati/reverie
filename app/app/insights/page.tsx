import Container from "@/components/ui/Container";
import { WordCloud } from "@/components/app/insights/WordCloud";
import { JournalStats, JournalStatsProps, StatCardSkeleton } from "@/components/app/insights/JournalStats";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { apiFetchJSON } from "@/lib/apiFetch";
import { JournalCharts, ChartSkeleton } from "@/components/app/insights/JournalCharts";
import React, { Suspense } from "react";
import { redirect } from "next/navigation";

export const revalidate = 300;

export const metadata = {
	title: "Insights",
	description: "View insights and analytics about your journal entries",
};

// Skeleton for the stats and charts content area
const StatsAndChartsSkeleton = () => {
	return (
		<div className="space-y-10">
			{/* Journal Stats Skeleton */}
			<div className="space-y-4">
				<div className="h-7 w-48 bg-gray-200 rounded animate-pulse mb-4"></div> {/* Title Skeleton */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<StatCardSkeleton />
					<StatCardSkeleton />
					<StatCardSkeleton />
				</div>
			</div>

			{/* Charts Skeleton */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<ChartSkeleton />
				<ChartSkeleton />
			</div>
		</div>
	);
};

// Skeleton for the Word Cloud section
const WordCloudSkeleton = () => {
	return (
		<div className="space-y-4">
			<div className="h-7 w-32 bg-gray-200 rounded animate-pulse mb-2"></div> {/* Title Skeleton */}
			<div className="w-full h-[300px] bg-gray-100 rounded animate-pulse flex items-center justify-center">
				<p className="text-gray-400">Loading word cloud...</p>
			</div>
		</div>
	);
};

// Async component to fetch data for stats and charts
async function StatsAndChartsContent({ userId }: { userId: string }) {
	const journalStatsData = await apiFetchJSON<JournalStatsProps["data"]>(`/api/journal-analytics/${userId}`, {
		method: 'GET'
	}, ["journal_analytics"]);

	return (
		<div className="space-y-10">
			{/* Journal Stats Section */}
			<JournalStats data={journalStatsData} />

			{/* Charts */}
			<JournalCharts data={journalStatsData} />
		</div>
	);
}

export default async function InsightsPage() {
	const session = await auth.api.getSession({ headers: headers() });
	const userId = session?.user?.id;
	if (!userId) {
		redirect("/login");
	}

	return (
		<Container className="py-8 max-w-6xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Insights</h1>

			<div className="space-y-10">
				<Suspense fallback={<StatsAndChartsSkeleton />}>
					<StatsAndChartsContent userId={userId} />
				</Suspense>

				<div className="space-y-4">
					<h2 className="text-xl font-semibold text-journal-600">Word Cloud</h2>
					<Suspense fallback={<WordCloudSkeleton />}>
						<WordCloud userId={userId} />
					</Suspense>
				</div>
			</div>
		</Container>
	);
}
