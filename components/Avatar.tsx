import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userAvatar } from "@/lib/avatar";
import { User } from "lucide-react";
import Link from "next/link";

interface AvatarProps {
	username: string;
}

const Avatar: React.FC<AvatarProps> = ({ username }) => {
	const avatarSrc = userAvatar(username);

	return (
		<Link href={`/profile`}>
			<AvatarUI>
				<AvatarImage src={avatarSrc} alt={`${username}'s avatar`} />
				<AvatarFallback><User /></AvatarFallback>
			</AvatarUI>
		</Link>
	);
};

export default Avatar;
