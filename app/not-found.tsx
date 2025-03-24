import Link from "next/link";
import Image from "next/image";
import notFoundIllustration from "./not_found.png"

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center">
				<Image src={notFoundIllustration} alt="not found illustration" width={300} height={300} />
				<h1 className="text-4xl font-bold mb-4">404</h1>
				<p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
				<Link href="/" className="text-blue-500 hover:text-blue-700 underline">
					Return to Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;