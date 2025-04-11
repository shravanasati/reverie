import React, { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, BookOpen } from "lucide-react";

export interface JournalStatsProps {
  data: {
    totalJournals: number;
    currentStreak: number;
    longestStreak: number;
  };
}

export const JournalStats: React.FC<JournalStatsProps> = async ({ data }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-journal-600">Journal Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Suspense fallback={<StatCardSkeleton />}>
          <StatCard 
            title="Total Journals" 
            value={data.totalJournals} 
            icon={<BookOpen className="h-5 w-5 text-journal-500" />}
            description="Entries you've written" 
          />
        </Suspense>
        <Suspense fallback={<StatCardSkeleton />}>
          <StatCard 
            title="Current Streak" 
            value={data.currentStreak} 
            icon={<Calendar className="h-5 w-5 text-journal-500" />}
            description="Days in a row" 
          />
        </Suspense>
        <Suspense fallback={<StatCardSkeleton />}>
          <StatCard 
            title="Longest Streak" 
            value={data.longestStreak} 
            icon={<Award className="h-5 w-5 text-journal-500" />}
            description="Your best record" 
          />
        </Suspense>
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, description }) => {
  return (
    <Card className="overflow-hidden border-journal-100 hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-journal-700">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
};

export const StatCardSkeleton = () => {
	return (
		<Card className="overflow-hidden border-journal-100 animate-pulse">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<div className="h-4 w-24 bg-gray-200 rounded"></div>
				<div className="h-5 w-5 bg-gray-200 rounded-full"></div>
			</CardHeader>
			<CardContent>
				<div className="h-8 w-32 bg-gray-200 rounded"></div>
				<p className="h-4 w-40 bg-gray-200 rounded mt-1"></p>
			</CardContent>
		</Card>
	);
}