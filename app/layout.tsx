import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alumni - Psychology, CU",
  description: "Alumni Database, Department of Psychology, University of Chittagong. Powered by Sofol IT - https://sofolit.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

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
      Md Asifuzzaman Reyad
    </a>
    , Batch 14
  </p>
</div>

      </div>
      </body>
    </html>
  );
}
