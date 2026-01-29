'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('notices'); // 'notices' or 'gallery'

  // --- NOTICE STATE ---
  const [noticeTitle, setNoticeTitle] = useState('');
  const [notices, setNotices] = useState([]);

  // --- GALLERY STATE ---
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [photos, setPhotos] = useState([]);

  // --- LOGIN ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      loadData();
    } else {
      alert('❌ Wrong Password!');
    }
  };

  const loadData = () => {
    fetch('/api/notices')
      .then((res) => res.json())
      .then((data) => setNotices(data));
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  };

  // --- NOTICE FUNCTIONS ---
  const addNotice = async (e) => {
    e.preventDefault();
    if (!noticeTitle) return;
    await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: noticeTitle }),
    });
    alert('✅ Notice Added!');
    setNoticeTitle('');
    loadData();
  };

  const deleteNotice = async (id) => {
    if (!confirm('Delete this notice?')) return;
    await fetch(`/api/notices?id=${id}`, { method: 'DELETE' });
    loadData();
  };

  // --- GALLERY FUNCTIONS ---
  const addPhoto = async (e) => {
    e.preventDefault();
    if (!photoTitle || !photoUrl) return;
    await fetch('/api/gallery', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: photoTitle, url: photoUrl }),
    });
    alert('✅ Photo Added!');
    setPhotoTitle('');
    setPhotoUrl('');
    loadData();
  };

  const deletePhoto = async (id) => {
    if (!confirm('Delete this photo?')) return;
    await fetch(`/api/gallery?id=${id}`, { method: 'DELETE' });
    loadData();
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
        <div className='w-full max-w-sm bg-white p-8 rounded-xl shadow-xl border-t-4 border-red-600'>
          <h1 className='text-2xl font-bold text-center mb-6'>🔒 Admin Login</h1>
          <form onSubmit={handleLogin} className='space-y-4'>
            <input
              type='password'
              placeholder='Password'
              className='w-full border p-3 rounded'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='w-full bg-red-600 text-white font-bold py-3 rounded'>Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow-sm'>
          <h1 className='text-2xl font-bold text-blue-900'>Admin Dashboard</h1>
          <div className='flex gap-4'>
            <Link href='/' className='text-gray-600 font-bold hover:text-blue-900'>
              View Site
            </Link>
            <button onClick={() => setIsAuthenticated(false)} className='text-red-600 font-bold'>
              Logout
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className='flex gap-4 mb-6'>
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-6 py-2 rounded-full font-bold ${activeTab === 'notices' ? 'bg-blue-900 text-white' : 'bg-white text-gray-600'}`}>
            📢 Manage Notices
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-2 rounded-full font-bold ${activeTab === 'gallery' ? 'bg-blue-900 text-white' : 'bg-white text-gray-600'}`}>
            📸 Manage Gallery
          </button>
        </div>

        {/* --- NOTICE SECTION --- */}
        {activeTab === 'notices' && (
          <div className='space-y-8'>
            <div className='bg-white p-6 rounded-xl shadow border-l-4 border-blue-600'>
              <h2 className='text-xl font-bold mb-4'>✍️ New Notice / Video</h2>
              <form onSubmit={addNotice} className='flex gap-3'>
                <input
                  className='flex-grow border p-3 rounded'
                  placeholder='Notice text or YouTube Link...'
                  value={noticeTitle}
                  onChange={(e) => setNoticeTitle(e.target.value)}
                />
                <button className='bg-blue-600 text-white px-6 font-bold rounded'>Post</button>
              </form>
            </div>
            <div className='bg-white p-6 rounded-xl shadow'>
              <h2 className='text-xl font-bold mb-4'>📋 Active Notices</h2>
              {notices.map((n) => (
                <div
                  key={n._id}
                  className='flex justify-between items-center bg-gray-50 p-3 rounded mb-2 border'>
                  <span>{n.title}</span>
                  <button onClick={() => deleteNotice(n._id)} className='text-red-600 font-bold'>
                    Delete 🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- GALLERY SECTION --- */}
        {activeTab === 'gallery' && (
          <div className='space-y-8'>
            <div className='bg-white p-6 rounded-xl shadow border-l-4 border-green-600'>
              <h2 className='text-xl font-bold mb-4'>📸 Add New Photo</h2>
              <form onSubmit={addPhoto} className='space-y-3'>
                <input
                  className='w-full border p-3 rounded'
                  placeholder='Photo Title (e.g. Sports Day)'
                  value={photoTitle}
                  onChange={(e) => setPhotoTitle(e.target.value)}
                />
                <input
                  className='w-full border p-3 rounded'
                  placeholder='Image Address / URL (Paste link here)'
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
                <button className='bg-green-600 text-white px-6 py-2 font-bold rounded w-full'>
                  Add Photo to Gallery
                </button>
              </form>
              <p className='text-xs text-gray-400 mt-2'>
                * Tip: Google Images se photo ka link copy karke yahan paste karein.
              </p>
            </div>
            <div className='bg-white p-6 rounded-xl shadow'>
              <h2 className='text-xl font-bold mb-4'>🖼️ Gallery Photos</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {photos.map((p) => (
                  <div key={p._id} className='relative group'>
                    <img src={p.url} className='h-32 w-full object-cover rounded-lg' />
                    <button
                      onClick={() => deletePhoto(p._id)}
                      className='absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded shadow'>
                      Delete
                    </button>
                    <p className='text-xs text-center mt-1 font-bold'>{p.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
