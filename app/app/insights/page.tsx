import Container from "@/components/ui/Container";
import { WordCloud } from "@/components/app/WordCloud";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function InsightsPage() {
	const session = await auth.api.getSession({ headers: headers() });
	const userId = session?.user?.id;

	return (
		<Container className="py-8 max-w-5xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Insights</h1>
			{userId && (
				<div className="space-y-6">
					<h2 className="text-xl font-semibold text-journal-600">Word Cloud</h2>
					<WordCloud userId={userId} />
				</div>
			)}
		</Container>
	);
}