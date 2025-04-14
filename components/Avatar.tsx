"use client"

import { Avatar as AvatarUI, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { userAvatar } from "@/lib/avatar";
import { RotateCcw, User } from "lucide-react";
import Link from "next/link";
import { useAvatarStore } from "@/store/avatar-store";
import { useState, useEffect } from "react";

interface AvatarProps {
	username: string;
	size?: number;
	rotateButton?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ username, size, rotateButton }) => {
	const { seed, setSeed } = useAvatarStore();
	const [isLoading, setIsLoading] = useState(false);
	const [currentAvatar, setCurrentAvatar] = useState<string>("");
	const avatarSrc = userAvatar(seed || username, size ?? 64);

	// Set initial avatar on first render
	useEffect(() => {
		setCurrentAvatar(avatarSrc);
	}, [avatarSrc]);

	// Update current avatar when new one is fully loaded
	useEffect(() => {
		if (avatarSrc && !isLoading) {
			setCurrentAvatar(avatarSrc);
		}
	}, [avatarSrc, isLoading]);

	// Preload new avatar image
	const preloadNewAvatar = (newSeed: string) => {
		setIsLoading(true);
		const newAvatarSrc = userAvatar(newSeed, size ?? 64);
		const img = new Image();
		img.onload = () => {
			setSeed(newSeed);
			setIsLoading(false);
		};
		img.src = newAvatarSrc;
	};

	return (
		<div className="relative">
			<Link href={`/profile`}>
				<AvatarUI className={`size-${size ?? 9}`}>
					<AvatarImage
						src={currentAvatar}
						alt={`${username}'s avatar`}
						className="transition-all duration-300 ease-in-out"
					/>
					<AvatarFallback><User /></AvatarFallback>
				</AvatarUI>
			</Link>
			{rotateButton && (
				<button
					className={`absolute -top-1 -right-1 size-6 bg-white rounded-full hover:bg-gray-50 border shadow-sm transition-colors flex items-center justify-center ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`}
					onClick={() => {
						if (!isLoading) {
							const newSeed = Math.random().toString(36).substring(2, 15);
							preloadNewAvatar(username + newSeed);
						}
					}}
					disabled={isLoading}
				>
					<RotateCcw className={`size-3 ${isLoading ? 'animate-spin' : ''}`} />
				</button>
			)}
		</div>
	);
};

export default Avatar;
