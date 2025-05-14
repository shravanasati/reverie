import NotFound from "@/app/not-found";
import JournalEntryDetail from "@/components/app/entries/JournalEntryDetail";
import { getJournalByDate } from "@/lib/actions/journal";
import { isValidDateString } from "@/lib/datetime";

interface EntryPageProps {
	params: {
		date: string;
	}
}

export default async function EntryPage({ params }: EntryPageProps) {
	const { date } = params
	if (isValidDateString(date)) {
		const resp = await getJournalByDate(date, true)
		if (resp.success && resp.data) {
			return (
				<div className="min-h-screen grid place-items-center mt-10 py-8">
					<JournalEntryDetail data={resp.data} />
				</div>
			)
		} else if (resp.success) {
			return NotFound()
		} else {
			throw new Error(resp.error || "Failed to fetch journal entry")
		}
	} else {
		return NotFound()
	}
}