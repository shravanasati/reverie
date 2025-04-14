"use client"

import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userAvatar } from "@/lib/avatar";
import { RotateCcw, User } from "lucide-react";
import Link from "next/link";
import { useAvatarStore } from "@/store/avatar-store";

interface AvatarProps {
	username: string;
	size?: number;
	rotateButton?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ username, size, rotateButton }) => {
	const { seed, setSeed } = useAvatarStore();
	const avatarSrc = userAvatar(seed || username, size ?? 64);

	return (
		<div className="relative">
			<Link href={`/profile`}>
				<AvatarUI className={`size-${size ?? 9}`}>
					<AvatarImage src={avatarSrc} alt={`${username}'s avatar`} />
					<AvatarFallback><User /></AvatarFallback>
				</AvatarUI>
			</Link>
			{rotateButton && (
				<button
					className="absolute -top-1 -right-1 size-6 bg-white rounded-full hover:bg-gray-50 border shadow-sm transition-colors flex items-center justify-center"
					onClick={() => {
						const newSeed = Math.random().toString(36).substring(2, 15);
						setSeed(username + newSeed);
					}}
				>
					<RotateCcw className="size-3" />
				</button>
			)}
		</div>
	);
};

export default Avatar;
