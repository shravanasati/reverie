"use client"

import { signOutAction } from "@/lib/actions/signOut"
import CustomButton from "@/components/ui/CustomButton"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { useUserStore } from "@/store/user-store"

export function LogoutButton() {
	const router = useRouter()
	const { toast } = useToast()
	const { removeSession } = useUserStore()
	return (

		<CustomButton variant="minimal" onClick={async () => {
			const resp = await signOutAction()
			if (resp.success) {
				router.push("/")
				toast({
					title: "Sign out successful",
					description: "You have been signed out successfully.",
				})
				removeSession()
			} else {
				console.error("Sign out failed:", resp.error)
				toast({
					title: "Sign out failed",
					description: "An error occurred while signing out. Please try again later.",
					variant: "destructive"
				})
			}
		}} >
			Log out
		</CustomButton>
	)
}