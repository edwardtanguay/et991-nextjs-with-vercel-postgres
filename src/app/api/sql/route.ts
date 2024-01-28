import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		if (process.env.APP_ENV !== 'development') throw Error('not authorized');

		// CREATE PETS
		// await sql`CREATE TABLE IF NOT EXISTS Pets ( Name varchar(255), Owner varchar(255) );`;

		// CREATE NOTES
		await sql`CREATE TABLE IF NOT EXISTS Notes ( id SERIAL PRIMARY KEY, body varchar(255), rank decimal);`;

		return NextResponse.json("ok", { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}