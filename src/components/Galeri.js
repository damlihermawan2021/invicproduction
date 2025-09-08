'use client';

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Galeri() {
  const images = [
    "https://picsum.photos/600/800?random=11",
    "https://picsum.photos/600/500?random=12",
    "https://picsum.photos/600/700?random=13",
    "https://picsum.photos/600/600?random=14",
    "https://picsum.photos/600/750?random=15",
    "https://picsum.photos/600/550?random=16",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <h2 className="text-3xl text-center font-bold mb-12">Galeri</h2>
      <div className="container mx-auto px-6">
        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img}
                alt={`Galeri ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={prevImage}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[selectedIndex]}
            alt="Preview"
            className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl object-contain transition"
          />
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={nextImage}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
