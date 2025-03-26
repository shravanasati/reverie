import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

export function userAvatar(username: string) {

	const avatar = createAvatar(avataaars, {
		seed: username,
		radius: 40,
		scale: 100,
		size: 64
	});
	
	const img = avatar.toDataUri();
	return img
}

