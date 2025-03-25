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
			<h1>App</h1>
		</div>
	);
}