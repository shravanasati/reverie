export default function TermsOfService() {
	const lastUpdated = new Date("2025-05-20").toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	const appName = "reverie"
	const supportEmail = "support@reverie.tech"

	return (
		<div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
			<h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
			<p className="text-sm text-gray-500 mb-8">Last updated: {lastUpdated}</p>

			<section className="mb-8">
				<p>
					Welcome to <strong>{appName}</strong> (&quot;we&quot;, &quot;our&quot;, or
					&quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our
					AI-powered journaling app (&quot;Service&quot;). By accessing or using our
					Service, you agree to be bound by these Terms.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
				<p>
					By creating an account or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not use the Service.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Eligibility:</strong> You must be at least 13 years old to use the Service.
					</li>
					<li>
						<strong>License:</strong> We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Service for personal, non-commercial purposes, subject to these Terms.
					</li>
					<li>
						<strong>Service Availability:</strong> We strive to keep the Service operational, but we are not liable for any temporary interruptions.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Account Creation:</strong> You may need to register for an account (e.g., via Google authentication) to access certain features.
					</li>
					<li>
						<strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
					</li>
					<li>
						<strong>Accurate Information:</strong> You agree to provide accurate, current, and complete information during the registration process.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Your Content:</strong> You retain ownership of all content, data, and information you submit to the Service (&quot;User Content&quot;), such as journal entries.
					</li>
					<li>
						<strong>License to Us:</strong> By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, store, reproduce, and process your User Content solely for the purpose of operating, providing, and improving the Service (e.g., for AI-powered features like mood analysis and chat).
					</li>
					<li>
						<strong>AI Chat Feature:</strong> If you use our AI-powered chat feature, your conversations may be processed and stored to provide and improve the chat functionality, personalize responses, and enhance the overall Service. We may use anonymized and aggregated chat data for analytics and service improvement.
					</li>
					<li>
						<strong>Responsibility for Content:</strong> You are solely responsible for your User Content and the consequences of posting or publishing it.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">5. Prohibited Conduct</h2>
				<p>You agree not to:</p>
				<ul className="list-disc pl-5 space-y-2 mt-2">
					<li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
					<li>Violate or encourage others to violate the rights of third parties, including intellectual property rights.</li>
					<li>Post, upload, or distribute any content that is unlawful, defamatory, libelous, inaccurate, or that a reasonable person could deem to be objectionable, profane, indecent, pornographic, harassing, threatening, hateful, or otherwise inappropriate.</li>
					<li>Interfere with security-related features of the Service.</li>
					<li>Interfere with the operation of the Service or any user’s enjoyment of it, including by uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code.</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
				<p>
					The Service, including its visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Service (&quot;Materials&quot;) provided by <strong>{appName}</strong> are protected by intellectual property and other laws. All Materials included in the Service are the property of <strong>{appName}</strong> or its third-party licensors.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>By You:</strong> You may terminate your account at any time by contacting us or through account settings, if available.
					</li>
					<li>
						<strong>By Us:</strong> We may suspend or terminate your access to the Service at any time, for any reason, including if you violate these Terms.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">8. Disclaimers</h2>
				<p>
					THE SERVICE IS PROVIDED &quot;AS IS&quot; AND ON AN &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
				<p>
					TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL <strong>{appName}</strong> BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF DAMAGE.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
				<p>
					These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which <strong>{appName}</strong> is based, without regard to its conflict of law principles.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">11. Changes to These Terms</h2>
				<p>
					We reserve the right to modify these Terms at any time. We will post the revised Terms on this page and update the &quot;Last updated&quot; date. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
				</p>
			</section>

			<section>
				<h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
				<p>
					If you have any questions about these Terms, please contact us at{" "}
					<a href={"mailto:" + supportEmail} className="text-blue-600 underline">
						{supportEmail}
					</a>
					.
				</p>
			</section>
		</div>
	);
};
