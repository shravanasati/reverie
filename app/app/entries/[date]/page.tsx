import NotFound from "@/app/not-found";
import JournalEntryDetail from "@/components/app/entries/JournalEntryDetail";
import { getJournalByDate } from "@/lib/actions/journal";
import { auth } from "@/lib/auth";
import { isValidDateString } from "@/lib/datetime";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { EntryDetailSkeleton } from "@/components/app/entries/EntryDetailSkeleton";

interface EntryPageProps {
	params: {
		date: string;
	}
}

export async function generateMetadata(
	{ params }: EntryPageProps): Promise<Metadata> {
	const date = params.date
	const resp = await getJournalByDate(date, false)
	if (!resp.success || !resp.data) {
		return {
			title: "Journal Entry Not Found",
			description: "The requested journal entry does not exist.",
		}
	}

	return {
		title: resp.data.journal.title,
		description: resp.data.journal.content.slice(0, 100) + "...",
	}
}

export const revalidate = 300;

async function EntryDetailContent({ date }: { date: string }) {
	const resp = await getJournalByDate(date, true)
	if (resp.success && resp.data) {
		return (
			<JournalEntryDetail data={resp.data} />
		)
	} else if (resp.success) {
		return NotFound()
	} else {
		throw new Error(resp.error || "Failed to fetch journal entry")
	}
}

export default async function EntryPage({ params }: EntryPageProps) {
	const userSession = await auth.api.getSession({ headers: headers() });
	if (!userSession) {
		redirect("/login");
	}

	const { date } = params
	if (isValidDateString(date)) {
		return (
			<div className="min-h-screen grid place-items-center mt-10 py-8">
				<Suspense fallback={<EntryDetailSkeleton />}>
					<EntryDetailContent date={date} />
				</Suspense>
			</div>
		)
	} else {
		return NotFound()
	}
}