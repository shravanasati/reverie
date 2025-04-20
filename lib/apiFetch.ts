import { env } from "@/lib/env";

export async function apiFetch(url: string, options: RequestInit = {}) {
	const headers = new Headers(options.headers || {});
	headers.set("X-API-KEY", `${env.API_KEY}`);
	headers.set("Content-Type", "application/json");

	const response = await fetch(`${env.BACKEND_URL}${url}`, {
		...options,
		headers,
	});

	return response
}

export async function apiFetchJSON<T>(url: string, options: RequestInit = {}): Promise<T> {
	const response = await apiFetch(url, options);
	if (!response.ok) {
		throw new Error(`API cal failed! status: ${response.status}`);
	}

	return await response.json();
}