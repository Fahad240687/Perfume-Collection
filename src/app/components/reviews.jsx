"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

// Inline styles to fix white flash and set background for animations
const aosStyle = `
  [data-aos] {
    opacity: 0;
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
  }
  [data-aos].aos-animate {
    opacity: 1;
  }
  body {
    background-color: #1f1f1f;
  }
`;

const reviews = [
  // same reviews array...
];

export default function ReviewSection() {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out" });

    // Trigger heading animation on mount
    setAnimateHeading(true);
  }, []);

  return (
    <>
      {/* Inject the necessary CSS */}
      <style>{aosStyle}</style>

      <section
        className="bg-[#1f1f1f] text-white py-16 px-4 md:px-20"
        data-aos="fade-down"
      >
        <h2
          className={`
            max-w-4xl mx-auto
            text-5xl sm:text-6xl
            font-serif font-extrabold
            text-center text-[#DAB060]
            tracking-wide
            mb-12 md:mb-16
            transition-all duration-700 ease-out
            cursor-default
            select-none
            ${animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
            hover:text-[#E6C16A]
            hover:scale-105
            hover:drop-shadow-lg
          `}
        >
          Reviews
        </h2>

        {/* Ratings Summary */}
        <div
          className="grid md:grid-cols-3 gap-8 items-center mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          {/* Bar Ratings */}
          <div className="space-y-2">
            {["5 stars", "4 stars", "3 stars", "2 stars", "1 star"].map(
              (label, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-sm w-16">{label}</span>
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className={`h-2 rounded bg-yellow-400 ${
                        idx === 0 ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                  <span className="text-sm">{idx === 0 ? "100%" : "0%"}</span>
                </div>
              )
            )}
          </div>

          {/* Star Rating Summary */}
          <div className="text-center space-y-2">
            <div className="flex justify-center text-yellow-400 text-xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="text-xl font-semibold">5 out of 5</div>
            <p className="text-sm text-gray-300">
              99% of reviewers recommend this product
            </p>
          </div>

          {/* Review Count & Button */}
          <div className="text-center space-y-2">
            <div className="text-lg font-medium">90 reviews</div>
            <button className="text-sm text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-black transition">
              + Add a Review
            </button>
          </div>
        </div>

        {/* Review List */}
        <div className="space-y-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex gap-4 items-start"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
              {/* Avatar */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex-shrink-0" />

              {/* Review content */}
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={14} />
                  ))}
                </div>
                <p className="text-sm text-gray-200 mb-2">{review.content}</p>
                <div className="text-xs text-gray-400 flex justify-between w-full max-w-sm">
                  <span>{review.name}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
