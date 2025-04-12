"use client"
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import Image from "next/image";
import explosion from "./explosion.png"

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {

	useEffect(() => {
		console.error("Error occurred:", error);
	}, [error]);

	const errorMessage = error.message || "An unexpected error occurred.";

	return (
		<div className="fixed inset-0 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm z-50">
			<Card className="w-full max-w-md overflow-hidden shadow-lg border-journal-200 animate-fade-in">
				<div className="p-6">
					<div className="mb-6 flex items-center justify-center">
						<div className="relative">
							<div className="absolute inset-0 bg-red-200 rounded-full animate-pulse"></div>
							<div className="relative h-16 w-16 rounded-full bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center">
								<Image src={explosion} alt="eksplossion" width={64} height={64} className="rounded-full" />
							</div>
						</div>
					</div>

					<h2 className="text-center text-2xl font-bold mb-3 text-gray-800">
						Something went wrong
					</h2>

					<p className="text-center text-gray-600 mb-6">
						We&apos;ve encountered an unexpected error. Please try again or contact support if the problem persists.
					</p>

					<div className="bg-gray-50 p-4 rounded-md mb-6 border border-gray-100">
						<p className="font-mono text-sm text-gray-700 break-words">
							{errorMessage}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 justify-center">
							<Button
								variant="outline"
								className="flex items-center gap-2 border-journal-200 hover:bg-journal-50"
								onClick={reset}
							>
								Try Again
							</Button>

						<Button
							className="flex items-center gap-2 bg-journal-500 hover:bg-journal-600 text-white"
							onClick={() => window.location.reload()}
						>
							<RefreshCw className="h-4 w-4" />
							Reload Page
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};