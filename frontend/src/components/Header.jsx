import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-800">
            SymptoCare <span className="text-primary-500">AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-primary-500 font-medium"
          >
            Home
          </Link>
          <Link
            href="/check"
            className="text-gray-600 hover:text-primary-500 font-medium"
          >
            Check Symptoms
          </Link>
          <Link
            href="/results"
            className="text-gray-600 hover:text-primary-500 font-medium"
          >
            History
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-primary-500 font-medium"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* CTA Button */}
          <Link
            href="/check"
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 font-medium shadow-md hover:shadow-lg"
          >
            Start Check
          </Link>
        </div>
      </nav>
    </header>
  );
}
