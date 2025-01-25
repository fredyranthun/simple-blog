import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fredy's Tech Blog",
  description: "My simple blog to share my thoughts on technology, programming, and other stuff.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <header className="py-6 px-4 md:px-6 border-b border-gray-800">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Fredy&apos;s tech Blog
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto py-8 px-4 md:px-6">{children}</main>
        <footer className="py-6 px-4 md:px-6 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
            © 2023 Fredy&apos;s Tech Blog. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
