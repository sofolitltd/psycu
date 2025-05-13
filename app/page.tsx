'use client';

import { FileEdit, Users } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const formUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;
  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-6 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="z-10 max-w-3xl w-full text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Former Students Database
        </h1>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Department of Psychology, University of Chittagong
        </p>

        <p className="text-gray-600 text-lg max-w-xl mx-auto mt-8">
          Connect and contribute to the growing community of former students.
        </p>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Add / Update Button */}
          <a
            href={formUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="bg-white/60 backdrop-blur-md border border-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300 hover:bg-white"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileEdit className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold text-blue-700">
                Add / Update Your Details
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Fill out the form to add or update your profile in the Psychology CU database.
            </p>
          </a>

          {/* View Directory Button */}
          <a
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/60 backdrop-blur-md border border-white rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300 hover:bg-white"
          >
            <div className="flex items-center gap-3 mb-2">
              <Users className="text-purple-600" size={24} />
              <h2 className="text-xl font-semibold text-purple-700">
                View Former Students Directory
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              View the directory of data submitted by Psychology CU former students.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
