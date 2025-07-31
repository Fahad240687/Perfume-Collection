"use client";

import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [animateHeading, setAnimateHeading] = useState(false);

  useEffect(() => {
    setAnimateHeading(true);
  }, []);

  const images = [
    "/images/Collection/collection6.png",
    "/images/Collection/collection2.png",
    "/images/Collection/collection4.png",
    "/images/Collection/collection6.png",
    "/images/Collection/collection7.png",
  ];

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc("");
  };

  return (
    <>
      <style jsx>{`
        .lightbox {
          display: ${lightboxOpen ? "flex" : "none"};
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.8);
          align-items: center;
          justify-content: center;
        }
        .lightbox-image {
          max-width: 90%;
          max-height: 90%;
          display: block;
          margin: auto;
          border-radius: 1rem;
        }
        .close {
          color: #fff;
          font-size: 3em;
          position: absolute;
          top: 20px;
          right: 30px;
          cursor: pointer;
          user-select: none;
          transition: color 0.3s ease;
        }
        .close:hover {
          color: #d9b24a;
        }
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
          cursor: pointer;
        }
        .image-container img {
          transition: transform 0.7s ease, filter 0.7s ease;
          border-radius: 1rem;
        }
        .image-container:hover img {
          filter: grayscale(70%);
          transform: scale(1.05);
        }
        .overlay-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          color: #dab060;
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.4;
          padding: 1rem 1.25rem;
          opacity: 0;
          transform: translateY(100%);
          transition: opacity 0.5s ease, transform 0.5s ease;
          text-align: center;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          user-select: none;
          white-space: normal;
          overflow: hidden;
        }
        .image-container:hover .overlay-text {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive tweaks */
        @media (max-width: 768px) {
          h2 {
            font-size: 2rem !important;
            margin-bottom: 1rem !important;
          }
          .gallery {
            padding: 0 0.5rem;
          }
          .md\\:col-span-4, .md\\:col-span-8 {
            grid-column: span 1 !important;
          }
          .md\\:grid-cols-12, .md\\:grid-cols-3 {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          .md\\:h-\\[404px\\], .h-\\[240px\\] {
            height: 180px !important;
          }
          .image-container {
            height: 180px !important;
          }
          .mb-10, .lg\\:mb-11, .mb-7 {
            margin-bottom: 1rem !important;
          }
          .gap-6 {
            gap: 1rem !important;
          }
          .overlay-text {
            font-size: 0.8rem;
            padding: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          .md\\:h-\\[404px\\], .h-\\[240px\\] {
            height: 150px !important;
          }
          .image-container {
            height: 150px !important;
          }
          .overlay-text {
            font-size: 0.7rem;
          }
        }
      `}</style>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="grid gap-2.5 lg:pb-16 pb-8">
            <h2
              className={`
                max-w-3xl mx-auto
                text-3xl sm:text-4xl md:text-5xl
                font-serif font-extrabold
                text-center text-[#DAB060]
                tracking-wide
                mb-6 md:mb-4
                transition-all duration-700 ease-out
                cursor-default
                select-none
                ${
                  animateHeading
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }
                hover:text-[#E6C16A]
                hover:scale-105
                hover:drop-shadow-lg
              `}
            >
              Our Collections
            </h2>
            <div className="w-full text-center text-gray-100 text-base md:text-lg font-normal">
              Step into a realm where art comes to life.
            </div>
          </div>

          <div className="gallery">
            <div className="flex flex-col mb-6 md:mb-10">
              <div className="grid md:grid-cols-12 gap-4 md:gap-6 lg:mb-11 mb-5">
                <div
                  className="md:col-span-4 md:h-[404px] h-[180px] sm:h-[240px] w-full image-container"
                >
                  <img
                    src={images[0]}
                    alt="Gallery image"
                    className="object-cover w-full h-full rounded-2xl md:rounded-3xl"
                    onClick={() => openLightbox(images[0])}
                    loading="lazy"
                  />
                  <div className="overlay-text">
                    An elegant fragrance that captures the essence of timeless luxury, blending classic notes with modern sophistication.
                  </div>
                </div>
                <div
                  className="md:col-span-8 md:h-[404px] h-[180px] sm:h-[240px] w-full image-container"
                >
                  <img
                    src={images[1]}
                    alt="Gallery image"
                    className="object-cover w-full h-full rounded-2xl md:rounded-3xl"
                    onClick={() => openLightbox(images[1])}
                    loading="lazy"
                  />
                  <div className="overlay-text">
                    Let yourself be enveloped in this luxurious aroma — crafted with care, designed to leave a lasting impression wherever you go.
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-6">
                {images.slice(2).map((src, i) => (
                  <div
                    key={i}
                    className="h-[150px] sm:h-[200px] md:h-[240px] w-full image-container"
                    onClick={() => openLightbox(src)}
                  >
                    <img
                      src={src}
                      alt={`Gallery image ${i + 3}`}
                      className="object-cover w-full h-full rounded-2xl md:rounded-3xl"
                      loading="lazy"
                    />
                    <div className="overlay-text">
                      Experience the allure of Exclusive Scent {i + 3}, blending rare ingredients with a hint of mystery and elegance.
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox */}
     {/* Lightbox */}
<div
  className="lightbox"
  onClick={(e) => {
    if (e.target.classList.contains("lightbox")) closeLightbox();
  }}
>
  <span className="close" onClick={closeLightbox}>
    &times;
  </span>
  {lightboxSrc && (
    <img src={lightboxSrc} alt="Lightbox" className="lightbox-image" />
  )}
</div>

      </section>
    </>
  );
}