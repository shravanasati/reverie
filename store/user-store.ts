import { create } from 'zustand';
import { authClient } from "@/lib/auth-client";

interface SessionData {
	user: {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		createdAt: Date;
		updatedAt: Date;
		image?: string | null;
	};
	session: {
		id: string;
		createdAt: Date;
		expiresAt: Date;
		ipAddress?: string | null;
		userAgent?: string | null;
	};
}

interface UserState {
	session: SessionData | null;
	fetchSession: () => Promise<void>;
	removeSession: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
	session: null,
	fetchSession: async () => {
		const sessionData = await authClient.getSession();
		set({ session: sessionData.data });
	},
	removeSession: () => {
		set({ session: null });
	},
}));
