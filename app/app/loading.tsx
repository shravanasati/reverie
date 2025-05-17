import { LoadingSpinner } from "@/components/ui/spinner";

export default function Loading() {
	return (
		<section className="flex h-screen items-center justify-center">
			<div className="flex flex-col items-center justify-center space-y-4">
				<LoadingSpinner />
				{/* <p className="text-lg text-gray-500">Loading...</p> */}
			</div>
		</section>
	);
}