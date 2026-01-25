"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile Menu State

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsAuthenticated(true);
        } else {
            alert("❌ Wrong Password! Try again.");
        }
    };

    const addNotice = async(e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/notices", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });
        if (res.ok) {
            alert("✅ Notice Added Successfully!");
            setTitle("");
        } else {
            alert("❌ Error adding notice");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">

            {/* --- NAVBAR (Mobile Responsive) --- */}
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
                            <Link href="/about" className="hover:text-blue-900 transition">About Us</Link>
                            <Link href="/admissions" className="hover:text-blue-900 transition">Admissions</Link>
                            <Link href="/contact" className="hover:text-blue-900 transition">Contact</Link>
                            <Link href="/admin" className="text-red-600 font-bold border-b-2 border-red-600">Admin Login</Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                                <span className="text-2xl font-bold">{isMobileMenuOpen ? "✕" : "☰"}</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
                        <div className="flex flex-col px-4 pt-2 pb-4 space-y-2">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 bg-gray-50 rounded">Home</Link>
                            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">About Us</Link>
                            <Link href="/admissions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Admissions</Link>
                            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded">Contact</Link>
                            <Link href="/admin" className="block px-3 py-2 text-base font-bold text-red-600 hover:bg-red-50 rounded">Admin Login</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* --- MAIN LOGIN / DASHBOARD AREA --- */}
            <div className="flex items-center justify-center py-16 px-4">

                {!isAuthenticated ? (
                    /* LOGIN FORM */
                    <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-600">
                        <div className="text-center mb-6">
                            <span className="text-4xl">🔒</span>
                            <h1 className="text-xl font-bold text-gray-800 mt-2">Admin Access</h1>
                            <p className="text-xs text-gray-500">Only for School Staff</p>
                        </div>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none text-black"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow-lg">
                                Unlock Panel🔓
                            </button>
                        </form>
                    </div>
                ) : (
                    /* DASHBOARD (AFTER LOGIN) */
                    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border-t-4 border-blue-600">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-2xl font-bold text-blue-900">Admin Panel</h1>
                            <button onClick={() => setIsAuthenticated(false)} className="text-xs text-red-500 hover:underline font-bold">LOGOUT</button>
                        </div>

                        <form onSubmit={addNotice}>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Write New Notice:</label>
                            <textarea
                                className="mb-4 w-full rounded border border-gray-300 p-3 text-black focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none h-32 resize-none"
                                placeholder="E.g. School will remain closed tomorrow due to heavy rain..."
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <button
                                disabled={loading}
                                className="w-full rounded bg-blue-600 py-3 font-bold text-white hover:bg-blue-700 transition disabled:bg-gray-400 shadow-lg"
                            >
                                {loading ? "Publishing..." : "Publish Notice 🚀"}
                            </button>
                        </form>
                    </div>
                )}
            </div>

        </div>
    );
}