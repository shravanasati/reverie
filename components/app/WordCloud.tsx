import { fetchWordCloud } from "@/lib/wordcloud";
import { Card } from "@/components/ui/card";

export async function WordCloud({ userId }: { userId: string }) {
	const resp = await fetchWordCloud(userId);
	console.log(resp)
	const { success, data, error } = resp;
	if (!success) {
		return (
			<Card className="p-6">
				<p className="text-red-500">Error: {error}</p>
			</Card>
		);
	}
	if (!data) {
		return (
			<Card className="p-6">
				<p className="text-red-500">No word cloud available</p>
			</Card>
		);
	}

	return (
		<Card className="p-6">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={data || ''}
				alt="Word cloud of your journal entries"
				className="w-full h-auto"
			/>
		</Card>
	);
}
