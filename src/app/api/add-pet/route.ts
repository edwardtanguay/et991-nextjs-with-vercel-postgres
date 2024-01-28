import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
	const { name, owner } = await req.json();

	try {
		if (!name || !owner) throw new Error('Pet and owner names required');
		const result = await sql`INSERT INTO Pets (Name, Owner) VALUES (${name}, ${owner})`;
		const {rows} = await sql`SELECT * FROM Pets`;
		return NextResponse.json({addedItem: rows[rows.length -1]})
	}
	catch(error:any) {
		return NextResponse.json({error: error.message}, {status: 500});
	}
}