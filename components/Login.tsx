"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import CustomButton from "@/components/ui/CustomButton";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
	const [agreedToTerms, setAgreedToTerms] = useState(false);

	return (

		<div className="min-h-screen flex flex-col bg-gradient-to-b from-journal-50 to-journal-100">

			<div className="flex-1 flex items-center justify-center px-4 py-12">
				<div className="w-full max-w-md">

					<Card className="shadow-xl border-journal-200 animate-fade-in">
						<CardHeader className="space-y-1">
							<CardTitle className="text-2xl text-center m-2">Welcome back</CardTitle>
							<CardDescription className="text-center">
								Sign in to your reverie account
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">

							<CustomButton
								variant="outline"
								className="w-full border-gray-300 hover:bg-gray-50"
								onClick={() => signIn()}
								disabled={!agreedToTerms}
							>
								<svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
									<path
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
										fill="#4285F4"
									/>
									<path
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
										fill="#34A853"
									/>
									<path
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
										fill="#FBBC05"
									/>
									<path
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
										fill="#EA4335"
									/>
									<path d="M1 1h22v22H1z" fill="none" />
								</svg>
								Sign in with Google
							</CustomButton>
						</CardContent>
						<CardFooter className="flex flex-col space-y-4">
							<div className="flex items-center space-x-2">
								<input
									type="checkbox"
									id="terms-checkbox"
									checked={agreedToTerms}
									onChange={(e) => setAgreedToTerms(e.target.checked)}
									className="h-4 w-4 text-journal-600 border-gray-300 rounded focus:ring-journal-500 accent-journal-500"
								/>
								<label htmlFor="terms-checkbox" className="text-xs text-gray-500">
									I have read and agree to the{" "}
									<Link
										href="/terms"
										target="_blank"
										rel="noopener noreferrer"
										className="text-journal-500 hover:underline"
									>
										Terms of Service
									</Link>{" "}
									and{" "}
									<Link
										href="/privacy"
										target="_blank"
										rel="noopener noreferrer"
										className="text-journal-500 hover:underline"
									>
										Privacy Policy
									</Link>
									.
								</label>
							</div>
							{/* <div className="text-sm text-center">
								Don&apos;t have an account?{" "}
								<Link href="/signup" className="text-journal-500 hover:text-journal-700 transition-colors font-medium">
									Sign up
								</Link>
							</div> */}
							{/* Commenting out the old terms display as it's now part of the checkbox label
							<div className="text-xs text-center text-gray-500">
								By signing in, you agree to our{" "}
								<a href="/tos" className="text-journal-500 hover:underline">
									Terms of Service
								</a>{" "}
								and{" "}
								<a href="/privacy" className="text-journal-500 hover:underline">
									Privacy Policy
								</a>
							</div>
							*/}
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
};
