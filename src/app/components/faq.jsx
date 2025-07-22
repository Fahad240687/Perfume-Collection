"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I update my billing information?",
    answer:
      "You can update your billing information by visiting your account settings and navigating to the billing section."
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Click on the 'Contact Us' button at the bottom of the website or email us at support@yourbrand.com."
  },
  {
    question: "How do I update my profile information?",
    answer:
      "Log in to your account and go to your profile page to update your personal details."
  },
  {
    question: "How do I find my purchase history?",
    answer:
      "Navigate to the Orders section in your account dashboard to view your purchase history."
  },
  {
    question: "Do you offer gift wrapping or packaging?",
    answer:
      "Yes, all orders come in elegant signature packaging, and you can add a personalized note during checkout."
  },
  {
    question: "Can I cancel or modify my order after placing it?",
    answer:
      "You can request changes within 2 hours of placing the order by contacting support. After that, modifications are limited."
  },
  {
    question: "Are your perfumes cruelty-free and vegan?",
    answer:
      "Yes, all of our products are 100% cruelty-free and vegan, made without animal-derived ingredients."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
    useEffect(() => {
        setAnimateHeading(true);
    }, []);
  const [animateHeading, setAnimateHeading] = useState(false);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
 <h2
              className={`
                max-w-3xl mx-auto
                text-4xl sm:text-5xl
                font-serif font-extrabold
                text-center text-[#DAB060]
                tracking-wide
                mb-10 md:mb-4
                transition-all duration-700 ease-out
                cursor-default
                select-none
                ${
                  animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }
                hover:text-[#E6C16A]
                hover:scale-105
                hover:drop-shadow-lg
              `}
            >
              Our Collections
            </h2>          <h2 className="text-2xl  text-gray-100 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-100 rounded-2xl overflow-hidden hover:bg-[#E6C16A] transition-all duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center text-gray-100 hover:text-black"
                onClick={() => toggle(index)}
              >
                <h5 className="text-lg font-medium">{faq.question}</h5>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-500 group-hover:text-black"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-white hover:text-black  text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}