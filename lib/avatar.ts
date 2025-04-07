import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';

export function userAvatar(username: string) {

	const avatar = createAvatar(thumbs, {
		seed: username,
		radius: 40,
		scale: 100,
		size: 64
	});
	
	const img = avatar.toDataUri();
	return img
}

