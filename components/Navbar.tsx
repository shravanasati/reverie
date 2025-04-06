"use client"
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { authClient } from "@/lib/auth-client" // import the auth client
import { signOutAction } from "@/lib/actions/signOut";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import logo_base from "@/app/logo_base.png"

interface SessionData {
	user: {
		id: string;
		name: string;
		email: string;
		emailVerified: boolean;
		createdAt: Date;
		updatedAt: Date;
		image?: string | null;
	};
	session: {
		id: string;
		createdAt: Date;
		expiresAt: Date;
		ipAddress?: string | null;
		userAgent?: string | null;
	};
}

const landingPageNavItems = [
	{ name: "Features", href: "#features" },
	{ name: "How it works", href: "#how-it-works" },
	{ name: "App", href: "/app" },
]

const appNavItems = [
	{ name: "Journal", href: "/app" },
	{ name: "Entries", href: "/app/entries" },
	{ name: "Insights", href: "/app/insights" },
	{ name: "Chat", href: "/app/chat" },
]

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const [session, setSession] = useState<SessionData | null>(null);
	const router = useRouter()
	const { toast } = useToast()
	const fetchSession = async () => {
		const sessionData = await authClient.getSession()
		setSession(sessionData.data)
	}
	useEffect(() => {
		fetchSession()
	}, [])

	const pathname = usePathname()
	const isLandingPage = pathname === "/"
	const isAppPage = pathname.startsWith("/app")

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
					{/* <BookOpen className="h-8 w-8 text-journal-600" /> */}
					<Image src={logo_base} alt="logo" className="size-8" />
					<span className="text-xl font-medium">
						<span className="text-journal-700">reverie</span>
					</span>
				</Link>

				<nav className="hidden md:flex items-center space-x-6">
					{isLandingPage && landingPageNavItems.map((item) => {
						return (
							<Link href={item.href} className="text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors" key={item.name}>
								{item.name}
							</Link>
						)
					})}
					{isAppPage && appNavItems.map((item) => {
						return (
							<Link 
								href={item.href} 
								className={`text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors ${
									(item.href === pathname) ? 'text-primary' : ''
								}`} 
								key={item.name}
							>
								{item.name}
							</Link>
						)
					})}
				</nav>

				{
					session ? (
						<div className="flex items-center space-x-4">
							<Avatar username={session.user.name} />
							<CustomButton variant="minimal" className="hidden sm:flex" onClick={async () => {
								const resp = await signOutAction()
								if (resp.success) {
									router.push("/")
									toast({
										title: "Sign out successful",
										description: "You have been signed out successfully.",
									})
									await fetchSession()
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