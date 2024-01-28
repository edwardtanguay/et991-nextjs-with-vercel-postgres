import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const result = await sql`SELECT * FROM Notes ORDER BY Rank DESC;`;
	return NextResponse.json( result.rows , { status: 200 });
}