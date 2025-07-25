// app/underconstruction.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for internal navigation
import * as LucideIcons from 'lucide-react';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <LucideIcons.Wrench size={80} className="text-yellow-500 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
      <p className="text-lg text-center max-w-md">
        We&apos;re working hard to bring you this content! Please check back soon.
      </p>
      <Link href="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200">
        Go to Home
      </Link>
    </div>
  );
}
