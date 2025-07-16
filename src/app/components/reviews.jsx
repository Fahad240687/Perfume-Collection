"use client";

import { FaStar } from "react-icons/fa";

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
      "I tried a sample and fell in love with this fragrance so I had to buy my first bottle. This fragrance is my treat for me. It helps to create a good mood. During a stressful day really nice to stop a few moments and revisit the scent from my wrists. I really love the fact that it doesn’t take the air out of the room. Some scents are so overbearing but not this on. Try it you just might really love it.",
  },
];

export default function ReviewSection() {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Reviews</h2>

      {/* Ratings Summary */}
      <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
        {/* Bar Ratings */}
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

        {/* Star Rating Summary */}
        <div className="text-center space-y-2">
          <div className="flex justify-center text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <div className="text-xl font-semibold">5 out of 5</div>
          <p className="text-sm text-gray-300">99% of reviewers recommend this product</p>
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
          <div key={index} className="flex gap-4 items-start">
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
  );
}
