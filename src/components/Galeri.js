"use client";

import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Galeri() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  // swipe gesture refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      try {
        const res = await fetch("/api/galery");
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error("Gagal ambil gambar:", err);
      }
      setLoading(false);
    }
    loadImages();
  }, []);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );

  // handle swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
    }
  };
  return (
    <section id="galeri" className="bg-gray-50">
      <h2 className="text-3xl text-center font-bold mb-12">Galeri</h2>

      <div className="container mx-auto px-4 sm:px-6">
        {loading ? (
          <div className="text-center py-10 animate-pulse">Memuat gambar…</div>
        ) : currentImages.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            Tidak ada gambar ditemukan.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {currentImages.map((img, i) => (
              <div
                key={i}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
                onClick={() => setSelectedIndex(indexOfFirstImage + i)}
              >
                <img
                  src={img}
                  alt={`Galeri ${indexOfFirstImage + i + 1}`}
                  className="w-full aspect-[4/3] object-cover transform transition duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="text-white text-sm sm:text-base font-semibold tracking-wide">
                    Lihat Detail
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 transition"
        >
          <ChevronLeft size={20} />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 rounded-full transition ${
              currentPage === i + 1
                ? "bg-red-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-40 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      {selectedIndex !== null && images.length > 0 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300"
            onClick={() => setSelectedIndex(null)}
            aria-label="Tutup"
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={prevImage}
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Preview ${selectedIndex + 1}`}
            className="max-h-[75vh] max-w-[90vw] rounded-xl shadow-2xl object-contain transition-transform duration-500 ease-in-out"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          <button
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            onClick={nextImage}
            aria-label="Berikutnya"
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-6 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
