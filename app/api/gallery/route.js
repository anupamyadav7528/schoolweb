import { NextResponse } from 'next/server';

// --- FAKE GALLERY DATABASE (RAM) ---
if (!global.gallery) {
  global.gallery = [
    {
      _id: '1',
      title: 'Sports Day',
      url: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800',
    },
    {
      _id: '2',
      title: 'Classroom',
      url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800',
    },
  ];
}

export async function GET() {
  return NextResponse.json(global.gallery);
}

export async function POST(request) {
  const { title, url } = await request.json();
  const newPhoto = { _id: Date.now().toString(), title, url };
  global.gallery.unshift(newPhoto);
  return NextResponse.json({ message: 'Added' }, { status: 201 });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  global.gallery = global.gallery.filter((p) => p._id !== id);
  return NextResponse.json({ message: 'Deleted' });
}
