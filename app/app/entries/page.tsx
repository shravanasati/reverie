import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { JournalEntry } from "@/lib/types/journal";
import { format } from "date-fns";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { BACKEND_URL } from "@/lib/backend_url";

async function getJournalEntries(userId: string) {
	try {
		const response = await fetch(`${BACKEND_URL}/api/journals/user/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch journal entries');
		}

		const entries = await response.json();
		console.log(entries)
		return entries;
	} catch (error) {
		return { error: String(error) };
	}
}

export default async function EntriesPage() {
	const userSession = await auth.api.getSession({ headers: headers() });
	if (!userSession) {
		redirect("/login");
	}

	const entries = await getJournalEntries(userSession.user.id) as JournalEntry[];
	console.log(entries)

	return (
		<Container className="py-8 max-w-5xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Journal Entries</h1>
			<div className="space-y-6">
				{entries.map((entry) => (
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
	);
}