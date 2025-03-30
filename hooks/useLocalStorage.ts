import { useState, useCallback } from 'react';

function debounce<T extends (...args: never[]) => void>(
	func: T,
	wait: number
): (...args: Parameters<T>) => void {
	let timeoutId: NodeJS.Timeout;

	return (...args: Parameters<T>) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => func(...args), wait);
	};
}

export function useLocalStorage<T>(key: string, initialValue: T, debounceDelay:number = 1000) {
	// Initialize state from localStorage or initial value
	const [value, setValue] = useState<T>(() => {
		if (typeof window === 'undefined') return initialValue;
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch {
			return initialValue;
		}
	});

	// Debounced save function
	const debouncedSave = useCallback(
		debounce((newValue: T) => {
			if (typeof window === 'undefined') return;
			try {
				window.localStorage.setItem(key, JSON.stringify(newValue));
			} catch (error) {
				console.error('Error saving to localStorage:', error);
			}
		}, debounceDelay),
		[key]
	);

	// Update state and localStorage
	const setStoredValue = useCallback((newValue: T | ((val: T) => T)) => {
		setValue(newValue);
		const valueToStore = newValue instanceof Function ? newValue(value) : newValue;
		debouncedSave(valueToStore);
	}, [value, debouncedSave]);

	return [value, setStoredValue] as const;
}
