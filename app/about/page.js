"use client";
import { useState } from "react";
import Link from "next/link";

export default function About() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* --- NAVBAR --- */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-900 rounded text-white flex items-center justify-center font-bold text-xl">S</div>
                            <h1 className="text-2xl font-bold text-blue-900">Sunshine <span className="text-xs text-gray-500 block">INTERNATIONAL SCHOOL</span></h1>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                            <Link href="/" className="hover:text-blue-900 transition">Home</Link>
                            <Link href="/about" className="text-blue-900 font-bold">About Us</Link>
                            <Link href="/admissions" className="hover:text-blue-900 transition">Admissions</Link>
                            <Link href="/contact" className="hover:text-blue-900 transition">Contact</Link>
                            <Link href="/admin" className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg">Admin Login</Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                                <span className="text-2xl font-bold">{isMobileMenuOpen ? "✕" : "☰"}</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
                        <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 bg-gray-50 rounded">Home</Link>
                            <Link href="/about" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-gray-50 rounded">About Us</Link>
                            <Link href="/admissions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Admissions</Link>
                            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Contact</Link>
                            <Link href="/admin" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded">Admin Login</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero */}
            <div className="relative h-64 bg-gray-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
                <h1 className="relative text-4xl text-white font-bold z-10">About Our School</h1>
            </div>

            <div className="max-w-4xl mx-auto p-10 space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our History</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 1995, Sunshine International School started with just 50 students and a vision to provide quality education.Over the last 30 years, we have grown into a premier institution with over 2000 students.
                        </p>
                    </div>
                    <div className="md:w-1/2 h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">[Old School Photo]</div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow border-t-4 border-yellow-500">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">🚀Our Mission</h3>
                        <p className="text-gray-600">To empower students to acquire, demonstrate, articulate, and value knowledge and skills that will support them as lifelong learners.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow border-t-4 border-red-500">
                        <h3 className="text-xl font-bold mb-2 text-gray-800">👁️Our Vision</h3>
                        <p className="text-gray-600">To be a leader in education, inspiring excellence, innovation, and creativity in a safe and supportive environment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}