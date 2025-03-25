import Login from "@/components/Login";
import { getSession } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginPage() {
	const userSession = await getSession({ headers: headers() })
	if (userSession) {
		redirect("/app");
	}
	return (<Login />);
};
