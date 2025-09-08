'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Produk() {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [page, setPage] = useState(0);

  const products = [
    {
      id: "A",
      name: "Kaos Anak",
      images: ["/KAOS/A (1).webp", "/KAOS/A (2).webp", "/KAOS/A (3).webp", "/KAOS/A (4).webp"],
      bahan: "Cotton Combed 30s",
      warna: ["Hitam", "Putih", "Navy", "Cream"],
      size: ["S", "M", "L", "XL"]
    },
    {
      id: "L",
      name: "Kaos Lengan Panjang",
      images: ["/KAOS/L (1).webp", "/KAOS/L (2).webp", "/KAOS/L (3).webp", "/KAOS/L (4).webp"],
      bahan: "Cotton Combed 24s",
      warna: ["Hitam", "Putih", "Abu-abu"],
      size: ["M", "L", "XL", "XXL"]
    },
    {
      id: "O",
      name: "Kaos Oversize",
      images: ["/KAOS/O  (1).webp", "/KAOS/O  (2).webp", "/KAOS/O  (3).webp", "/KAOS/O  (4).webp"],
      bahan: "Cotton Combed Premium",
      warna: ["Hitam", "Putih", "Navy"],
      size: ["All Size Oversize"]
    },
    {
      id: "R",
      name: "Kaos Reguler",
      images: ["/KAOS/R (1).webp", "/KAOS/R (2).webp", "/KAOS/R (3).webp", "/KAOS/R (4).webp"],
      bahan: "Cotton Combed 30s",
      warna: ["Hitam", "Putih", "Hijau Army"],
      size: ["S", "M", "L", "XL"]
    },
    {
      id: "P",
      name: "Kaos Polo",
      images: ["/KAOS/P  (1).webp", "/KAOS/P  (2).webp", "/KAOS/P  (3).webp", "/KAOS/P (4).webp"],
      bahan: "Lacoste Pique",
      warna: ["Hitam", "Putih", "Merah", "Biru"],
      size: ["M", "L", "XL"]
    }
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const nextImage = () => {
    if (selected) {
      setImageIndex((prev) => (prev + 1) % selected.images.length);
    }
  };

  const prevImage = () => {
    if (selected) {
      setImageIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length);
    }
  };

  return (
    <section id="produk" className="py-16 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Produk Kami</h2>
      <div className="container mx-auto px-4 text-center">
        <div 
          key={page} // ini penting biar trigger animasi ulang tiap ganti page
          className="grid md:grid-cols-3 gap-8 animate-fadeIn"
        >
          {currentProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
              <Image src={p.images[0]} alt={p.name} width={400} height={300} className="rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
              <button
                onClick={() => { setSelected(p); setImageIndex(0); }}
                className="mt-4 bg-cyan-900 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination angka bulat */}
      <div className="flex justify-center space-x-3 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition ${
              page === i
                ? "bg-cyan-900 text-white border-cyan-900"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>

            {/* Image Carousel */}
            <div className="relative bg-gray-200 rounded-xl p-4 flex items-center justify-center">
              <Image
                src={selected.images[imageIndex]}
                alt={selected.name}
                width={500}
                height={350}
                className="rounded-lg mx-auto"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 text-left">
              <p><strong>Bahan:</strong> {selected.bahan}</p>
              <p><strong>Warna:</strong> {selected.warna.join(", ")}</p>
              <p><strong>Ukuran:</strong> {selected.size.join(", ")}</p>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-cyan-900 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
