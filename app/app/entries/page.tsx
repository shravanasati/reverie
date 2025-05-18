import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { JournalEntry } from "@/lib/types/journal";
import { JournalEntries } from "@/components/app/entries/JournalEntries";
import { apiFetchJSON } from "@/lib/apiFetch";

async function getJournalEntries(userId: string) {
	try {
		const entries = await apiFetchJSON<JournalEntry[]>(`/api/journals/user/${userId}`, {
			method: 'GET',
		}, ["journal_entries"]);

		return entries;
	} catch (error) {
		return { error: String(error) };
	}
}

export const metadata = {
	title: "Journal Entries",
	description: "View and manage your journal entries",
};

export const revalidate = 300;

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