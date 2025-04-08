import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { JournalEntry } from "@/lib/types/journal";
import { BACKEND_URL } from "@/lib/backend_url";
import { JournalEntries } from "@/components/app/JournalEntries";

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

	return (
		<JournalEntries entries={entries} />
	);
}