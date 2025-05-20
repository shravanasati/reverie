export default function PrivacyPolicy() {
	const lastUpdated = new Date("2025-05-20").toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
	const appName = "reverie"
	const supportEmail = "support@reverie.tech"

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: {lastUpdated}</p>

      <section className="mb-8">
        <p>
          Thank you for using <strong>{appName}</strong> (&quot;we&quot;, &quot;our&quot;, or
          &quot;us&quot;). Your privacy is important to us. This Privacy Policy explains
          how we collect, use, and protect your information when using our
          AI-powered journaling app (&quot;Service&quot;).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Personal Information:</strong> Google account info (name,
            email), IP address, browser details.
          </li>
          <li>
            <strong>Journal Data:</strong> Your entries are stored securely and
            used only for AI features like mood analysis and summaries.
          </li>
          <li>
            <strong>Usage Data:</strong> We collect usage metrics to improve
            performance and user experience.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To authenticate your account.</li>
          <li>To store and analyze journal entries.</li>
          <li>To power AI features like summaries and search.</li>
          <li>To improve and personalize your experience.</li>
          <li>To communicate updates or support info.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Data Sharing and Disclosure</h2>
        <p>
          We do <strong>not</strong> sell or rent your data. We may share it
          only with trusted service providers or if required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
        <p>
          We use industry-standard security practices, including HTTPS{/*, data
          encryption at rest and in transit,*/} and limited staff access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Choices</h2>
        <p>
          Depending on your location, you may request to view, update, export,
          or delete your data. Contact us at{" "}
          <a href={"mailto:"+supportEmail} className="text-blue-600 underline">
           {supportEmail} 
          </a>{" "}
          to make a request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p>
          We keep your data only while your account is active. Upon deletion
          request, all associated data will be removed from our systems.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
        <p>
          We may integrate with third-party services (e.g., Google for login).
          Their policies govern how they use your data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
        <p>
          Our app is not intended for users under 13. We do not knowingly
          collect data from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. Changes will be posted here with
          the &quot;Last updated&quot; date revised accordingly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          Questions? Reach out to us at{" "}
          <a href={"mailto:"+supportEmail} className="text-blue-600 underline">
						{supportEmail}
          </a>
          .
        </p>
      </section>
    </div>
  );
};

