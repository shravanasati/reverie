import { drizzle } from 'drizzle-orm/node-postgres'; 
import * as schema from "@/lib/db/auth-schema"

export const db = drizzle({
	schema: schema,
	connection: {
		connectionString: process.env.DATABASE_URL!,
		// ssl: true
	},
});
