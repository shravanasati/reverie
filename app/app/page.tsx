import JournalWriter from "@/components/app/JournalEntry";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppPage() {
	const userSession = await auth.api.getSession({ headers: headers() })
	if (!userSession) {
		redirect("/login");
	}

	return (
		<div className="min-h-screen flex flex-row items-center justify-center">
			<JournalWriter />
		</div>
	);
}