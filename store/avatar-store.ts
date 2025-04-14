import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AvatarState {
	seed: string;
	setSeed: (newSeed: string) => void;
}

export const useAvatarStore = create<AvatarState>()(
	persist(
		(set) => ({
			seed: '',
			setSeed: (newSeed) => set({ seed: newSeed }),
		}),
		{
			name: 'avatar-storage',
		}
	)
);
