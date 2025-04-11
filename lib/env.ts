import {z} from "zod"

const envSchema = z.object({
	BETTER_AUTH_SECRET: z.string().min(1),
	BETTER_AUTH_URL: z.string().url(),
	DATABASE_URL: z.string().url(),
	API_KEY: z.string().min(1),
	BACKEND_URL: z.string().url(),
	GOOGLE_CLIENT_ID: z.string().min(1),
	GOOGLE_CLIENT_SECRET: z.string().min(1),
})

export type Env = z.infer<typeof envSchema>
export const env = envSchema.parse(process.env)