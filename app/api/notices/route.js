import { NextResponse } from "next/server";

// Ye ek temporary list hai jo aapke laptop ki memory mein rahegi
let notices = [{
    _id: "1",
    title: "Welcome to the new School Portal!",
    date: new Date().toISOString()
}];

export async function GET() {
    // Website ko list bhejo
    return NextResponse.json(notices);
}

export async function POST(req) {
    const body = await req.json();

    const newNotice = {
        _id: Date.now().toString(), // Ek unique ID banayi
        title: body.title,
        date: new Date().toISOString()
    };

    // Naye notice ko sabse upar add karo
    notices.unshift(newNotice);

    return NextResponse.json(newNotice, { status: 201 });
}