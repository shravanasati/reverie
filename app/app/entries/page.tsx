import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { JournalEntry } from "@/lib/types/journal";
import { JournalEntries } from "@/components/app/JournalEntries";
import { apiFetchJSON } from "@/lib/apiFetch";

async function getJournalEntries(userId: string) {
	try {
		const entries = await apiFetchJSON<JournalEntry[]>(`/api/journals/user/${userId}`, {
			method: 'GET',
		});

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