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
  title: "Nestnic Solutions",
  description: "Tech Solutions for Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ThemeProvider logic for dark/light mode
  // This must be a Client Component
  // Use useState and useEffect to sync theme with localStorage and <html> class
  // This wrapper ensures the <html> element gets the correct class
  // Note: Next.js layouts are Server Components by default, so we need a client wrapper
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
           <link rel="icon" href="/favicon1.png" type="image/png" />
        <link rel="apple-touch-icon" href="./favicon1.png" />
        <title>Nestnic Solutions</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ThemeProvider must be used in page.tsx to provide toggle functionality */}
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `
        }} />
      </body>
    </html>
  );
}

module.exports = {
  darkMode: 'class',
  // ...other config
}
