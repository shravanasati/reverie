'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart as PieChartIcon, BarChart2 } from "lucide-react";
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	Tooltip as RechartsTooltip,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF1919"];

interface JournalChartsClientProps {
	emotionData: Array<{ name: string; value: number }>;
	sentimentData: Array<{ name: string; count: number }>;
}

export const JournalChartsClient = ({ emotionData, sentimentData }: JournalChartsClientProps) => {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{/* Emotion Distribution Chart */}
			<Card className="border-journal-100">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-journal-600 flex items-center">
						<PieChartIcon className="h-5 w-5 mr-2 text-journal-500" />
						Emotion Distribution
					</CardTitle>
				</CardHeader>
				<CardContent>
					{emotionData.length > 0 ? (
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={emotionData}
									cx="50%"
									cy="50%"
									labelLine={false}
									outerRadius={100}
									fill="#8884d8"
									dataKey="value"
									label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
								>
									{emotionData.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									))}
								</Pie>
								<RechartsTooltip />
							</PieChart>
						</ResponsiveContainer>
					) : (
						<div className="flex items-center justify-center h-[300px] text-muted-foreground">
							Not enough data for emotion chart.
						</div>
					)}
				</CardContent>
			</Card>

			{/* Sentiment Score Histogram */}
			<Card className="border-journal-100">
				<CardHeader>
					<CardTitle className="text-lg font-semibold text-journal-600 flex items-center">
						<BarChart2 className="h-5 w-5 mr-2 text-journal-500" />
						Sentiment Score Distribution
					</CardTitle>
				</CardHeader>
				<CardContent>
					{sentimentData.some(bin => bin.count > 0) ? (
						<ResponsiveContainer width="100%" height={300}>
							<BarChart data={sentimentData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
								<CartesianGrid strokeDasharray="3 3" vertical={false} />
								<XAxis dataKey="name" tick={{ fontSize: 12 }} />
								<YAxis allowDecimals={false} tick={{ fontSize: 12 }} width={30} />
								<RechartsTooltip />
								<Bar dataKey="count" fill="#8884d8" name="Journals" />
							</BarChart>
						</ResponsiveContainer>
					) : (
						<div className="flex items-center justify-center h-[300px] text-muted-foreground">
							Not enough data for sentiment chart.
						</div>
					)}
				</CardContent>
			</Card>
		</div>
	);
};
