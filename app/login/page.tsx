import Login from "@/components/Login";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
	const userSession = await auth.api.getSession({headers: headers()})
	if (userSession) {
		redirect("/app");
	}
	return (<Login />);
};
