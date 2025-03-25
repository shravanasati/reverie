import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db"; // your drizzle instance
import { nextCookies } from "better-auth/next-js";
import { cache } from "react";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg", // or "mysql", "sqlite"
	}),
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [nextCookies()]
});

export const getSession = cache(auth.api.getSession)