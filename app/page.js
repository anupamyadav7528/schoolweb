'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [notices, setNotices] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]); // Photos ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- DATA FETCHING (Notices + Gallery) ---
  useEffect(() => {
    // 1. Fetch Notices
    fetch('/api/notices')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setNotices(data);
      });

    // 2. Fetch Gallery Photos
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setGalleryPhotos(data);
      });
  }, []);

  // --- YouTube Logic ---
  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const facilitiesPreview = [
    { title: 'Smart Classes', icon: '🖥️' },
    { title: 'Science Labs', icon: '🔬' },
    { title: 'Sports Complex', icon: '⚽' },
    { title: 'Safe Transport', icon: '🚌' },
  ];

  return (
    <main className='min-h-screen bg-white font-sans'>
      {/* --- TOP BAR --- */}
      <div className='bg-blue-900 text-white text-xs py-2 px-4 flex justify-between items-center hidden md:flex font-bold'>
        <span>📞 Admissions Enquiry: +91 98765 43210</span>
        <span>📍 Gomti Nagar, Lucknow, UP</span>
      </div>

      {/* --- NAVBAR --- */}
      <nav className='bg-white shadow-lg sticky top-0 z-50 border-b-4 border-yellow-500'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between h-20 items-center'>
            <div className='flex items-center gap-3'>
              <div className='h-12 w-12 bg-yellow-400 rounded-lg text-blue-900 flex items-center justify-center font-black text-3xl shadow-md border-2 border-yellow-600'>
                S
              </div>
              <h1 className='text-3xl font-black text-blue-900 tracking-tighter'>
                Sunshine{' '}
                <span className='text-xs text-yellow-600 block font-bold tracking-widest uppercase'>
                  International School
                </span>
              </h1>
            </div>

            <div className='hidden md:flex space-x-8 text-gray-700 font-bold text-sm uppercase items-center'>
              <Link href='/' className='text-blue-800 hover:text-yellow-600 transition'>
                Home
              </Link>
              <Link href='/about' className='hover:text-blue-800 transition'>
                About
              </Link>
              <Link href='/facilities' className='hover:text-blue-800 transition'>
                Facilities
              </Link>
              <Link href='/gallery' className='hover:text-blue-800 transition'>
                Gallery
              </Link>
              <Link href='/admissions' className='hover:text-blue-800 transition'>
                Admissions
              </Link>
              <Link href='/contact' className='hover:text-blue-800 transition'>
                Contact
              </Link>
              <Link
                href='/admin'
                className='bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 shadow-md transition transform hover:scale-105'>
                Admin Panel
              </Link>
            </div>

            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-4xl text-blue-900'>
                ☰
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='md:hidden bg-white border-t p-4 space-y-4 font-bold text-gray-700 shadow-2xl absolute w-full left-0 z-50'>
            <Link href='/' className='block text-blue-800'>
              Home
            </Link>
            <Link href='/gallery' className='block'>
              Gallery
            </Link>
            <Link href='/admin' className='block text-red-600'>
              Admin Panel
            </Link>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div className='relative h-[550px] w-full bg-blue-900 flex items-center justify-center text-white text-center px-4'>
        <div className='max-w-5xl z-10'>
          <span className='bg-yellow-400 text-blue-900 font-extrabold px-6 py-2 rounded-full text-sm uppercase mb-6 inline-block shadow-xl border-2 border-white'>
            📢 Admissions Open 2026-27
          </span>
          <h1 className='text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg'>
            Build A{' '}
            <span className='text-yellow-400 underline decoration-wavy decoration-white'>
              Brighter
            </span>{' '}
            Future
          </h1>
          <p className='text-blue-100 text-xl md:text-2xl mb-10 font-medium max-w-3xl mx-auto'>
            We provide world-class education with a focus on holistic development, modern
            technology, and traditional values.
          </p>
          <div className='flex flex-col md:flex-row gap-5 justify-center'>
            <Link
              href='/admissions'
              className='bg-yellow-400 text-blue-900 font-black py-4 px-10 rounded-full hover:bg-yellow-300 shadow-2xl transition transform hover:-translate-y-1 border-b-4 border-yellow-600 text-lg'>
              Apply Now 🚀
            </Link>
            <Link
              href='/facilities'
              className='bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-900 transition text-lg'>
              Explore Campus
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className='max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-16'>
        {/* Left: About Us */}
        <div className='md:col-span-2 space-y-8'>
          <div className='border-l-8 border-yellow-500 pl-6'>
            <h2 className='text-4xl font-extrabold text-blue-900 mb-2'>Welcome to Sunshine ☀️</h2>
            <p className='text-lg text-blue-600 font-bold'>"Where Learning Meets Excellence"</p>
          </div>
          <p className='text-gray-600 text-lg leading-relaxed text-justify'>
            Sunshine International School is committed to providing a safe and intellectually
            challenging environment. Our campus empowers students to become innovative thinkers.
          </p>
          <div className='grid grid-cols-2 gap-6 mt-6'>
            <div className='bg-blue-50 p-6 rounded-2xl text-center border-2 border-blue-100 shadow-sm hover:shadow-md transition'>
              <h3 className='text-4xl font-black text-blue-800'>25+</h3>
              <p className='text-sm font-bold text-gray-500 uppercase tracking-wide'>
                Years of Trust
              </p>
            </div>
            <div className='bg-green-50 p-6 rounded-2xl text-center border-2 border-green-100 shadow-sm hover:shadow-md transition'>
              <h3 className='text-4xl font-black text-green-700'>100%</h3>
              <p className='text-sm font-bold text-gray-500 uppercase tracking-wide'>Pass Result</p>
            </div>
          </div>
        </div>

        {/* Right: Notice Board */}
        <div className='relative'>
          <div className='bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 sticky top-28 transform hover:scale-[1.02] transition duration-300'>
            <div className='bg-red-600 p-5 flex justify-between items-center text-white shadow-md relative overflow-hidden'>
              <h3 className='font-bold text-xl flex items-center gap-2 relative z-10'>
                📢 Notice Board
              </h3>
              <div className='h-3 w-3 bg-white rounded-full animate-ping'></div>
            </div>
            <div className='p-5 bg-red-50 h-[450px] overflow-y-auto space-y-4 custom-scrollbar'>
              {notices.length === 0 ? (
                <div className='text-center py-12'>
                  <p className='text-gray-400 font-medium'>No active notices.</p>
                </div>
              ) : (
                notices.map((notice) => {
                  const videoId = getYoutubeVideoId(notice.title);
                  const isLink = notice.title.startsWith('http');
                  return (
                    <div
                      key={notice._id}
                      className='bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-500 hover:shadow-lg transition'>
                      {videoId ? (
                        <div className='mb-3'>
                          <iframe
                            className='w-full rounded-lg h-36 shadow-inner'
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title='Video'
                            allowFullScreen></iframe>
                          <p className='text-xs text-red-600 mt-2 font-bold uppercase tracking-wider flex items-center gap-1'>
                            🎥 Video Update
                          </p>
                        </div>
                      ) : isLink ? (
                        <a
                          href={notice.title}
                          target='_blank'
                          className='text-blue-600 font-bold underline hover:text-blue-800 text-sm break-all'>
                          🔗 {notice.title}
                        </a>
                      ) : (
                        <p className='text-gray-800 font-bold text-sm leading-snug'>
                          {notice.title}
                        </p>
                      )}
                      <span className='text-[11px] text-gray-400 block mt-3 font-bold uppercase tracking-wide'>
                        {notice.date ? new Date(notice.date).toLocaleDateString() : 'Just Now'}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- FACILITIES STRIP --- */}
      <div className='bg-gray-100 py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl font-extrabold text-center text-blue-900 mb-12'>
            Why Choose Us?
          </h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {facilitiesPreview.map((f, i) => (
              <div
                key={i}
                className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center border-b-4 border-blue-500'>
                <div className='text-5xl mb-4'>{f.icon}</div>
                <h3 className='font-bold text-gray-800 text-lg'>{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- REAL GALLERY PREVIEW ON HOME PAGE --- */}
      <div className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-extrabold text-gray-800 mb-4'>Campus Life 📸</h2>
          <p className='text-gray-500 mb-12 max-w-2xl mx-auto font-medium'>
            Capturing the precious moments.
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {/* Agar photos hain, toh dikhao. Nahi toh fallback box dikhao. */}
            {galleryPhotos.length > 0
              ? // Sirf shuru ki 4 photos dikhayenge
                galleryPhotos.slice(0, 4).map((photo, i) => (
                  <div
                    key={i}
                    className='h-48 rounded-2xl overflow-hidden shadow-md transform hover:scale-105 transition duration-300 border-4 border-white relative group'>
                    <img src={photo.url} alt={photo.title} className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition'>
                      <span className='text-white font-bold text-sm'>{photo.title}</span>
                    </div>
                  </div>
                ))
              : // Agar koi photo nahi hai toh ye dikhega
                ['No Photos Yet', 'Upload via Admin', 'Coming Soon', 'Stay Tuned'].map(
                  (text, i) => (
                    <div
                      key={i}
                      className='h-48 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold border-2 border-dashed border-gray-300'>
                      {text}
                    </div>
                  )
                )}
          </div>

          <Link
            href='/gallery'
            className='inline-block mt-10 text-blue-600 font-bold text-lg underline hover:text-blue-800 decoration-2 underline-offset-4'>
            View Full Gallery →
          </Link>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className='bg-gray-900 text-gray-300 py-16 border-t-8 border-yellow-500'>
        <div className='max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-sm'>
          <div>
            <h3 className='text-white font-bold text-2xl mb-4'>Sunshine School</h3>
            <p className='leading-relaxed text-gray-400 text-base'>
              Empowering students for a brighter tomorrow since 1998.
            </p>
          </div>
          <div>
            <h3 className='text-white font-bold text-lg mb-6 border-b-2 border-yellow-500 pb-2 inline-block'>
              Quick Links
            </h3>
            <ul className='space-y-3 text-base'>
              <li>
                <Link href='/admissions' className='hover:text-yellow-400'>
                  👉 Admissions
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-yellow-400'>
                  👉 Contact Support
                </Link>
              </li>
              <li>
                <Link href='/admin' className='hover:text-yellow-400'>
                  👉 Admin Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-white font-bold text-lg mb-6 border-b-2 border-yellow-500 pb-2 inline-block'>
              Contact Us
            </h3>
            <p>📍 Gomti Nagar, Lucknow, UP</p>
          </div>
        </div>
        <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
          <p className='mt-3 text-sm font-medium'>
            Designed & Developed with ❤️ by{' '}
            <span className='text-yellow-400 font-bold text-lg animate-pulse'>Anupam Yadav</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
