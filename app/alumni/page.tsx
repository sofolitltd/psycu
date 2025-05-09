'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SheetPage() {
  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL; // Access the env variable
  
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Google Sheet</h1>
      <iframe
        src={sheetUrl}
        className="w-full h-[500px] border-0"
      ></iframe>
    </div>
  );
}
