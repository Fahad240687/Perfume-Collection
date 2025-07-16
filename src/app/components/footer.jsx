"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-white py-12 w-full">
      <div className="px-6 md:px-12 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-10">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="text-black font-bold text-2xl flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 mr-2 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21V10a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v11" />
                  <path d="M3 21h18" />
                  <path d="M9 10h10" />
                </svg>
                <span>FRAGRANCE</span>
              </div>
            </Link>
            <p className="text-gray-800 text-sm max-w-xs">
              The essence of beauty, captured in a bottle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-amber-600 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-600 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-800 text-sm mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-600 text-sm"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <p className="text-gray-800 text-sm mb-4">Join us on social media</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="text-gray-800 hover:text-amber-600 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-gray-800 hover:text-amber-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-gray-800 hover:text-amber-600 transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" className="text-gray-800 hover:text-amber-600 transition">
                <FaPinterestP size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-8">
          <p>&copy; {new Date().getFullYear()} FRAGRANCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
