import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar  } from "lucide-react";

export function EntryDetailSkeleton() {
	return (
		<Card className="w-full max-w-[90vw] mx-auto border-journal-100 shadow-md overflow-hidden">
			<CardHeader className="pb-3">
				<div className="flex justify-between items-start">
					<div>
						<div className="flex items-center gap-2 text-journal-500 text-sm mb-2">
							<Calendar size={14} />
							<Skeleton className="h-4 w-24" />
						</div>
						<CardTitle className="flex flex-row items-center text-2xl font-semibold text-journal-800">
							<Skeleton className="h-7 w-48" />
							<Skeleton className="ml-4 h-5 w-5 rounded-full" />
						</CardTitle>
					</div>
					<Skeleton className="h-8 w-20 rounded-full" />
				</div>
			</CardHeader>

			<CardContent>
				<div className="w-full">
					<div className="mb-4 flex space-x-1">
						<Skeleton className="h-10 w-28 rounded-md" />
						<Skeleton className="h-10 w-28 rounded-md" />
					</div>

					<div className="pt-2">
						<div className="space-y-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-3/4" />
							<Skeleton className="h-4 w-full mt-4" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-5/6" />
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
