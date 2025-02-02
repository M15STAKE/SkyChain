import { NextResponse } from "next/server";

export async function POST() {
    try {
        return NextResponse.json({ message: 'Hola' });
    } catch (e: unknown) {
        return NextResponse.json(
            {
                message: e,
            },
            {
                status: 500,
            }
        );
    }
}