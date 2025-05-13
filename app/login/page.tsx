'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const isValidPassword = /^\d{2}6080\d{2}$/.test(password) && password.length === 8;

    if (isValidPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      setError('Wrong password. Please enter a valid password.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Content */}
      <div className="z-10 max-w-md w-full text-center bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Former Students Database</h1>
        <p className="text-sm text-gray-600 mb-6">
          Department of Psychology, University of Chittagong
        </p>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="password" className="text-left font-medium text-gray-700">
            Enter Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,8}$/.test(value)) setPassword(value);
              }}
              maxLength={8}
              inputMode="numeric"
              className="p-2 pr-10 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
