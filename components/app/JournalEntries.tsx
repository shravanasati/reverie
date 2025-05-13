import { format } from "date-fns";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { JournalEntry } from "@/lib/types/journal";

// todo implement pagination
// todo edit button for each entry - /app?date={date}
// todo a page for each entry

export function JournalEntries({ entries }: { entries: JournalEntry[] }) {
	const sortedEntries = [...entries].sort((a, b) =>
		new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	);

	return (
		<Container className="py-8 max-w-5xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Journal Entries</h1>
			<div className="space-y-6">
				{sortedEntries.map((entry) => (
					<Card key={entry.id} className="bg-white/95 backdrop-blur-sm border-journal-100">
						<CardHeader className="border-b border-journal-100">
							<div className="flex justify-between items-center">
								<h2 className="text-xl font-semibold text-journal-700">{entry.title}</h2>
								<time className="text-sm text-journal-500">
									{format(new Date(entry.createdAt), "MMMM d, yyyy 'at' h:mm a")}
								</time>
							</div>
						</CardHeader>
						<CardContent className="pt-4">
							<p className="text-journal-600 whitespace-pre-wrap">{entry.content}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</Container>
	)
}