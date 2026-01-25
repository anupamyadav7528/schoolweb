"use client";
import { useState } from "react";
import Link from "next/link";

export default function Admissions() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* NAVBAR */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20 items-center">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-blue-900 rounded text-white flex items-center justify-center font-bold text-xl">S</div>
                            <h1 className="text-2xl font-bold text-blue-900">Sunshine <span className="text-xs text-gray-500 block">INTERNATIONAL SCHOOL</span></h1>
                        </div>
                        <div className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
                            <Link href="/" className="hover:text-blue-900 transition">Home</Link>
                            <Link href="/about" className="hover:text-blue-900 transition">About Us</Link>
                            <Link href="/admissions" className="text-blue-900 font-bold">Admissions</Link>
                            <Link href="/contact" className="hover:text-blue-900 transition">Contact</Link>
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
                            <Link href="/admissions" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-gray-50 rounded">Admissions</Link>
                            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Contact</Link>
                            <Link href="/admin" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded">Admin Login</Link>
                        </div>
                    </div>
                )}
            </nav>

            <div className="bg-blue-900 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Admissions Open 2026 - 27</h1>
                <p className="mt-2 text-blue-200">Join the family of excellence</p>
            </div>

            <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">📝Admission Process</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                            <li>Collect the form from the school office or fill online.</li>
                            <li>Submit documents(Aadhar Card, Birth Certificate, Photos).</li>
                            <li>Entrance test for Class 1 onwards.</li>
                            <li>Final interview with the Principal.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">💰Fee Structure(Per Month)</h2>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b">
                                    <th className="p-2 font-bold">Class</th>
                                    <th className="p-2 font-bold">Tuition Fee</th>
                                    <th className="p-2 font-bold">Computer Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-2">Playgroup - KG</td>
                                    <td className="p-2">₹ 800</td>
                                    <td className="p-2">-</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2">Class 1 - 5</td>
                                    <td className="p-2">₹ 1200</td>
                                    <td className="p-2">₹200</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2">Class 6 - 8</td>
                                    <td className="p-2">₹ 1500</td>
                                    <td className="p-2">₹300</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-2">Class 9 - 10</td>
                                    <td className="p-2">₹ 1800</td>
                                    <td className="p-2">₹400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg h-fit border border-gray-200">
                    <h2 className="text-2xl font-bold text-blue-900 mb-6">Online Inquiry Form</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Student Name</label>
                            <input type="text" className="w-full border p-2 rounded mt-1" placeholder="Enter name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Parent Mobile No.</label>
                            <input type="text" className="w-full border p-2 rounded mt-1" placeholder="+91 XXXXX XXXXX" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">Class Applying For</label>
                            <select className="w-full border p-2 rounded mt-1">
                                <option>Select Class</option>
                                <option>Nursery</option>
                                <option>Class 1</option>
                                <option>Class 5</option>
                                <option>Class 11</option>
                            </select>
                        </div>
                        <button className="w-full bg-blue-600 text-white font-bold py-3 rounded hover:bg-blue-700 transition">Submit Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    );
}