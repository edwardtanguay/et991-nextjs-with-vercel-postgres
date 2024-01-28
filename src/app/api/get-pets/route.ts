import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const pets = await sql`SELECT * FROM Pets;`;
	return NextResponse.json({ pets: pets.rows }, { status: 200 });
}