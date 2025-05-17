import React, { Suspense } from "react";
import { JournalChartsClient } from "./JournalChartsClient";
import { type JournalStatsProps } from "./JournalStats";
import { Emotion, Sentiment } from "@/types/journal";

// todo sentiments over time

const processEmotionData = (emotions: Emotion[]) => {
	// todo aggregate score of emotions instead of count
	const counts: { [key: string]: number } = {};
	emotions.forEach((emotion) => {
		if (emotion.score <= 0.1) return; // ignore low confidence emotions
		counts[emotion.label] = (counts[emotion.label] || 0) + 1;
	});
	return Object.entries(counts).map(([name, value]) => ({ name, value }));
};

const processSentimentData = (sentiments: Sentiment[]) => {
	const bins = [
		{ name: "Very Neg", range: [-1, -0.6], count: 0 },
		{ name: "Negative", range: [-0.6, -0.2], count: 0 },
		{ name: "Neutral", range: [-0.2, 0.2], count: 0 },
		{ name: "Positive", range: [0.2, 0.6], count: 0 },
		{ name: "Very Pos", range: [0.6, 1], count: 0 },
	];

	const sentimentScores = sentiments.map(s => s.label === "POSITIVE" ? s.score : -s.score );

	sentimentScores.forEach((score) => {
		for (const bin of bins) {
			// Adjust range check for inclusivity at boundaries
			if (score >= bin.range[0] && (score < bin.range[1] || (bin.range[1] === 1 && score <= 1))) {
				// Special case for the last bin to include 1.0
				if (bin.name === "Very Pos" && score === 1.0) {
					bin.count++;
					break;
				}
				// Handle the neutral bin boundary precisely
				if (bin.name === "Neutral" && score === 0.2) {
					continue; // Let the next bin handle 0.2
				}
				// Handle the negative bin boundary precisely
				if (bin.name === "Negative" && score === -0.2) {
					continue; // Let the neutral bin handle -0.2
				}
				// Handle the very negative bin boundary precisely
				if (bin.name === "Very Neg" && score === -0.6) {
					continue; // Let the negative bin handle -0.6
				}
				// Handle the positive bin boundary precisely
				if (bin.name === "Positive" && score === 0.6) {
					continue; // Let the very positive bin handle 0.6
				}

				bin.count++;
				break;
			}
		}
	});

	// Ensure the last bin includes exactly 1.0 if present
	const scoreOne = sentimentScores.find(s => s === 1.0);
	if (scoreOne && bins[bins.length - 1].range[1] === 1) {
		let foundInBin = false;
		bins.forEach(bin => {
			if (bin.range[0] <= 1.0 && bin.range[1] >= 1.0 && bin.count > 0) {
				// Check if 1.0 was already counted in this bin
				const scoresInBin = sentimentScores.filter(s => s >= bin.range[0] && s <= bin.range[1]);
				if (scoresInBin.includes(1.0)) {
					foundInBin = true;
				}
			}
		});
		// If 1.0 wasn't counted but exists, add it to the last bin
		if (!foundInBin && sentimentScores.includes(1.0)) {
			const lastBin = bins.find(b => b.name === "Very Pos");
			if (lastBin) lastBin.count++;
		}
	}


	return bins.map(({ name, count }) => ({ name, count }));
};

export const JournalCharts = ({ data }: JournalStatsProps) => {
	const emotionData = processEmotionData(data.emotions);
	const sentimentData = processSentimentData(data.sentiments);

	return (
		<Suspense fallback={<ChartSkeleton />}>
			<JournalChartsClient
				emotionData={emotionData}
				sentimentData={sentimentData}
			/>
		</Suspense>
	);
};

export const ChartSkeleton = () => { // Add export
	return (
		<div className="w-full h-[300px] bg-gray-100 rounded animate-pulse flex items-center justify-center">
			<p className="text-gray-400">Loading chart...</p>
		</div>
	);
};

