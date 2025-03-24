import React from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
	return (
		<section className="pt-24 pb-16 md:pt-32 md:pb-24">
			<Container>
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					<div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance animate-fade-in">
							Transform your thoughts with
							<span className="text-gradient block mt-2">AI-powered journaling</span>
						</h1>

						<p className="mt-6 text-lg text-journal-700 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
							Capture your thoughts, receive AI insights, and track your emotional well-being with our intelligent journaling app.
						</p>

						<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
							<Link href={"/app"}>
								<CustomButton variant="primary" size="lg" className="rounded-full px-8 py-6 text-md">
									Start journaling free
									<ArrowRight className="ml-2 size-5" />
								</CustomButton>
							</Link>
							<Link href={"#how-it-works"}>
								<CustomButton variant="minimal" size="lg" className="rounded-full px-8 py-6 text-md">
									See how it works
								</CustomButton>
							</Link>
						</div>

						<div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
							<div className="flex -space-x-2">
								<div className="size-8 rounded-full bg-journal-200 flex items-center justify-center text-xs font-medium text-journal-700">J</div>
								<div className="size-8 rounded-full bg-journal-300 flex items-center justify-center text-xs font-medium text-white">M</div>
								<div className="size-8 rounded-full bg-journal-400 flex items-center justify-center text-xs font-medium text-white">A</div>
								<div className="size-8 rounded-full bg-journal-500 flex items-center justify-center text-xs font-medium text-white">S</div>
							</div>
							<p className="text-sm text-journal-600">
								<span className="font-medium">1,000+</span> people journaling today
							</p>
						</div>
					</div>

					<div className="flex-1 justify-center lg:justify-end animate-fade-in-right hidden sm:flex" style={{ animationDelay: "0.3s" }}>
						<div className="relative w-full max-w-md">
							<div className="absolute inset-0 bg-gradient-to-r from-journal-100 to-journal-200 rounded-2xl transform rotate-3 scale-95 animate-pulse-light"></div>
							<div className="relative glass-card rounded-2xl p-6 shadow-xl animate-float">
								<div className="grid grid-cols-2 gap-4">
									<div className="col-span-2">
										<div className="h-48 bg-journal-50 rounded-lg flex items-center justify-center overflow-hidden">
											<svg width="200" height="170" viewBox="0 0 900 600" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fill="transparent" d="M0 0h900v600H0z" />
												<circle cx="455.8" cy="300" r="165.7" fill="#E1E4E5" />
												<path fill="#fff" d="M182.2 256.6h141.9v200.1H182.2z" />
												<path d="M204.5 337.4c-3.2 0-5.8-1-7.8-2.9-2-2-3-4.5-3-7.5s1-5.6 3-7.6c2-1.9 4.6-2.9 7.8-2.9s5.8 1 7.8 2.9c2 2 3 4.5 3 7.6s-1 5.6-3 7.5c-2 2-4.6 3-7.8 3zm35.8-13.1H226v-4.8h14.3v4.8zm28.7 13.1c-3.1 0-5.7-1-7.7-2.9-2-2-3-4.5-3-7.5s1-5.6 3-7.6c2-1.9 4.6-2.9 7.7-2.9 3.2 0 5.8 1 7.8 2.9 2 2 3 4.5 3 7.6s-1 5.6-3 7.5c-2 2-4.6 3-7.8 3zm35.9-13.1h-14.3v-4.8h14.3v4.8z" fill="#999" />
												<path fill="#FAFAFA" d="M182.2 256.6h141.9v55H182.2z" />
												<path d="M219.4 283.8c-1.4 2.2-4.3 3-8.7 2.5 1-1.9 2.3-3.4 3.9-4.4 1.6-1 3.2-1.4 4.8-1.2 1.6.2 2.3 1.3 2.1 3.1h-2.1zm-4.8-2c-1.6 1-3 2.4-4 4.5 4.4.4 7.3-.3 8.7-2.5.2-1.8-.5-2.9-2.1-3.1-1.6-.2-3.3.2-4.8 1.2h2.2v-.1zm63.9 2c-1.4 2.2-4.3 3-8.7 2.5 1-1.9 2.3-3.4 3.9-4.4 1.6-1 3.2-1.4 4.8-1.2 1.6.2 2.3 1.3 2.1 3.1h-2.1zm-4.8-2c-1.6 1-3 2.4-4 4.5 4.4.4 7.3-.3 8.7-2.5.2-1.8-.5-2.9-2.1-3.1-1.6-.2-3.3.2-4.8 1.2h2.2v-.1zm-29.5 2c-1.4 2.2-4.3 3-8.7 2.5 1-1.9 2.3-3.4 3.9-4.4 1.6-1 3.2-1.4 4.8-1.2 1.6.2 2.3 1.3 2.1 3.1h-2.1zm-4.8-2c-1.6 1-3 2.4-4 4.5 4.4.4 7.3-.3 8.7-2.5.2-1.8-.5-2.9-2.1-3.1-1.6-.2-3.3.2-4.8 1.2h2.2v-.1z" fill="#999" />
												<path d="M290.1 381.2H216v-49.5h74.1v49.5z" fill="#fff" />
												<path d="M247.8 343H226v4.3h21.8v-4.3zm21.4 0h-21.4v4.3h21.4v-4.3zm-21.4 8.5H226v4.2h21.8v-4.2zm21.4 0h-21.4v4.2h21.4v-4.2zm-21.4 8.5H226v4.3h21.8v-4.3zm21.4 0h-21.4v4.3h21.4v-4.3zm-21.4 8.5H226v4.3h21.8v-4.3zm21.4 0h-21.4v4.3h21.4v-4.3z" fill="#E1E4E5" />
												<path d="M724.5 195.7c-1.8-6.7-6.3-12.6-12.7-16.5-6.4-4-14-5.2-21.2-3.3-7.2 1.9-13.4 6.9-17.1 13.8-3.7 6.9-4.5 15-2.2 22.5l53.2-16.5z" fill="#E1E4E5" />
												<path d="M633.3 385.2s13.5-45.2 18.5-66c5-20.8 11.7-29.2 11.7-29.2l41.3 4s-2 19.8-1.3 40.8c.6 21.1 2.3 50.8 2.3 50.8l-72.5-.4z" fill="#E1E4E5" />
												<path d="M644.8 385.1s16.2-46.8 18.4-59c2.2-12 9.6-5.7 11.8-1.5 2.2 4.2 9.5 60.5 9.5 60.5h-39.7z" fill="#fff" />
												<path d="M678.3 330.2c-4.2-1.6-8.8-9.4-9-14-.2-4.4 7.9-22.4 11.1-21.9 3.2.4 17.3 14.7 15.3 18.8-2 4-13.2 19-17.4 17.1z" fill="#fff" />
												<path d="M663.5 290s-30.4 7.5-25 35.4c5.5 28 22.7 8.3 33.2 4.7 10.5-3.5 20.8-8.6 16.7-28-4.2-19.5-24.9-12.1-24.9-12.1z" fill="#E1E4E5" />
												<path d="M675.6 212s14.5 17 14.1 24.4c-.3 7.5-2.2 15.1-10.8 18.4-8.5 3.2-11.8-5.4-11.8-5.4s-4.6 9.6-12.8 7.4c-8.3-2.2-6.8-33.6 21.3-44.8z" fill="#fff" />
												<path d="M709.3 205.3c0 9.8-6.8 17.8-15.2 17.8-8.3 0-15.1-8-15.1-17.8 0-9.9 6.8-17.8 15.1-17.8 8.4 0 15.2 8 15.2 17.8z" fill="#fff" />
												<path d="M678.9 223.1c-1.4-1.3-2.2-3.3-2-5.2.1-1.9 1.2-3.7 3-4.7 1.7-1 4-1.2 5.7-.4 1.8.8 3.3 2.8 3.2 4.8 0 2.1-1.4 4-3.2 5-1.8.9-4 .8-5.8-.1a6 6 0 0 1-1-.6l.1.1c1.8 1 3.9 1.1 5.8.2 1.8-1 3.2-2.9 3.3-5 0-2.1-1.4-4-3.2-4.9-1.8-.8-4-.7-5.8.3-1.7 1-2.8 2.8-3 4.7-.2 2 .6 3.9 2 5.2a10 10 0 0 0 .9.6z" fill="#E1E4E5" />
												<path d="M576 385.7s12.8-48 20.2-64.6c7.4-16.6 18.8-30.8 18.8-30.8l43.7 4s-2.2 19.7-.8 40.7c1.5 21 5.8 50.7 5.8 50.7H576z" fill="#E1E4E5" />
												<path d="M593.5 385.6s13.4-46.3 15.6-58.5c2.2-12 9.6-5.8 11.9-1.5 2.2 4.2 8.2 60 8.2 60H593.5z" fill="#fff" />
												<path d="M617.6 327.5s-7-15.2-8.4-18.7c-1.5-3.5-5.2-1.5-5.2-1.5s-11 17.8-6.7 21.8c4.3 4.1 8.3 1.6 10.5 0 2.1-1.6 9.8-1.6 9.8-1.6z" fill="#fff" />
												<path d="M672.6 225.6c-7.7 33.1-48.5 19.8-50 36.5-1.4 16.8 44 40.2 5.3 52.9" stroke="#E1E4E5" strokeWidth="1.89" strokeMiterlimit="10" />
												<path d="M616.5 290s-30.4 7.5-24.9 35.4c5.4 28 22.6 8.2 33.1 4.7 10.5-3.6 20.8-8.7 16.7-28-4.1-19.5-24.9-12.1-24.9-12.1z" fill="#E1E4E5" />
												<path d="M707 257.4c4.7 0 2.8-25.3-11.8-33-14.7-7.6-33-1.3-33 9.3v8.3c.1 4.6 1.5 15 .7 22.5-.8 7.4-2 9.6-2 9.6 23.2 9.7 46.1-16.7 46.1-16.7z" fill="#E1E4E5" />
											</svg>
										</div>
									</div>
									<div className="col-span-2">
										<div className="h-8 bg-journal-200 rounded-md w-3/4"></div>
									</div>
									<div className="col-span-2">
										<div className="h-28 bg-journal-100 rounded-md p-3">
											<div className="h-3 bg-journal-200 rounded-md w-full mb-2"></div>
											<div className="h-3 bg-journal-200 rounded-md w-5/6 mb-2"></div>
											<div className="h-3 bg-journal-200 rounded-md w-4/6 mb-2"></div>
											<div className="h-3 bg-journal-200 rounded-md w-3/6 mb-2"></div>
										</div>
									</div>
									<div>
										<div className="h-24 bg-journal-50 rounded-md flex items-center justify-center">
											<div className="w-12 h-12 rounded-full bg-journal-200"></div>
										</div>
									</div>
									<div>
										<div className="h-24 bg-journal-50 rounded-md">
											<div className="p-3">
												<div className="h-3 bg-journal-200 rounded-md w-full mb-2"></div>
												<div className="h-3 bg-journal-200 rounded-md w-5/6 mb-2"></div>
												<div className="h-3 bg-journal-200 rounded-md w-4/6"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
