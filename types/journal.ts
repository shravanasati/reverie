type LabelWithScore = {
	id: number;
	label: string;
	score: number;
}

export type Sentiment = LabelWithScore;
export type Emotion = LabelWithScore;

export interface JournalAnalytics {
	sentiment: Sentiment;
	emotions: Emotion[];
	keywords: string[];
}

export interface JournalEntry {
	id: number;
	title: string;
	content: string;
	createdAt: string;
}

export interface JournalWithAnalytics {
	analytics: JournalAnalytics;
	journal: JournalEntry;
}
