import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const result = await sql`SELECT * FROM Notes;`;
	return NextResponse.json({ result }, { status: 200 });
}