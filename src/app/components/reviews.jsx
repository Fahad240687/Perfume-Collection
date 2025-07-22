"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

// Inline AOS styles
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
  {
    name: "Jack Smith",
    date: "June 03, 2023",
    content:
      "Very lovely fragrance. Would recommend to individuals looking for a combination of sweetness and elegance in perfume. I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.",
  },
  {
    name: "Ashley",
    date: "January 05, 2023",
    content:
      "I like floral perfume, and this one is lovely, it’s not overpowering. Nice, pleasant scent. I am happy with purchase.",
  },
  {
    name: "Lauri Jess",
    date: "October 05, 2022",
    content:
      "I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists.",
  },
];

export default function ReviewSection() {
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-out" });
    setAnimateHeading(true);
  }, []);

  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4 md:px-20">
      {/* Inject AOS styles */}
      <style>{aosStyle}</style>

      {/* Animated Heading */}
      <h2
        className={`text-3xl sm:text-5xl font-extrabold font-serif text-center text-[#DAB060] tracking-wide mb-12 transition-all duration-700 ease-out cursor-default select-none ${
          animateHeading ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } hover:text-[#E6C16A] hover:scale-105 hover:drop-shadow-lg`}
      >
        Reviews
      </h2>

      {/* Ratings Summary */}
      <div
        className="grid md:grid-cols-3 gap-8 items-center mb-12"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        {/* Star Bars */}
        <div className="space-y-2">
          {["5 stars", "4 stars", "3 stars", "2 stars", "1 star"].map((label, idx) => (
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
          ))}
        </div>

        {/* Star Summary */}
        <div className="text-center">
          <div className="flex justify-center text-yellow-400 text-xl mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="text-xl font-semibold">5 out of 5</div>
          <p className="text-sm text-gray-300">
            99% of reviewers recommend this product
          </p>
        </div>

        {/* Review Button */}
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

            {/* Content */}
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
  );
}
