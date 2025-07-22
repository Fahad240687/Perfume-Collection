"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaArrowUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

 return (
  <>
    <footer className="bg-white text-white w-full">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-gray-200">
          {/* Brand Info - Full width on mobile, then normal */}
          <div className="col-span-2 md:col-span-1">
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
            <p className="text-gray-700 text-sm">
              The essence of beauty, captured in a bottle.  
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Discover the finest scents and elevate your personality with elegance and grace.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><Link href="/shop/perfume" className="hover:text-amber-600 transition">Shop</Link></li>
              <li><Link href="/about" className="hover:text-amber-600 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-600 transition">Contact</Link></li>
              <li><Link href="/FAQ" className="hover:text-amber-600 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Customer Service</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><Link href="/returns-refunds" className="hover:text-amber-600 transition">Returns & Refunds</Link></li>
              <li><Link href="/shipping-info" className="hover:text-amber-600 transition">Shipping Info</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-amber-600 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-amber-600 transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter - Full width on mobile, then normal */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold text-black mb-4">Stay Connected</h3>
            <p className="text-gray-700 text-sm mb-4">Join our newsletter</p>
            <form className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-100 text-black border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4">
              <a href="#" className="text-gray-700 hover:text-amber-600 transition"><FaFacebookF size={18} /></a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition"><FaInstagram size={18} /></a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition"><FaTwitter size={18} /></a>
              <a href="#" className="text-gray-700 hover:text-amber-600 transition"><FaPinterestP size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} FRAGRANCE. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#E6C16A] border border-gray-400 text-black p-3 rounded-full shadow-lg hover:bg-amber-600 hover:text-white transition-all"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </footer>
  </>
);  
}
