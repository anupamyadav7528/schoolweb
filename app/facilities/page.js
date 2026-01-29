'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Facilities() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const facilities = [
    { title: 'Smart Classrooms', icon: '🖥️', desc: 'Projectors and digital learning tools.' },
    { title: 'Science Labs', icon: '🔬', desc: 'Physics, Chemistry, and Bio labs.' },
    { title: 'Library', icon: '📚', desc: 'Over 5000 books for students.' },
    { title: 'Transport', icon: '🚌', desc: 'Safe bus service covering 20km radius.' },
    { title: 'Playground', icon: '⚽', desc: 'Football, Cricket and Basketball courts.' },
    { title: 'CCTV Security', icon: '📹', desc: '24x7 surveillance for student safety.' },
  ];

  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      {/* NAVBAR */}
      <nav className='bg-white shadow-md sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex justify-between h-20 items-center'>
            <div className='flex items-center gap-3'>
              <div className='h-10 w-10 bg-blue-900 rounded text-white flex items-center justify-center font-bold text-xl'>
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
                About Us
              </Link>
              <Link href='/facilities' className='text-blue-900'>
                Facilities
              </Link>
              <Link href='/admissions' className='hover:text-blue-900'>
                Admissions
              </Link>
              <Link href='/gallery' className='hover:text-blue-900'>
                Gallery
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
            <Link href='/about' className='block'>
              About Us
            </Link>
            <Link href='/facilities' className='block text-blue-900 bg-blue-50 p-2 rounded'>
              Facilities
            </Link>
            <Link href='/gallery' className='block'>
              Gallery
            </Link>
            <Link href='/contact' className='block'>
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <div className='bg-blue-900 py-16 text-center text-white'>
        <h1 className='text-4xl font-bold'>Our Facilities</h1>
        <p className='text-blue-200 mt-2'>World-class infrastructure for your child.</p>
      </div>

      <div className='max-w-6xl mx-auto p-8 grid md:grid-cols-3 gap-8'>
        {facilities.map((f, index) => (
          <div
            key={index}
            className='bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-t-4 border-blue-500 text-center group'>
            <div className='text-5xl mb-4 group-hover:scale-110 transition transform'>{f.icon}</div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>{f.title}</h3>
            <p className='text-gray-600'>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
