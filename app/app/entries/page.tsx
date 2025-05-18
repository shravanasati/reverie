import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { JournalEntry } from "@/lib/types/journal";
import { JournalEntries } from "@/components/app/entries/JournalEntries";
import { apiFetchJSON } from "@/lib/apiFetch";
import { Suspense } from "react";
import Container from "@/components/ui/Container";

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

async function EntriesContent({ userId }: { userId: string }) {
	const entries = await getJournalEntries(userId) as JournalEntry[];

	return (
		<JournalEntries entries={entries} />
	);
}

function EntryCardSkeleton() {
	return (
		<div className="bg-white shadow-sm rounded-lg p-6 animate-pulse">
			<div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div> {/* Title Skeleton */}
			<div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div> {/* Date Skeleton */}
			<div className="space-y-2">
				<div className="h-4 bg-gray-200 rounded w-full"></div> {/* Content Line Skeleton */}
				<div className="h-4 bg-gray-200 rounded w-5/6"></div> {/* Content Line Skeleton */}
				<div className="h-4 bg-gray-200 rounded w-1/2"></div> {/* Content Line Skeleton */}
			</div>
		</div>
	);
}

function EntriesSkeleton() {
	return (
		<div className="space-y-8">
			<div className="grid grid-cols-1 gap-6">
				{Array.from({ length: 3 }).map((_, index) => (
					<EntryCardSkeleton key={index} />
				))}
			</div>
		</div>
	);
}

export default async function EntriesPage() {
	const userSession = await auth.api.getSession({ headers: headers() });
	if (!userSession) {
		redirect("/login");
	}

	return (
		<Container className="py-8 max-w-6xl mt-10">
			<h1 className="text-3xl font-bold text-journal-700 mb-8">My Journal Entries</h1>
			<Suspense fallback={<EntriesSkeleton />}>
				<EntriesContent userId={userSession.user.id} />
			</Suspense>
		</Container>
	);
}