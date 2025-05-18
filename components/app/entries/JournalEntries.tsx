import { format } from "date-fns";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { JournalEntry } from "@/lib/types/journal";
import { Pencil, Eye } from "lucide-react";
import Link from "next/link";

// todo implement pagination
// todo delete journal
// todo date filter
// todo search using keywords

export function JournalEntries({ entries }: { entries: JournalEntry[] }) {
	const sortedEntries = [...entries].sort((a, b) =>
		new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	);

	return (
		<div className="space-y-6">
			{sortedEntries.length === 0 && (
				<div className="flex flex-col items-center justify-center h-80">
					<p className="text-gray-500 text-lg">No journal entries found.</p>
					<p className="text-gray-400 text-sm m-2"><Link href={"/app"} className="underline text-journal-500">Start writing</Link> your first entry!</p>
				</div>
			)}
			{sortedEntries.map((entry) => (
				<Card key={entry.id} className="bg-white/95 backdrop-blur-sm border-journal-100">
					<CardHeader className="border-b border-journal-100">
						<div className="flex justify-between items-center">
							<h2 className="text-xl font-semibold text-journal-700">{entry.title}</h2>
							<div className="flex items-center gap-4">
								<time className="text-sm text-journal-500">
									{format(new Date(entry.createdAt), "MMMM d, yyyy")}
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
							{entry.content.slice(0, 275)}
							{entry.content.length > 275 && "..."}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}