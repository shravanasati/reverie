async function wakeupService(url: string) {
	console.log(`Waking up service at ${url}`);
	await fetch(url)
	console.log(`Service at ${url} is awake`);
}

export async function register() {
	console.log("Registering instrumentation");
	// ! don't await promises, just fire and forget
	if (process.env.BACKEND_URL) {
		wakeupService(process.env.BACKEND_URL);
	}
	if (process.env.NLP_SERVICE_URL) {
		wakeupService(process.env.NLP_SERVICE_URL);
	}
	console.log("Instrumentation registered");
}