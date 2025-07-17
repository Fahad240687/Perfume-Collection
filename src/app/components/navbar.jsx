"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/app/context/cart-context" // Import useCart


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
    const { cartItems } = useCart() // Get cartItems from context


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  // Shop dropdown items
  const shopItems = [
    { label: "Perfume", href: "/shop/perfume" },
    { label: "Attar", href: "/shop/attar" },
    { label: "Tester", href: "/shop/tester" },
    { label: "Gift Set", href: "/shop/gift-set" },
    { label: "Luxury Fragrance", href: "/shop/luxury-fragrance" },
    { label: "Customize Gift Box", href: "/shop/costomize-gift-box" },
    { label: "Arabic Collection", href: "/shop/arabic-collection" }, // New Arabic Collection link
  ]

  return (
    <nav className="bg-[#CE9F56] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-white font-bold text-xl">
                {/* Brand Logo */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mr-2"
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
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Middle */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {/* Shop Dropdown */}
                <Link
              href="/"
              className="text-white  hover:text-amber-200  block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
              <div className="relative">
                
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-amber-200 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#DAB060] ring-1 ring-[#B67D43] ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {shopItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-100 hover:bg-amber-100 hover:text-amber-800"
                          role="menuitem"
                          onClick={() => setShowDropdown(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <Link
                href="/about"
                className="text-white hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="text-white hover:text-amber-200 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop - Right Icons */}
           <div className="hidden md:flex items-center space-x-4">
            {/* Cart Icon */}
            <Link href="/cart" className="relative text-white hover:text-amber-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Heart/Favorite Icon */}
            <Link href="/favorites" className="text-white hover:text-amber-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart Icon - Mobile */}
            <Link href="/cart" className="text-white hover:text-amber-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>

            {/* Heart/Favorite Icon - Mobile */}
            <Link href="/favorites" className="text-white hover:text-amber-200 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </Link>

            {/* Hamburger button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-200 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            >
              {isOpen ? (
                // X icon
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu icon
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#DAB060]">
             <Link
              href="/"
              className="text-white  hover:text-amber-200  block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {/* Shop Dropdown - Mobile */}
            <div>
               
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-between items-center text-white hover:bg-amber-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>

              {/* Mobile Dropdown Items */}
              {showDropdown && (
                <div className="pl-4 space-y-1 mt-1">
                  {shopItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-white hover:bg-amber-800 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => {
                        setShowDropdown(false)
                        setIsOpen(false)
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About - Mobile */}
            <Link
              href="/about"
              className="text-white hover:bg-amber-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            {/* Contact - Mobile */}
            <Link
              href="/contact"
              className="text-white hover:bg-amber-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
