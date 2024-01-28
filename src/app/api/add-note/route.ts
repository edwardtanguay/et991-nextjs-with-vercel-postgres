import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
	const { body, rank } = await req.json();

	try {
		if (!body || !rank) throw new Error('body and rank required');
		const result = await sql`INSERT INTO Notes (body, rank) VALUES (${body}, ${rank})`;
		const {rows} = await sql`SELECT * FROM Notes`;
		return NextResponse.json({addedItem: rows[rows.length -1]})
	}
	catch(error:any) {
		return NextResponse.json({error: error.message}, {status: 500});
	}
}