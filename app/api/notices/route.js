import { NextResponse } from 'next/server';

// --- TEMPORARY DATABASE (RAM) ---
// Ye data tab tak rahega jab tak laptop on hai aur server chal raha hai.
if (!global.notices) {
  global.notices = [
    { _id: '1', title: 'Welcome to Sunshine School! (Demo Notice)', date: new Date() },
  ];
}

export async function GET() {
  return NextResponse.json(global.notices);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const newNotice = {
      _id: Date.now().toString(), // Unique ID
      title: body.title,
      date: new Date(),
    };

    // List ke sabse upar add karein
    global.notices.unshift(newNotice);

    return NextResponse.json({ message: 'Added successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error adding notice' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  // Filter karke delete karein
  global.notices = global.notices.filter((n) => n._id !== id);

  return NextResponse.json({ message: 'Deleted' });
}
