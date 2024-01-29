// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
// 	const result = await sql`SELECT * FROM Notes ORDER BY Rank DESC;`;
// 	return NextResponse.json( result, { status: 200 });
// }

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
	// const { app_pin, body, rank } = await req.json();

	try {
		// if (app_pin !== process.env.APP_PIN) throw Error('not authorized');
		// if (!body || !rank) throw new Error('body and rank required');
		const result = await sql`INSERT INTO Notes (body, rank) VALUES ('test', 2)`;
		const {rows} = await sql`SELECT * FROM Notes`;
		return NextResponse.json(rows)
	}
	catch(error:any) {
		return NextResponse.json({error: error.message}, {status: 500});
	}
}