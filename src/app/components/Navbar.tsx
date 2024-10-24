'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png"
              alt="Sound Rank Logo"
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              Sound Rank
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/sound-design" className="text-gray-300 hover:text-white transition-colors">
              Sound Design
            </Link>
            <Link href="/studio" className="text-gray-300 hover:text-white transition-colors">
              Studio
            </Link>
            <Link href="/mixing" className="text-gray-300 hover:text-white transition-colors">
              Mixing
            </Link>
            <Link href="/mastering" className="text-gray-300 hover:text-white transition-colors">
              Mastering
            </Link>
            <Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">
              Consulting
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/sound-design"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sound Design
            </Link>
            <Link 
              href="/studio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Studio
            </Link>
            <Link 
              href="/mixing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mixing
            </Link>
            <Link 
              href="/mastering"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mastering
            </Link>
            <Link 
              href="/consulting"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Consulting
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-500 hover:text-blue-400 hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}