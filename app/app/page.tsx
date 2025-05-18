import JournalWriter from "@/components/app/JournalWriter";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Journal Writer",
	description: "Write and reflect on your journal entries",
}

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