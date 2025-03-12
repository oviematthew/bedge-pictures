"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Fix accessibility warning
Modal.setAppElement("body");

export default function MasonryGallery({ folderPath }) {
  const [allImages, setAllImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/gallery?folder=${folderPath}`);
        const data = await response.json();
        setAllImages(data.images);
        setVisibleImages(data.images.slice(0, 9)); // Load first 9 images
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [folderPath]);

  // Load more images when user scrolls
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleImages((prev) => [
          ...prev,
          ...allImages.slice(prev.length, prev.length + 9),
        ]);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allImages]);

  // Handlers for navigation
  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      {/* Skeleton Loader */}
      {loading ? (
        <div className="columns-2 md:columns-3 gap-4 space-y-4 p-4 animate-pulse">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-lg"
            />
          ))}
        </div>
      ) : (
        // Masonry Grid
        <div className="columns-2 md:columns-3  gap-4 space-y-4 p-4">
          {visibleImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`Gallery Image ${index}`}
              className="w-full rounded-lg cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedIndex(index)}
              loading="lazy"
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <Modal
        isOpen={selectedIndex !== null}
        onRequestClose={() => setSelectedIndex(null)}
        className="fixed inset-0 sm:top-5 flex items-center justify-center  bg-black bg-opacity-80"
      >
        {selectedIndex !== null && (
          <div
            className="relative flex items-center justify-center w-full h-full px-4"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] bg-white dark:bg-black p-2 rounded-lg shadow-lg flex items-center justify-center">
              <Image
                src={allImages[selectedIndex].src}
                alt={`Gallery Image ${selectedIndex}`}
                width={300}
                height={300}
                className=" object-contain"
              />

              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white bg-black dark:bg-white dark:text-black p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
              >
                <X size={30} />
              </button>

              {/* Left Arrow Button */}
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft size={30} />
              </button>

              {/* Right Arrow Button */}
              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-black p-2 rounded-full shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
