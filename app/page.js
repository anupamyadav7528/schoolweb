"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
    const [notices, setNotices] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu ke liye state

    useEffect(() => {
        fetch("/api/notices")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setNotices(data);
            });
    }, []);

    return (
        <main className="min-h-screen bg-gray-50 font-sans">

        {/* --- 1. NAVBAR (Mobile Responsive) --- */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-blue-900 rounded text-white flex items-center justify-center font-bold text-xl">S</div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-blue-900 leading-none">Sunshine</h1>
                  <span className="text-xs text-gray-500 tracking-wider font-semibold">INTERNATIONAL SCHOOL</span>
                </div>
              </div>

              {/* Desktop Menu (Hidden on Mobile) */}
              <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                <Link href="/" className="text-blue-900 font-bold">Home</Link>
                <Link href="/about" className="hover:text-blue-900 transition">About Us</Link>
                <Link href="/admissions" className="hover:text-blue-900 transition">Admissions</Link>
                <Link href="/contact" className="hover:text-blue-900 transition">Contact</Link>
                <Link href="/admin" className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg">Admin Login</Link>
              </div>

              {/* Mobile Menu Button (Hamburger) */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                  {isMobileMenuOpen ? (
                    <span className="text-2xl font-bold">✕</span>
                  ) : (
                    <span className="text-2xl font-bold">☰</span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown (Sirf Mobile par dikhega) */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
              <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                <Link href="/" className="block px-3 py-2 text-base font-medium text-blue-900 bg-blue-50 rounded">Home</Link>
                <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">About Us</Link>
                <Link href="/admissions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Admissions</Link>
                <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Contact</Link>
                <Link href="/admin" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded">Admin Login</Link>
              </div>
            </div>
          )}
        </nav>

        {/* --- HERO SECTION --- */}
        <div className="relative h-[500px] w-full bg-blue-900 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="School Campus" className="w-full h-full object-cover opacity-30 absolute mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white z-10">
            <span className="bg-yellow-500 text-blue-900 font-bold px-4 py-1 rounded-full w-fit mb-6 text-sm uppercase tracking-wide shadow-md">Admissions Open for 2026 - 27</span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">Empowering <br /> <span className="text-yellow-400">Future Leaders</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-lg mb-10 leading-relaxed">Experience world-class education with a focus on holistic development, modern facilities, and moral values.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/admissions">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-xl transition transform hover:-translate-y-1">Apply Online</button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
          {/* Features */}
          <div className="md:col-span-2 space-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition">🚌</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Safe Transport</h3>
                <p className="text-sm text-gray-600">GPS-enabled bus fleet covering the entire city.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition cursor-pointer group">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-green-600 group-hover:text-white transition">⚽</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Sports Academy</h3>
                <p className="text-sm text-gray-600">Professional coaching for Cricket, Football & Athletics.</p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl flex flex-col sm:flex-row gap-8 items-center border border-blue-100">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&auto=format&fit=crop" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md" alt="Principal" />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-blue-900 mb-3">Principal's Message</h2>
                <p className="text-gray-700 italic mb-4 leading-relaxed">"Our mission is to nurture young minds into responsible global citizens. We believe in education that goes beyond textbooks."</p>
                <p className="font-bold text-gray-900">-Dr. Anupam Yadav</p>
              </div>
            </div>
          </div>

          {/* Notice Board */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 sticky top-24">
              <div className="bg-red-600 p-4 flex justify-between items-center text-white">
                <h3 className="font-bold text-lg flex items-center gap-2">📢 Notice Board</h3>
                <span className="text-[10px] bg-white text-red-600 px-2 py-0.5 rounded font-bold uppercase">Live Updates</span>
              </div>
              <div className="p-3 bg-gray-50 h-[450px] overflow-y-auto">
                {notices.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                    <span>📭</span>
                    <p className="text-sm">No new notices...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {notices.map((notice) => (
                      <div key={notice._id} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500 hover:bg-blue-50 transition duration-200">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{notice.date ? new Date(notice.date).toLocaleDateString() : 'Just now'}</span>
                          <span className="bg-red-100 text-red-600 text-[10px] px-2 rounded-full font-bold">NEW</span>
                        </div>
                        <p className="text-gray-800 font-medium text-sm leading-snug">{notice.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* --- NEW & IMPROVED FOOTER --- */}
        <footer className="bg-gray-900 text-gray-300 py-12 border-t-4 border-yellow-500">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
            {/* Column 1: School Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold">S</div>
                <h2 className="text-white text-xl font-bold">Sunshine International</h2>
              </div>
              <p className="text-sm leading-relaxed">Dedicated to excellence in education since 1995. We create an environment where every student thrives academically and socially.</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
                <li><Link href="/admissions" className="hover:text-yellow-400 transition">Admissions</Link></li>
                <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
                <li><Link href="/admin" className="hover:text-yellow-400 transition">Admin Panel</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span>📍</span>
                  <span>Sector 4, Gomti Nagar, <br /> Lucknow, UP - 226010</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>✉️</span>
                  <span>info@sunshine.edu</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
              <p className="text-xs mb-3">Subscribe to our newsletter for latest updates.</p>
              <div className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 border border-gray-700 p-2 rounded text-white text-sm" />
                <button className="bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 text-sm">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2026 Sunshine International School. All rights reserved. | Designed by <span className="text-white font-bold">Anupam Yadav</span></p>
          </div>
        </footer>

        </main>
    );
}