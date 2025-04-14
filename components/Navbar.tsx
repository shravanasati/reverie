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
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 

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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
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

	// Function to toggle mobile menu
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Close mobile menu when path changes
	useEffect(() => {
		setIsMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		// Cleanup function to reset overflow when component unmounts
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);


	return (
		<>
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

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-6">
						{isLandingPage && landingPageNavItems.map((item) => (
							<Link href={item.href} className="text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors" key={item.name}>
								{item.name}
							</Link>
						))}
						{isAppPage && appNavItems.map((item) => (
							<Link
								href={item.href}
								className={`text-sm font-medium text-journal-700 hover:text-journal-500 transition-colors ${(item.href === pathname) ? 'text-primary' : ''}`}
								key={item.name}
							>
								{item.name}
							</Link>
						))}
					</nav>

					{/* Right side elements (Auth buttons/Avatar) */}
					<div className="hidden md:flex items-center space-x-4">
						{session ? (
							<>
								<Avatar username={session.user.name} size={52} />
								<LogoutButton />
							</>
						) : (
							<>
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
							</>
						)}
					</div>

					{/* Hamburger Menu Button - Icon swap */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMobileMenu}
							className="text-journal-700 focus:outline-none relative z-50" // Ensure button is clickable above menu
							aria-label="Toggle menu"
						>
							{/* AnimatePresence for smooth icon transition */}
							<AnimatePresence initial={false} mode="wait">
								<motion.div
									key={isMobileMenuOpen ? 'x' : 'menu'}
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.2 }}
								>
									{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
								</motion.div>
							</AnimatePresence>
						</button>
					</div>
				</Container>
			</header>

			{/* Mobile Menu Overlay with Animation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						// Animation variants for slide-in/out from right
						initial={{ x: "100%" }} // Start off-screen to the right
						animate={{ x: 0 }}      // Animate to x: 0 (on-screen)
						exit={{ x: "100%" }}   // Animate back off-screen to the right
						transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }} // Smooth transition
						className="fixed inset-0 z-40 bg-white md:hidden" // Keep existing styles
					>
						<Container className="flex flex-col h-full pt-20"> {/* Adjust pt to match header height */}
							{/* No need for the close button here anymore as it's handled by the header button */}
							{/* <div className="flex justify-end mb-6"> ... </div> */}

							{/* Mobile Navigation Links */}
							<nav className="flex flex-col items-center space-y-6 mt-8"> {/* Added margin-top */}
								{isLandingPage && landingPageNavItems.map((item) => (
									<Link href={item.href} className="text-lg font-medium text-journal-700 hover:text-journal-500 transition-colors" key={item.name} onClick={toggleMobileMenu}>
										{item.name}
									</Link>
								))}
								{isAppPage && appNavItems.map((item) => (
									<Link
										href={item.href}
										className={`text-lg font-medium text-journal-700 hover:text-journal-500 transition-colors ${(item.href === pathname) ? 'text-primary' : ''}`}
										key={item.name}
										onClick={toggleMobileMenu} // Close menu on link click
									>
										{item.name}
									</Link>
								))}
							</nav>

							{/* Mobile Auth Buttons/User Info */}
							<div className="mt-auto flex flex-col items-center space-y-4 pb-10">
								{session ? (
									<>
										<Avatar username={session.user.name} size={52} />
										{/* Ensure LogoutButton also closes the menu if needed, or keep as is */}
										<LogoutButton />
									</>
								) : (
									<>
										<Link href="/login" className="w-full" onClick={toggleMobileMenu}>
											<CustomButton variant="minimal" className="w-full">
												Log in
											</CustomButton>
										</Link>
										<Link href={"/app"} className="w-full" onClick={toggleMobileMenu}>
											<CustomButton variant="primary" className="w-full">
												Get Started
											</CustomButton>
										</Link>
									</>
								)}
							</div>
						</Container>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;