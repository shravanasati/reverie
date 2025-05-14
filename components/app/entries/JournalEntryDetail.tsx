import React from "react";
import { format, parseISO } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JournalWithAnalytics } from "@/types/journal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmotionBar } from "./EmotionBar";
import { KeywordCloud } from "./KeywordCloud";
import { BookOpen, Calendar, Pencil, PieChart } from "lucide-react";
import Link from "next/link";

interface JournalEntryDetailProps {
	data: JournalWithAnalytics;
}

const JournalEntryDetail: React.FC<JournalEntryDetailProps> = ({ data }) => {
	const { journal, analytics } = data;
	const { sentiment, emotions, keywords } = analytics;

	// Helper for formatted date
	const formattedDate = journal.createdAt ?
		format(parseISO(journal.createdAt), "MMMM d, yyyy") :
		"No date";

	// Determine sentiment color
	let sentimentColor = "bg-gray-100 text-gray-600";
	if (sentiment.label === "POSITIVE") {
		sentimentColor = "bg-green-100 text-green-600";
	} else if (sentiment.label === "NEGATIVE") {
		sentimentColor = "bg-red-100 text-red-600";
	} else if (sentiment.label === "NEUTRAL") {
		sentimentColor = "bg-blue-100 text-blue-600";
	}

	// Helper for content display with paragraphs
	const contentParagraphs = journal.content.split("\n").map((paragraph, i) => (
		<p key={i} className={i > 0 ? "mt-4" : ""}>
			{paragraph}
		</p>
	));

	// The component that shows analytics in either drawer (mobile) or dialog (desktop)
	const AnalyticsDetail = () => (
		<>
			<div className="space-y-4">
				<div>
					<h3 className="text-sm font-medium text-muted-foreground mb-2">Sentiment Analysis</h3>
					<div className="flex items-center gap-2">
						<div className={`px-3 py-1 rounded-full text-sm font-medium ${sentimentColor}`}>
							{sentiment.label}
						</div>
						<span className="text-sm text-journal-500">
							{Math.round(sentiment.score * 100)}% confidence
						</span>
					</div>
				</div>

				<div>
					<h3 className="text-sm font-medium text-muted-foreground mb-2">Emotional Composition</h3>
					<EmotionBar emotions={emotions} />
				</div>

				<div>
					<h3 className="text-sm font-medium text-muted-foreground mb-2">Keywords</h3>
					<KeywordCloud keywords={keywords} />
				</div>
			</div>
		</>
	);

	return (
		<Card className="w-full max-w-[90vw] mx-auto border-journal-100 shadow-md overflow-hidden">

			<CardHeader className="pb-3">
				<div className="flex justify-between items-start">
					<div>
						<div className="flex items-center gap-2 text-journal-500 text-sm mb-2">
							<Calendar size={14} />
							<span>{formattedDate}</span>
						</div>
						<CardTitle className="flex flex-row items-center text-2xl font-semibold text-journal-800">
							{journal.title}
							<Link href={`/app?date=${data.journal.createdAt}`} className="ml-4 text-journal-500 hover:text-journal-700 ">
								<Pencil className="size-5" />
							</Link>
						</CardTitle>
					</div>

					<div className={`px-3 py-1 rounded-full text-sm font-medium ${sentimentColor} flex items-center gap-1`}>
						<span>{sentiment.label}</span>
					</div>
				</div>
			</CardHeader>

			<CardContent>
				<Tabs defaultValue="content" className="w-full">
					<TabsList className="mb-4">
						<TabsTrigger value="content" className="flex items-center gap-2">
							<BookOpen size={16} />
							<span>Content</span>
						</TabsTrigger>
						<TabsTrigger value="analytics" className="flex items-center gap-2">
							<PieChart size={16} />
							<span>Analytics</span>
						</TabsTrigger>
					</TabsList>

					<TabsContent value="content" className="pt-2">
						<div className="prose prose-journal text-journal-700 max-w-none">
							{contentParagraphs}
						</div>
					</TabsContent>

					<TabsContent value="analytics" className="pt-2">
						<AnalyticsDetail />
					</TabsContent>
				</Tabs>
			</CardContent>

			{/* <CardFooter className="pt-0 pb-4 px-6">
				{isDesktop ? (
					<Dialog>
						<DialogTrigger asChild>
							<button className="text-sm text-journal-500 hover:text-journal-700 flex items-center gap-1">
								<MessageSquare size={14} />
								<span>View Full Analytics</span>
							</button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-md">
							<div className="space-y-4 py-4">
								<h2 className="text-lg font-semibold text-journal-700">
									Journal Analytics
								</h2>
								<AnalyticsDetail />
							</div>
						</DialogContent>
					</Dialog>
				) : (
					<Drawer>
						<DrawerTrigger asChild>
							<button className="text-sm text-journal-500 hover:text-journal-700 flex items-center gap-1">
								<MessageSquare size={14} />
								<span>View Full Analytics</span>
							</button>
						</DrawerTrigger>
						<DrawerContent>
							<div className="px-4 py-6 max-w-md mx-auto">
								<h2 className="text-lg font-semibold text-journal-700 mb-4">
									Journal Analytics
								</h2>
								<AnalyticsDetail />
							</div>
						</DrawerContent>
					</Drawer>
				)}
			</CardFooter> */}
		</Card>
	);
};

export default JournalEntryDetail;