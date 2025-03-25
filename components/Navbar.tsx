"use client"
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import CustomButton from "@/components/ui/CustomButton";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client" // import the auth client
import { signOutAction } from "@/lib/actions/signOut";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [session, setSession] = useState(null)
	const router = useRouter()
	const {toast} = useToast()
	useEffect(() => {
		const fetchSession = async () => {
			const sessionData = await authClient.getSession()
			// @ts-expect-error my ass
			setSession(sessionData.data)
		}
		fetchSession()
		}
	, [session])
	console.log(session)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
				}`}
		>
			<Container className="flex items-center justify-between">
				<Link href="/" className="flex items-center space-x-2">
					<BookOpen className="h-8 w-8 text-journal-600" />
					<span className="text-xl font-medium">
						<span className="text-journal-700">reverie</span>
					</span>
				</Link>

				<nav className="hidden md:flex items-center space-x-6">
					<Link href="#features" className="text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors">
						Features
					</Link>
					<Link href="#how-it-works" className="text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors">
						How it works
					</Link>
					<Link href="#pricing" className="text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors">
						Pricing
					</Link>
				</nav>

				{
					session ? (
						<div className="flex items-center space-x-4">
							<CustomButton variant="minimal" className="hidden sm:flex" onClick={async () => {
								const resp = await signOutAction()
								if (resp.success) {
									setSession(null)
									router.push("/")
									toast({
										title: "Sign out successful",
										description: "You have been signed out successfully.",
									})	
								} else {
									console.error("Sign out failed:", resp.error)
									toast({
										title: "Sign out failed",
										description: "An error occurred while signing out. Please try again later.",
										variant: "destructive"
									})
								}
							}} >
								Log out
							</CustomButton>
						</div>
					) : (

						<div className="flex items-center space-x-4">
							<Link href="/login">
								<CustomButton variant="minimal" className="hidden sm:flex">
									Log in
								</CustomButton>
							</Link>
							<Link href={"/app"}>
								<CustomButton variant="primary">
									Get Started
								</CustomButton>
							</Link>
						</div>
					)
				}
			</Container>
		</header>
	);
};

export default Navbar;