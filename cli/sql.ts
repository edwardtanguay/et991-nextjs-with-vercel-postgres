import { sql, db } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
	const client = db.connect({
		POSTGRES_URL: process.env.development.local.POSTGRES_URL,
	});

	const result = await sql`CREATE TABLE IF NOT EXISTS Notes ( Body varchar(255) );`;
	console.log(result);
})();