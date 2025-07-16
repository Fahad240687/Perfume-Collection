"use client"

import { useRef, useState } from "react"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter, // Added Twitter icon
  FaSpinner,
} from "react-icons/fa"
import Image from "next/image"

export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      alert("Message sent!")
      setLoading(false)
      form.current.reset()
    }, 1500)
  }

  return (
    <section className="bg-[#1F1F1F] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl  text-center text-white mb-16">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 p-6 rounded-md shadow-sm bg-[#1F1F1F]" // Background already dark
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full text-white rounded-md py-2.5 px-4 border border-gray-100 text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full text-white rounded-md py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full text-white rounded-md py-2.5 px-4 border border-gray-300 text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full text-white rounded-md px-4 py-2.5 border border-gray-300 text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B67D43] hover:bg-[#CE9F56] text-black text-sm font-medium px-4 py-2.5 rounded-md transition duration-300 flex justify-center items-center" // Golden Yellow button
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin w-4 h-4 mr-2" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Right Side: Contact Image */}
          <div className="flex flex-col gap-8">
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden shadow-xl rounded-md">
              <Image src="/images/Contactimg.png" alt="Contact Illustration" fill className="object-cover rounded-md" />
            </div>
          </div>
        </div>

        {/* Get in Touch Section - Moved to bottom left */}
        <div className="mt-16 lg:mt-20 p-6 rounded-md shadow-sm bg-[#1F1F1F] text-white">
          <h2 className="text-5xl font-semibold mb-12 text-[#CE9F56]">Get in Touch</h2> {/* Golden Yellow Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-6 md:gap-12 mb-8">
            {/* Email */}
            <div className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-[#CE9F56] text-xl" /> {/* Golden Yellow Icon */}
              <span>agfsdgfsdfdg@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-3 text-sm">
              <FaPhoneAlt className="text-[#CE9F56] text-xl" /> {/* Golden Yellow Icon */}
              <span>0331-543543 | 0323-5345435435</span>
            </div>
            {/* Address */}
            <div className="flex items-center gap-3 text-sm">
              <FaMapMarkerAlt className="text-[#CE9F56] text-xl" /> {/* Golden Yellow Icon */}
              <span>123 Paint Street, Karachi, Pakistan</span>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-start gap-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg" />
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
