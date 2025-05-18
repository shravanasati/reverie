import Chat from "@/components/app/Chat";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Chat",
	description: "Chat with your journal entries",
};

export default async function ChatPage() {
	const userSession = await auth.api.getSession({ headers: headers() });

	if (!userSession) {
		redirect("/login");
	}
	
	return <Chat />;
}