"use client"

import { useRef, useState, useEffect } from "react"
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpinner,
} from "react-icons/fa"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    setAnimateHeading(true);
  }, [])

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
    <section className="bg-[#1F1F1F] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1
          data-aos="fade-down"
          className={`
            max-w-3xl mx-auto
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-serif font-extrabold
            text-center text-[#DAB060]
            tracking-wide
            mb-6 md:mb-8 lg:mb-10
            transition-all duration-700 ease-out
            cursor-default
            select-none
            ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            hover:text-[#E6C16A]
            hover:scale-105
            hover:drop-shadow-lg
          `}
        >
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Side: Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-right"
            className="space-y-3 md:space-y-4 p-3 md:p-4 rounded-md bg-[#1F1F1F]"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full text-white rounded-md py-2 md:py-2.5 px-3 md:px-4 border border-gray-100 text-xs md:text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full text-white rounded-md py-2 md:py-2.5 px-3 md:px-4 border border-gray-300 text-xs md:text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full text-white rounded-md py-2 md:py-2.5 px-3 md:px-4 border border-gray-300 text-xs md:text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full text-white rounded-md px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 text-xs md:text-sm focus:border-blue-500 outline-none bg-transparent"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B67D43] hover:bg-[#CE9F56] text-black text-xs md:text-sm font-medium px-4 py-2 md:py-2.5 rounded-md transition duration-300 flex justify-center items-center"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin w-3 h-3 md:w-4 md:h-4 mr-2" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Right Side: Contact Image */}
          <div data-aos="fade-left" className="flex flex-col gap-4 md:gap-6">
            <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden rounded-md">
              <Image
                src="/images/Contactimg.png"
                alt="Contact Illustration"
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
        </div>

        {/* Get in Touch Section */}
        <div
          data-aos="fade-up"
          className="mt-10 md:mt-12 lg:mt-16 p-3 md:p-4 rounded-md bg-[#1F1F1F] text-white"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-12 text-[#CE9F56]">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-start gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Email */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <FaEnvelope className="text-[#CE9F56] text-lg md:text-xl" />
              <span>agfsdgfsdfdg@gmail.com</span>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <FaPhoneAlt className="text-[#CE9F56] text-lg md:text-xl" />
              <span>0331-543543 | 0323-5345435435</span>
            </div>
            {/* Address */}
            <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
              <FaMapMarkerAlt className="text-[#CE9F56] text-lg md:text-xl" />
              <span>123 Paint Street, Karachi, Pakistan</span>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="flex justify-start gap-4 md:gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-sm md:text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm md:text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#CE9F56] text-black hover:bg-[#E6B800] transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-sm md:text-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
