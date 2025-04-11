import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

export function userAvatar(username: string, size: number = 64) {

	const avatar = createAvatar(lorelei, {
		seed: username,
		radius: 40,
		scale: 100,
		size: size
	});
	
	const img = avatar.toDataUri();
	return img
}

