"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* NAVBAR */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-900 rounded text-white flex items-center justify-center font-bold text-xl">S</div>
                            <h1 className="text-2xl font-bold text-blue-900">
                                Sunshine
                                <span className="text-xs text-gray-500 block">INTERNATIONAL SCHOOL</span>
                            </h1>
                        </div>
                    <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                        <Link href="/" className="hover:text-blue-900 transition">Home</Link>
                        <Link href="/about" className="hover:text-blue-900 transition">About Us</Link>
                        <Link href="/admissions" className="hover:text-blue-900 transition">Admissions</Link>
                        <Link href="/contact" className="text-blue-900 font-bold">Contact</Link>
                        <Link href="/admin" className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg">Admin Login</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                            <span className="text-2xl font-bold">{isMobileMenuOpen ? "✕" : "☰"}</span>
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
                    <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 bg-gray-50 rounded">Home</Link>
                        <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">About Us</Link>
                        <Link href="/admissions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Admissions</Link>
                        <Link href="/contact" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-gray-50 rounded">Contact</Link>
                        <Link href="/admin" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded">Admin Login</Link>
                    </div>
                </div>
            )}
        </nav>

        {/* Header */}
        <div className="bg-blue-900 text-white py-16 text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-blue-200">We are located in the heart of the city</p>
        </div>

        <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
                    <h3 className="text-xl font-bold mb-4">📍Visit Our Campus</h3>
                    <p className="text-gray-600 mb-4">
                        Sunshine International School, <br />
                        Sector 4, Gomti Nagar, <br />
                        Lucknow, Uttar Pradesh - 226010
                    </p>
                    <p className="text-gray-600"><strong>Phone:</strong> +91 98765 43210</p>
                </div>
                <div className="bg-white p-2 rounded-lg shadow-md h-64 overflow-hidden border border-gray-200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.352467978281!2d80.99342467522513!3d26.8605558766782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a5079a421f%3A0xc3961158a741753!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1706429392813!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg h-fit">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                <form className="space-y-4">
                    <input type="text" className="w-full border p-3 rounded mt-1 bg-gray-50" placeholder="John Doe" />
                    <input type="email" className="w-full border p-3 rounded mt-1 bg-gray-50" placeholder="john@example.com" />
                    <textarea className="w-full border p-3 rounded mt-1 bg-gray-50 h-32" placeholder="Message"></textarea>
                    <button className="w-full bg-blue-900 text-white font-bold py-3 rounded hover:bg-blue-800 transition shadow-lg">Send Message</button>
                </form>
            </div>
        </div>
        </div>
    );
}