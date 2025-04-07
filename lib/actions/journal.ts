'use server'

import { BACKEND_URL } from '@/lib/backend_url';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface CreateJournalEntryRequest {
	title: string;
	content: string;
}


export async function createJournalEntry(content: string) {
	try {
		const userSession = await auth.api.getSession({ headers: headers() })
		if (!userSession?.user) {
			return { success: false, error: 'Not authenticated' }
		}

		const userId = userSession.user.id
		const date = new Date()
		const title = date.toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		})

		const payload: CreateJournalEntryRequest = {
			title,
			content
		}

		const response = await fetch(`${BACKEND_URL}/journal/create/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			throw new Error('Failed to create journal entry')
		}

		return { success: true }
	} catch (error) {
		return { success: false, error: String(error) }
	}
}
