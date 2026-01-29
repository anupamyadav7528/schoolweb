'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Gallery() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [photos, setPhotos] = useState([]);

  // --- FETCH PHOTOS FROM ADMIN ---
  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPhotos(data);
      });
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      {/* NAVBAR (Same as before) */}
      <nav className='bg-white shadow-lg sticky top-0 z-50 border-b-4 border-yellow-500'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between h-20 items-center'>
            <div className='flex items-center gap-3'>
              <div className='h-10 w-10 bg-yellow-400 rounded text-blue-900 flex items-center justify-center font-bold text-xl shadow'>
                S
              </div>
              <h1 className='text-2xl font-bold text-blue-900'>
                Sunshine <span className='text-xs text-gray-500 block'>INTERNATIONAL SCHOOL</span>
              </h1>
            </div>
            <div className='hidden md:flex space-x-6 text-gray-700 font-bold text-sm uppercase items-center'>
              <Link href='/' className='hover:text-blue-900'>
                Home
              </Link>
              <Link href='/about' className='hover:text-blue-900'>
                About
              </Link>
              <Link href='/facilities' className='hover:text-blue-900'>
                Facilities
              </Link>
              <Link href='/gallery' className='text-blue-900'>
                Gallery
              </Link>
              <Link href='/admissions' className='hover:text-blue-900'>
                Admissions
              </Link>
              <Link href='/contact' className='hover:text-blue-900'>
                Contact
              </Link>
              <Link href='/admin' className='text-red-600'>
                Admin
              </Link>
            </div>
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-3xl text-blue-900'>
                ☰
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className='md:hidden bg-white border-t p-4 space-y-3 font-bold text-gray-700 shadow-xl absolute w-full left-0 z-50'>
            <Link href='/' className='block'>
              Home
            </Link>
            <Link href='/gallery' className='block text-blue-900 bg-blue-50 p-2 rounded'>
              Gallery
            </Link>
            <Link href='/admin' className='block text-red-600'>
              Admin
            </Link>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <div className='bg-blue-900 py-16 text-center text-white'>
        <h1 className='text-4xl font-bold'>Our Gallery 📸</h1>
        <p className='text-blue-200 mt-2'>Memories captured forever.</p>
      </div>

      <div className='max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {photos.length === 0 ? (
          <p className='text-center col-span-3 text-gray-400'>Loading photos...</p>
        ) : (
          photos.map((photo, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-xl shadow-lg border-4 border-white bg-white'>
              <img
                src={photo.url}
                alt={photo.title}
                className='h-64 w-full object-cover transform transition duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                <h3 className='text-white font-bold text-xl border-2 border-yellow-400 px-4 py-1 rounded-full'>
                  {photo.title}
                </h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
