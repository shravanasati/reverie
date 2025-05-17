'use server'

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { apiFetch } from '@/lib/apiFetch';
import { JournalEntry, JournalWithAnalytics } from '@/types/journal';

interface CreateJournalEntryRequest {
	title: string;
	content: string;
	createdAt: string; //yyyy-mm-dd
}


export async function createJournalEntry(title: string, content: string, date: string) {
	try {
		const userSession = await auth.api.getSession({ headers: headers() })
		if (!userSession?.user) {
			return { success: false, error: 'Not authenticated' }
		}

		const userId = userSession.user.id

		const payload: CreateJournalEntryRequest = {
			title,
			content,
			createdAt: date
		}

		const response = await apiFetch(`/api/journals/${userId}`, {
			method: 'POST',
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			throw new Error('Failed to create journal entry: ' + await response.text())
		}

		revalidatePath('/app/entries')
		revalidatePath(`/app/entries/${date}`)
		revalidatePath('/app/insights')
		return { success: true }
	} catch (error) {
		console.error(error)
		return { success: false, error: String(error) }
	}
}

type WrappedJournalEntry = {
	journal: JournalEntry;
}

// Overload for when analytics is true
export async function getJournalByDate(
	date: string,
	analytics: true
): Promise<{ success: boolean; data?: JournalWithAnalytics; error?: string }>;

// Overload for when analytics is false or undefined
export async function getJournalByDate(
	date: string,
	analytics?: false
): Promise<{ success: boolean; data?: WrappedJournalEntry; error?: string }>;

// Implementation
export async function getJournalByDate(
	date: string,
	analytics: boolean = false
): Promise<{ success: boolean; data?: WrappedJournalEntry | JournalWithAnalytics; error?: string }> {
	try {
		const userSession = await auth.api.getSession({ headers: headers() });
		if (!userSession?.user) {
			return { success: false, error: 'Not authenticated' };
		}

		const userId = userSession.user.id;
		const response = await apiFetch(`/api/journals/${userId}/${date}${analytics ? '?analytics=true' : ''}`);

		if (!response.ok) {
			if (response.status === 404) {
				return { success: true, data: undefined };
			}
			throw new Error('Failed to fetch journal entry: ' + await response.text());
		}

		const data = await response.json();
		return { success: true, data };
	} catch (error) {
		console.error(error);
		return { success: false, error: String(error) };
	}
}
