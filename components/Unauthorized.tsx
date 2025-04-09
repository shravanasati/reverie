import Link from "next/link";
import Image from "next/image";
import authentication from "./authentication.png"

const Unauthorized = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="text-center">
				<Image src={authentication} alt="unauthorized illustration" width={300} height={300} className="ml-16" />
				<h1 className="text-4xl font-bold mb-4">403</h1>
				<p className="text-xl text-gray-600 mb-4">Unauthorized! You&apos;re not allowed to access this page</p>
				<Link href="/login" className="text-blue-500 hover:text-blue-700 underline">
					Login to continue
				</Link>
			</div>
		</div>
	);
};

export default Unauthorized;