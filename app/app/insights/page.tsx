import Container from "@/components/ui/Container";
import { WordCloud } from "@/components/app/insights/WordCloud";
import { JournalStats, JournalStatsProps } from "@/components/app/insights/JournalStats";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { apiFetchJSON } from "@/lib/apiFetch";
import { JournalCharts } from "@/components/app/insights/JournalCharts";

export default async function InsightsPage() {
	const session = await auth.api.getSession({ headers: headers() });
	const userId = session?.user?.id;

	const journalStatsData = await apiFetchJSON<JournalStatsProps["data"]>(`/api/journal-analytics/${userId}`, {
		method: 'GET'
	})

	return (
		<Container className="py-8 max-w-5xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Insights</h1>

			{userId && (
				<div className="space-y-10">
					{/* Journal Stats Section */}
					<JournalStats data={journalStatsData} />

					{/* Charts */}
					<JournalCharts data={journalStatsData} />

					{/* Word Cloud Section */}
					<div className="space-y-4">
						<h2 className="text-xl font-semibold text-journal-600">Word Cloud</h2>
						<WordCloud userId={userId} />
					</div>

					{/* Future sections can be added here */}
				</div>
			)}
		</Container>
	);
}
