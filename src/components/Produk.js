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
      id: "R",
      name: "Kaos Reguler",
      images: ["/KAOS/R (4).webp", "/KAOS/R (2).webp", "/KAOS/R (3).webp", "/KAOS/R (1).webp"],
      bahan: ['100% Cotton Combed BCI (24s & 20s putih)', 'BCI : Better Cotton Initiative - Katun terbaik di dunia', 'Teknologi BIOWASH : Tidak Berbulu', 'Teknologi Coolbreeze : Adem dan tidak panas', 'Gramasi 175 - 185 gsm (tidak setebal oversized)', 'Premium & High Quality'],
      warna: ["HITAM", "PUTIH", "BEIGE","NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
    },
    {
      id: "O",
      name: "Kaos Oversize",
      images: ["/KAOS/O  (3).webp", "/KAOS/O  (2).webp", "/KAOS/O  (1).webp", "/KAOS/O  (4).webp"],
      bahan: ['100% Cotton Aloe - Japan (20s)', 'Anti Bacterial', 'Teknologi Coolbreeze : Adem dan tidak panas', 'Gramasi/ketebalan : 200-210 gsm, Heavywheight (Sangat tebal khusus untuk oversized)', 'Premium & High Quality'],
      warna: ["HITAM", "PUTIH", "BEIGE","NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
    },
    {
      id: "P",
      name: "Kaos Polo",
      images: ["/KAOS/P  (2).webp", "/KAOS/P  (3).webp", "/KAOS/P  (1).webp", "/KAOS/P (4).webp"],
      bahan: ['Pique CVC : campuran dari serat Cotton dan Polyester (Dominan Cotton)', 'Gramasi/ketebalan : 200-210 gsm', 'Teknologi Coolbreeze : Adem dan tidak panas', 'Tebal dan tidak Mudah Kusut', 'Berkerah & Pakai Karet Lengan'],
      warna: ["HITAM", "PUTIH", "BEIGE","NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
    },
    {
      id: "L",
      name: "Kaos Lengan Panjang",
      images: ["/KAOS/L (2).webp", "/KAOS/L (1).webp", "/KAOS/L (3).webp", "/KAOS/L (4).webp"],
      bahan: ['100% Cotton Combed BCI (24s & 20s putih)', 'BCI : Better Cotton Initiative - Katun terbaik di dunia', 'Teknologi BIOWASH : Tidak Berbulu', 'Teknologi Coolbreeze : Adem dan tidak panas', 'Gramasi 175 - 185 gsm (tidak setebal oversized)', 'Premium & High Quality'],
      warna: ["HITAM", "PUTIH", "BEIGE","NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
    },
    {
      id: "A",
      name: "Kaos Anak",
      images: ["/KAOS/A (1).webp", "/KAOS/A (2).webp", "/KAOS/A (3).webp", "/KAOS/A (4).webp"],
      bahan: ['100% Cotton Combed BCI (24s & 20s putih)', 'BCI : Better Cotton Initiative - Katun terbaik di dunia', 'Teknologi BIOWASH : Tidak Berbulu', 'Teknologi Coolbreeze : Adem dan tidak panas', 'Gramasi 175 - 185 gsm (tidak setebal oversized)', 'Premium & High Quality'],
      warna: ["HITAM", "PUTIH", "BEIGE","NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
    },
  ];

  const itemsPerPage = 5;
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
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);


  return (
    <section id="produk" className="py-16 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Produk Kami</h2>
      <div className="flex justify-center px-4">
        <div 
          key={page}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fadeIn"
        >
          {currentProducts.map((p) => (
            <div key={p.id} className="bg-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition text-center">
              <Image src={p.images[0]} alt={p.name} width={400} height={300} className="rounded-lg mx-auto" />
              <hr className="text-gray-600" />
              <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
              <button
                onClick={() => { setSelected(p); setImageIndex(0); }}
                className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition"
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">{selected.name}</h2>

            <div className="relative bg-gray-200 rounded-xl p-2 sm:p-4 flex items-center justify-center">
              <Image
                src={selected.images[imageIndex]}
                alt={selected.name}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto object-contain"
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

            <div className="mt-4 text-left text-sm sm:text-base">
              <p className="font-semibold">Bahan:</p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2">
                {selected.bahan.map((b, index) => (
                  <li key={index} className="text-gray-700">{b}</li>
                ))}
              </ul>

              <p className="font-semibold mt-3">Warna:</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {selected.warna.map((warna, index) => {
                  let buttonColor;
                  switch(warna.toLowerCase()) {
                    case 'hitam': buttonColor = 'bg-black text-white'; break;
                    case 'putih': buttonColor = 'bg-white text-black border border-gray-400'; break;
                    case 'beige': buttonColor = 'bg-[#e8cda4] text-black'; break;
                    case 'navy': buttonColor = 'bg-[#182432] text-white'; break;
                    default: buttonColor = 'bg-gray-300 text-black';
                  }
                  return (
                    <button
                      key={index}
                      className={`px-3 py-1 text-xs sm:text-sm rounded-lg ${buttonColor} cursor-default`}
                      disabled
                    >
                      {warna}
                    </button>
                  );
                })}
              </div>

              <p className="font-semibold mt-3">Ukuran:</p>
              <p>{selected.size.join(", ")}</p>
            </div>

            <div className="mt-6 text-center">
              <a
                href={`https://api.whatsapp.com/send?phone=6282211911170&text=Hallo%20Invic%20Production%2C%20saya%20mau%20order%20${encodeURIComponent(selected.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition inline-block text-sm sm:text-base"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
