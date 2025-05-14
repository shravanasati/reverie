import { fetchWordCloud } from "@/lib/wordcloud";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export async function WordCloud({ userId }: { userId: string }) {
	const resp = await fetchWordCloud(userId);
	const { success, data, error } = resp;

	if (!success) {
		return (
			<Card className="border-journal-100">
				<CardHeader className="pb-2">
					<CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
						<AlertCircle className="h-4 w-4 text-red-500" />
						Error
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-red-500">{error}</p>
				</CardContent>
			</Card>
		);
	}

	if (!data) {
		return (
			<Card className="border-journal-100">
				<CardHeader className="pb-2">
					<CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
						<AlertCircle className="h-4 w-4 text-amber-500" />
						Notice
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-amber-600">No word cloud data available yet. Keep journaling to generate your word cloud!</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="border-journal-100 overflow-hidden">
			<CardHeader className="pb-2">
				<CardTitle className="text-sm font-medium text-muted-foreground">
					Your Journal Words
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-2">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={data || ''}
					alt="Word cloud of your journal entries"
					className="w-full h-auto rounded-md aspect-auto"
				/>
			</CardContent>
		</Card>
	);
}