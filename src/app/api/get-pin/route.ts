import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	// return NextResponse.json({ pin: process.env.APP_PIN }, { status: 200 });
	return NextResponse.json({ pin: process.env.APP_PIN}, { status: 200 });
}