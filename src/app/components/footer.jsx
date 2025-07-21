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
      <footer className="bg-white text-white py-12 w-full">
        <div className="px-4 md:px-6 xl:px-10 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-300 pb-10">
            {/* Brand Info */}
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
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><Link href="/returns">Returns & Refunds</Link></li>
                <li><Link href="/shipping">Shipping Info</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Our Company</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/locations">Store Locations</Link></li>
                <li><Link href="/sustainability">Sustainability</Link></li>
              </ul>
            </div>

            {/* Social + Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Stay Connected</h3>
              <p className="text-gray-700 text-sm mb-4">Join our newsletter</p>
              <form className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow px-4 py-2 rounded-md bg-gray-100 text-black border border-gray-300 text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#B67D43] hover:bg-[#DAB060] text-black px-4 py-2 rounded-md text-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex gap-3">
                <a href="#" className="text-gray-700 hover:text-amber-600"><FaFacebookF size={18} /></a>
                <a href="#" className="text-gray-700 hover:text-amber-600"><FaInstagram size={18} /></a>
                <a href="#" className="text-gray-700 hover:text-amber-600"><FaTwitter size={18} /></a>
                <a href="#" className="text-gray-700 hover:text-amber-600"><FaPinterestP size={18} /></a>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>&copy; {new Date().getFullYear()} FRAGRANCE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#E6C16A] border border-gray-400 text-black p-3 rounded-full shadow hover:bg-amber-600 hover:text-white transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={16} />
        </button>
      )}
    </>
  );
}
