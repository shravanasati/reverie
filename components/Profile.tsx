import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Avatar from "./Avatar";
import { format } from "date-fns";

type User = {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
	image?: string | null | undefined | undefined;
}

export function Profile({ user }: { user: User }) {
	return (
		<Card className="w-full max-w-2xl mx-auto shadow-md rounded-lg">
			<CardHeader className="flex flex-row items-center gap-4">
				<Avatar username={user.name} />
				<div>
					<h2 className="text-2xl font-bold">{user.name}</h2>
					<p className="text-gray-500">{user.email}</p>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span className="text-gray-500">Email verified:</span>
						<span>{user.emailVerified ? "Yes" : "No"}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-500">Member since:</span>
						<span>{format(user.createdAt, 'PPP')}</span>
					</div>
					<div className="flex justify-between text-sm">
						<span className="text-gray-500">Last updated:</span>
						<span>{format(user.updatedAt, 'PPP')}</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}