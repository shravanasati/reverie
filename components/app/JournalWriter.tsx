"use client"
import React, { useState, useRef } from "react";
import { format } from "date-fns";
import { CalendarIcon, Save, RefreshCw, Mic, MicOff, PencilIcon } from "lucide-react";
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
import { useLocalStorageState } from "@/hooks/useLocalStorage";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { WritingTips } from "@/components/app/WritingTips";
import { createJournalEntry } from "@/lib/actions/journal";

const JOURNAL_CONTENT_STORAGE_KEY = "journal-entry";
const JOURNAL_TITLE_STORAGE_KEY = "journal-title";

// todo use react query to fetch journal when date is changed
// todo alert to save before changing date

const JournalWriter = () => {
	const [entry, setEntry] = useLocalStorageState(JOURNAL_CONTENT_STORAGE_KEY, "", 500);
	const [title, setTitle] = useLocalStorageState(JOURNAL_TITLE_STORAGE_KEY, "My Journal", 500);
	const titleRef = useRef<HTMLInputElement>(null);
	const [date, setDate] = useState<Date>(new Date());
	const [isSaving, setIsSaving] = useState(false);
	const { toast } = useToast();
	const { isListening, speechSupported, startListening } = useSpeechRecognition();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const recognitionRef = useRef<any>(null);

	const handleSave = async () => {
		if (!title.trim()) {
			toast({ title: "Error", description: "Please write the title before saving.", variant: "destructive" });
			return;
		}
		if (!entry.trim()) {
			toast({ title: "Error", description: "Please write something before saving.", variant: "destructive" });
			return;
		}

		setIsSaving(true);
		const formattedDate = format(date, "yyyy-MM-dd");
		const result = await createJournalEntry(title, entry, formattedDate);
		setIsSaving(false);

		if (result.success) {
			toast({ title: "Success", description: "Journal entry saved successfully!", variant: "default" });
			localStorage.removeItem(JOURNAL_TITLE_STORAGE_KEY);
			localStorage.removeItem(JOURNAL_CONTENT_STORAGE_KEY);
		} else {
			toast({
				title: "Error",
				description: result.error || "Failed to save journal entry",
				variant: "destructive"
			});
		}
	};

	const handleClear = () => {
		setEntry("");
		localStorage.removeItem(JOURNAL_CONTENT_STORAGE_KEY);
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
		<Container className="py-4 sm:py-8 px-4 sm:px-6 max-w-5xl mt-16 sm:mt-10">
			<Card className="bg-white/95 backdrop-blur-sm border-journal-100 shadow-md">
				<CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-journal-100 pb-4 space-y-4 sm:space-y-0">
					<div className="flex items-center gap-2 w-full sm:w-auto">
						<PencilIcon className="text-journal-500 size-5 sm:size-6" onClick={() => { titleRef.current?.select(); }} />
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="text-xl sm:text-2xl font-semibold text-journal-700 bg-transparent border-none focus:outline-none focus:ring-0 w-full sm:w-fit"
							ref={titleRef}
						/>
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

				<CardContent className="pt-4 sm:pt-6">
					<div className="mb-2 text-sm text-journal-500">
						What&apos;s on your mind today?
					</div>

					<Textarea
						value={entry}
						onChange={(e) => setEntry(e.target.value)}
						placeholder="Begin writing your thoughts here..."
						className="min-h-[300px] resize-y border-journal-200 focus-visible:ring-journal-400 text-journal-800 placeholder:text-journal-300"
					/>

					<div className="flex flex-col sm:flex-row gap-3 mt-4">
						<div className="flex gap-2 sm:gap-3 order-1 sm:order-none">
							<CustomButton
								variant="primary"
								className="font-medium flex-1 sm:flex-none"
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

							<AlertDialog>
								<AlertDialogTrigger asChild>
									<CustomButton
										variant="minimal"
										disabled={isSaving || !entry.trim()}
									>
										<RefreshCw className="size-4 mr-1" />
										Clear
									</CustomButton>
								</AlertDialogTrigger>
								<AlertDialogContent>
									<AlertDialogHeader>
										<AlertDialogTitle>Clear journal entry?</AlertDialogTitle>
										<AlertDialogDescription>
											This will permanently delete your current entry. This action cannot be undone.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel>Cancel</AlertDialogCancel>
										<AlertDialogAction onClick={handleClear}>Clear</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
						</div>

						{speechSupported && (
							<CustomButton
								variant={isListening ? "destructive" : "outline"}
								onClick={handleMicToggle}
								className="order-0 sm:order-none sm:ml-auto"
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
			<WritingTips />
		</Container>
	);
};

export default JournalWriter;