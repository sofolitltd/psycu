'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const isValidPassword = /^\d{2}6080\d{2}$/.test(password) && password.length === 8;

    if (isValidPassword) {
      sessionStorage.setItem('isAuthenticated', 'true');
      router.push('/alumni'); // Navigate to sheet page upon successful password
    } else {
      setError('Wrong password. Please enter a valid password.');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Only allow digits, and limit to 8 characters
    if (/^\d{0,8}$/.test(value)) {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Department Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold tracking-wide text-blue-700">
          ALUMNI DATABASE
        </h1>
        <p className="text-lg text-gray-700 font-medium">Department of Psychology</p>
        <p className="text-sm text-gray-500">University of Chittagong</p>
      </div>

      {error && <p className="text-red-600 mb-4 text-center max-w-sm">{error}</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md w-full max-w-sm"
      >
        <label htmlFor="password" className="font-medium">
          Enter Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handleChange}
            maxLength={8}
            inputMode="numeric"
            pattern="\d*"
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

      {/* Footer */}
      <div className="fixed bottom-2 w-full px-4 flex justify-between text-xs text-gray-500">
        {/* Bottom Left */}
        <a
          href="https://sofolit.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="italic"
        >
          Powered by <span className="font-semibold">Sofol IT</span>
        </a>

        {/* Bottom Right */}
        <div className="flex flex-col items-end text-right">
  <p className="italic">A humble contribution to the department.</p>
  <p className="text-[11px] text-gray-600 font-semibold">
    —{' '}
    <a
      href="https://www.facebook.com/asifuzzamanreyad" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 hover:underline"
    >
      MD Asifuzzaman Reyad
    </a>
    , Batch 14
  </p>
</div>

      </div>
    </div>
  );
}
