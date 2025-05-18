'use server'

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidateTag } from 'next/cache';
import { apiFetch } from '@/lib/apiFetch';
import { JournalEntry, JournalWithAnalytics } from '@/types/journal';
import { env } from 'process';
import { cache } from 'react';

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
		}, [])

		if (!response.ok) {
			throw new Error('Failed to create journal entry: ' + await response.text())
		}

		const tagsToRevalidate = ['journal_entries', `user_${userId}`, `journal_${userId}_${date}`, 'journal_analytics', "wordcloud"]
		tagsToRevalidate.forEach(tag => revalidateTag(tag))
		// revalidatePath('/app/entries')
		// revalidatePath(`/app/entries/${date}`)
		// revalidatePath('/app/insights')
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
async function getJournalByDate_(
	date: string,
	analytics: true
): Promise<{ success: boolean; data?: JournalWithAnalytics; error?: string }>;

// Overload for when analytics is false or undefined
async function getJournalByDate_(
	date: string,
	analytics?: false
): Promise<{ success: boolean; data?: WrappedJournalEntry; error?: string }>;

// Implementation
async function getJournalByDate_(
	date: string,
	analytics: boolean = false
): Promise<{ success: boolean; data?: WrappedJournalEntry | JournalWithAnalytics; error?: string }> {
	try {
		const userSession = await auth.api.getSession({ headers: headers() });
		if (!userSession?.user) {
			return { success: false, error: 'Not authenticated' };
		}

		const userId = userSession.user.id;
		const response = await apiFetch(`/api/journals/${userId}/${date}${analytics ? '?analytics=true' : ''}`, {}, ["journal_entries", `journal_${date}`]);

		if (!response.ok) {
			if (response.status === 404) {
				return { success: true, data: undefined };
			}
			const error = await response.text();
			const errorMessage = `Failed to fetch journal entry: ${response.status} ${error}`;
			if (env.NODE_ENV === 'development') {
				throw new Error(errorMessage);
			} else {
				throw new Error('Failed to fetch journal entry, please try again later.');
			}
		}

		const data = await response.json();
		return { success: true, data };
	} catch (error) {
		console.error(error);
		return { success: false, error: String(error) };
	}
}

export const getJournalByDate = cache(getJournalByDate_);