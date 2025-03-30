"use client"
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CustomButton from "@/components/ui/CustomButton";

const promptsList = [
	"What's the most meaningful thing that happened today?",
	"What's something you're looking forward to?",
	"What's a challenge you're currently facing?",
	"What made you smile today?",
	"What's something you'd like to change about your life?",
	"What's a recent decision you're proud of?",
	"What's something you learned recently?",
	"What's a goal you're working towards?",
	"What's something you're grateful for today?",
	"What's been occupying your thoughts lately?",
	"What's a recent conversation that stuck with you?",
	"What would you do differently if you could restart today?"
];

export const WritingTips = () => {
	const [prompts, setPrompts] = useState<string[]>([]);
	const [key, setKey] = useState(0);

	useEffect(() => {
		setPrompts([...promptsList]
			.sort(() => Math.random() - 0.5)
			.slice(0, 3));
	}, []);

	const rotatePrompts = async () => {
		const button = document.activeElement as HTMLButtonElement;
		button?.blur();

		await new Promise(resolve => setTimeout(resolve, 100));

		setPrompts([...promptsList]
			.sort(() => Math.random() - 0.5)
			.slice(0, 3));
		setKey(prev => prev + 1);
	};

	return (
		<Card className="my-6 bg-white/95 backdrop-blur-sm border-journal-100 shadow-md">
			<CardHeader className="flex flex-row items-center justify-between pb-4">
				<h2 className="text-lg font-medium text-journal-600">
					Confused what to write? Try answering these questions:
				</h2>
				<CustomButton
					variant="ghost"
					onClick={rotatePrompts}
					className="h-8 px-2"
				>
					<RefreshCw className="size-4" />
				</CustomButton>
			</CardHeader>
			<CardContent>
				<ul key={key} className="space-y-2 text-journal-500">
					{prompts.map((prompt) => (
						<li key={prompt} className="flex gap-2">
							<span className="text-journal-400">•</span>
							{prompt}
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};
