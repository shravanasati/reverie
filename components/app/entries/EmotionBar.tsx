import React from "react";
import { Emotion } from "@/types/journal";
import { cn } from "@/lib/utils";

interface EmotionBarProps {
	emotions: Emotion[];
}

export const EmotionBar: React.FC<EmotionBarProps> = ({ emotions }) => {
	// Sort emotions by score in descending order
	const sortedEmotions = [...emotions].sort((a, b) => b.score - a.score);

	// Color mapping for different emotions
	const emotionColors: Record<string, string> = {
		joy: "bg-yellow-400",
		sadness: "bg-blue-400",
		anger: "bg-red-500",
		fear: "bg-purple-500",
		disgust: "bg-green-500",
		surprise: "bg-pink-400",
		neutral: "bg-gray-400",
		default: "bg-gray-300"
	};

	return (
		<div className="w-full">
			<div className="flex w-full h-4 rounded-full overflow-hidden">
				{sortedEmotions.map((emotion, index) => {
					const width = `${Math.max(emotion.score * 100, 3)}%`;
					const color = emotionColors[emotion.label.toLowerCase()] || emotionColors.default;

					return (
						<div
							key={emotion.id || index}
							className={cn(color, "transition-all duration-300")}
							style={{ width }}
							title={`${emotion.label}: ${Math.round(emotion.score * 100)}%`}
						/>
					);
				})}
			</div>

			<div className="flex justify-between mt-2 text-xs text-journal-600">
				{sortedEmotions.slice(0, 3).map((emotion, index) => (
					<div key={emotion.id || index} className="flex items-center gap-1">
						<div
							className={cn(
								"w-2 h-2 rounded-full",
								emotionColors[emotion.label.toLowerCase()] || emotionColors.default
							)}
						/>
						<span>{emotion.label}</span>
						<span className="text-journal-400">
							{Math.round(emotion.score * 100)}%
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

