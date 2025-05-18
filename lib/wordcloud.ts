import { apiFetch } from "@/lib/apiFetch";

export async function fetchWordCloud(userId: string): Promise<{
	success: boolean;
	data?: string;
	error?: string;
}> {
	try {
		const response = await apiFetch(`/api/wordcloud/user/${userId}`, {}, ["wordcloud"]);

		if (response.status === 204) {
			return { success: false, error: "No data available for word cloud" };
		}

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const buffer = await response.arrayBuffer();
		const base64Data = Buffer.from(buffer).toString('base64');
		const dataUrl = `data:${response.headers.get('content-type') || 'image/png'};base64,${base64Data}`;
		return { success: true, data: dataUrl };
	} catch (error) {
		console.error("Failed to fetch word cloud:", error);
		return { success: false, error: String(error) };
	}
}
