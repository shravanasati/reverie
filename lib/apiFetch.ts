import { env } from "@/lib/env";

export async function apiFetch(url: string, options: RequestInit = {}, tags: string[]): Promise<Response> {
	const headers = new Headers(options.headers || {});
	headers.set("X-API-KEY", `${env.API_KEY}`);
	headers.set("Content-Type", "application/json");

	const nextOptions = { next: {} }
	if (options.method === "GET") {
		nextOptions.next = {
			revalidate: 300,
			tags: tags,
		}
	}

	const response = await fetch(`${env.BACKEND_URL}${url}`, {
		...options,
		headers,
		next: {
			...nextOptions.next,
		}
	});

	return response
}

export async function apiFetchJSON<T>(url: string, options: RequestInit = {}, tags: string[]): Promise<T> {
	const response = await apiFetch(url, options, tags);
	if (!response.ok) {
		throw new Error(`API call failed! status: ${response.status}`);
	}

	return await response.json();
}