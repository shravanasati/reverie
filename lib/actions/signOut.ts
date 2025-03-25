"use server"

import { headers } from "next/headers"
import { auth } from "../auth"

export async function signOutAction() {
	try {
		await auth.api.signOut({ headers: headers() })
		return { success: true }
	} catch (e) {
		console.error("Sign out failed:", e)
		return { success: false, error: (e as Error).message }
	}
}