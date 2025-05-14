import { parse, format, isValid } from "date-fns"

// This function checks if a date string is valid, and in format YYYY-MM-DD
export function isValidDateString(date: string): boolean {
	const parsedDate = parse(date, "yyyy-MM-dd", new Date());
	return isValid(parsedDate)
}

// This function formats the given date to YYYY-MM-DD format
export function formatDateYYYYMMDD(date: Date): string {
	return format(date, "yyyy-MM-dd")
}