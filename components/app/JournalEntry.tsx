"use client"
import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { CalendarIcon, Save, RefreshCw, Mic, MicOff } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/ui/CustomButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { LoadingSpinner } from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

const JournalWriter = () => {
	const [entry, setEntry] = useState("");
	const [date, setDate] = useState<Date>(new Date());
	const [isSaving, setIsSaving] = useState(false);
	const { toast } = useToast();
	const { isListening, speechSupported, startListening } = useSpeechRecognition();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const recognitionRef = useRef<any>(null);

	const handleSave = () => {
		if (!entry.trim()) {
			toast({ title: "Error", description: "Please write something before saving.", variant: "destructive" });
			return;
		}

		setIsSaving(true);

		// Simulate saving to database
		setTimeout(() => {
			setIsSaving(false);
			toast({ title: "Success", description: "Journal entry saved successfully!", variant: "default" });
		}, 1500);
	};

	const handleClear = () => {
		if (entry.trim()) {
			setEntry("");
		}
	};

	const handleMicToggle = () => {
		if (isListening) {
			recognitionRef.current?.stop();
		} else {
			recognitionRef.current = startListening((transcript) => {
				setEntry((prev) => {
					const needsSpace = prev.length > 0 && !prev.endsWith(' ');
					return prev + (needsSpace ? ' ' : '') + transcript;
				});
			});
		}
	};

	return (
		<Container className="py-8 max-w-4xl">
			<Card className="bg-white/95 backdrop-blur-sm border-journal-100 shadow-md">
				<CardHeader className="flex flex-row items-center justify-between border-b border-journal-100 pb-4">
					<div className="flex items-center gap-2">
						<h1 className="text-2xl font-semibold text-journal-700">My Journal</h1>
					</div>

					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								className="border-journal-200 text-journal-700 hover:bg-journal-50"
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{format(date, "MMMM d, yyyy")}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="end">
							<Calendar
								mode="single"
								selected={date}
								onSelect={(newDate) => newDate && setDate(newDate)}
								initialFocus
								className="rounded-md border border-journal-100 pointer-events-auto"
							/>
						</PopoverContent>
					</Popover>
				</CardHeader>

				<CardContent className="pt-6">
					<div className="mb-2 text-sm text-journal-500">
						What&apos;s on your mind today?
					</div>

					<Textarea
						value={entry}
						onChange={(e) => setEntry(e.target.value)}
						placeholder="Begin writing your thoughts here..."
						className="min-h-[300px] resize-y border-journal-200 focus-visible:ring-journal-400 text-journal-800 placeholder:text-journal-300"
					/>

					<div className="flex gap-3 mt-4">
						<CustomButton
							variant="primary"
							className="font-medium"
							onClick={handleSave}
							disabled={isSaving}
						>
							{isSaving ? (
								<>
									<LoadingSpinner size="sm" color="white" />
									<span className="ml-2">Saving...</span>
								</>
							) : (
								<>
									<Save className="size-4 mr-1" />
									Save Entry
								</>
							)}
						</CustomButton>

						<CustomButton
							variant="minimal"
							onClick={handleClear}
							disabled={isSaving || !entry.trim()}
						>
							<RefreshCw className="size-4 mr-1" />
							Clear
						</CustomButton>

						{speechSupported && (
							<CustomButton
								variant={isListening ? "destructive" : "outline"}
								onClick={handleMicToggle}
								className="ml-auto"
							>
								{isListening ? (
									<>
										<MicOff className="size-4 mr-1" />
										Stop Recording
									</>
								) : (
									<>
										<Mic className="size-4 mr-1" />
										Record
									</>
								)}
							</CustomButton>
						)}
					</div>
				</CardContent>
			</Card>
		</Container>
	);
};

export default JournalWriter;