interface User {
	id: string;
	name: string;
	email: string;
	emailVerified: boolean;
	image: string;
	createdAt: string;
	updatedAt: string;
}

export interface JournalEntry {
	id: number;
	user: User;
	title: string;
	content: string;
	createdAt: string;
}
