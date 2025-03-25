import { createAuthClient } from "better-auth/client"
export const authClient = createAuthClient()

export const signIn = async () => {
	const data = await authClient.signIn.social({
		provider: "google",
		callbackURL: "/app"
	})
	return data
}

export const signOut = async () => {
	try {
		const result = await authClient.signOut()
		return result
	} catch (error) {
		console.error("Sign out failed:", error)
		throw error
	}
}