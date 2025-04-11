import { drizzle } from 'drizzle-orm/node-postgres'; 
import * as schema from "@/lib/db/auth-schema"
import { env } from '@/lib/env';

export const db = drizzle({
	schema: schema,
	connection: {
		connectionString: env.DATABASE_URL,
		// ssl: true
	},
});
