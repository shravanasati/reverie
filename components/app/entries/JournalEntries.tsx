import { format } from "date-fns";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { JournalEntry } from "@/lib/types/journal";
import { Pencil, Eye } from "lucide-react";
import Link from "next/link";

// todo implement pagination
// todo delete journal
// todo date filter
// todo search using keywords
// todo 0 entries -> show no entries, start writing

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
								<div className="flex items-center gap-4">
									<time className="text-sm text-journal-500">
										{format(new Date(entry.createdAt), "MMMM d, yyyy 'at' h:mm a")}
									</time>
									<Link
										href={`/app?date=${entry.createdAt}`}
										className="p-2 rounded-lg hover:bg-journal-100 transition-colors"
									>
										<Pencil className="h-4 w-4 text-journal-500 hover:text-journal-700 transition-colors" />
									</Link>
									<Link
										href={`/app/entries/${entry.createdAt}`}
										className="p-2 rounded-lg hover:bg-journal-100 transition-colors"
									>
										<Eye className="h-4 w-4 text-journal-500 hover:text-journal-700 transition-colors" />
									</Link>
								</div>
							</div>
						</CardHeader>
						<CardContent className="pt-4">
							<p className="text-journal-600 whitespace-pre-wrap">
								{entry.content.slice(0, 200)}
								{entry.content.length > 200 && "..."}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</Container>
	)
}