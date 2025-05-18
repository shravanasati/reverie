import Unauthorized from "@/components/Unauthorized";
import {Profile} from "@/components/Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const metadata = {
	title: "Profile",
	description: "View and edit your profile",
};

export default async function ProfilePage() {
	const userSession = await auth.api.getSession({ headers: headers() })
	if (!userSession) {
		return <Unauthorized />;
	}

	return (
		<div className="min-h-[90vh] grid place-items-center bg-gray-100">
			<Profile user={userSession.user} />
		</div>
	)
}