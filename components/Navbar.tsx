"use client"
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "@/components/Avatar";
import Image from "next/image";
import logo_base from "@/app/logo_base.png"
import { LogoutButton } from "@/components/Logout";
import { useUserStore } from "@/store/user-store";

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
	const { session, fetchSession } = useUserStore();

	useEffect(() => {
		fetchSession();
	}, [fetchSession]);

	const pathname = usePathname();
	const isLandingPage = pathname === "/"
	const isAppPage = pathname.startsWith("/app") || pathname === "/profile"

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
								className={`text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors ${(item.href === pathname) ? 'text-primary' : ''
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
							<Avatar username={session.user.name} size={52} />
							<LogoutButton />
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