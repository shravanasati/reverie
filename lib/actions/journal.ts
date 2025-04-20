'use server'

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { apiFetch } from '@/lib/apiFetch';

// todo accept date here
interface CreateJournalEntryRequest {
	title: string;
	content: string;
}

export async function createJournalEntry(title: string, content: string) {
	try {
		const userSession = await auth.api.getSession({ headers: headers() })
		if (!userSession?.user) {
			return { success: false, error: 'Not authenticated' }
		}

		const userId = userSession.user.id

		const payload: CreateJournalEntryRequest = {
			title,
			content
		}

		const response = await apiFetch(`/api/journals/${userId}`, {
			method: 'POST',
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			throw new Error('Failed to create journal entry')
		}

		revalidatePath('/app/entries')
		return { success: true }
	} catch (error) {
		console.error(error)
		return { success: false, error: String(error) }
	}
}
