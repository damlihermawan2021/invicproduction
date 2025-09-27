'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/* ===================== SIZE CHART (mobile rapat, no scroll) ===================== */
function SizeChart({ code }) {
  const T = {
    A: [
      { size: "S",  usia: "2 THN",  lebar: 32, panjang: 43 },
      { size: "M",  usia: "4 THN",  lebar: 34, panjang: 46 },
      { size: "L",  usia: "6 THN",  lebar: 36, panjang: 49 },
      { size: "XL", usia: "8 THN",  lebar: 38, panjang: 52 },
      { size: "2XL",usia: "10 THN", lebar: 40, panjang: 55 },
      { size: "3XL",usia: "12 THN", lebar: 42, panjang: 59 },
      { size: "4XL",usia: "14 THN", lebar: 44, panjang: 64 },
    ],
    R: [
      { size: "S", lebar: 47, lingkardada: 94,  panjang: 68 },
      { size: "M", lebar: 49, lingkardada: 98,  panjang: 71 },
      { size: "L", lebar: 51, lingkardada: 102, panjang: 73 },
      { size: "XL", lebar: 53, lingkardada: 106, panjang: 75 },
      { size: "2XL",lebar: 55, lingkardada: 110, panjang: 77 },
      { size: "3XL",lebar: 57, lingkardada: 114, panjang: 79 },
      { size: "4XL",lebar: 59, lingkardada: 118, panjang: 81 },
    ],
    P: [
      { size: "S", lebar: 47, lingkardada: 94,  panjang: 68 },
      { size: "M", lebar: 49, lingkardada: 98,  panjang: 71 },
      { size: "L", lebar: 51, lingkardada: 102, panjang: 73 },
      { size: "XL", lebar: 53, lingkardada: 106, panjang: 75 },
      { size: "2XL",lebar: 55, lingkardada: 110, panjang: 77 },
      { size: "3XL",lebar: 57, lingkardada: 114, panjang: 79 },
      { size: "4XL",lebar: 59, lingkardada: 118, panjang: 81 },
    ],
    O: [
      { size: "S",  lebar: 52, panjang: 69, lengan: 19 },
      { size: "M",  lebar: 54, panjang: 71, lengan: 21 },
      { size: "L",  lebar: 56, panjang: 74, lengan: 23 },
      { size: "XL", lebar: 58, panjang: 77, lengan: 25 },
      { size: "2XL",lebar: 60, panjang: 80, lengan: 27 },
      { size: "3XL",lebar: 62, panjang: 82, lengan: 29 },
      { size: "4XL",lebar: 64, panjang: 84, lengan: 31 },
    ],
    L: [
      { size: "S",  lebar: 47, panjang: 68, lengan: 58 },
      { size: "M",  lebar: 48, panjang: 71, lengan: 60 },
      { size: "L",  lebar: 51, panjang: 73, lengan: 62 },
      { size: "XL", lebar: 53, panjang: 75, lengan: 64 },
      { size: "2XL",lebar: 55, panjang: 77, lengan: 66 },
      { size: "3XL",lebar: 57, panjang: 79, lengan: 68 },
      { size: "4XL",lebar: 59, panjang: 81, lengan: 70 },
    ],
  };

  const titleMap = {
    A: ["SIZE","USIA","LEBAR","PANJANG"],
    R: ["SIZE","LEBAR","LINGKAR DADA","PANJANG"],
    P: ["SIZE","LEBAR","LINGKAR DADA","PANJANG"],
    O: ["SIZE","LEBAR","PANJANG","LENGAN"],
    L: ["SIZE","LEBAR","PANJANG","LENGAN"],
  };

  const rows = T[code] || [];
  const hdr = titleMap[code] || [];
  if (!rows.length) return null;

  // Lebar per kolom. Kalau masih mepet di HP kecil, kecilin lagi angka w-xx
  const W = ["w-14", "w-20", "w-28", "w-20"];

  const HeadCell = ({ text, idx }) => (
    <th
      className={`px-1.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-gray-700 whitespace-nowrap ${W[idx]}`}
    >
      {text}
    </th>
  );
  const Cell = ({ children, idx }) => (
    <td className={`px-1.5 sm:px-3 py-1.5 sm:py-2 text-[10px] sm:text-sm whitespace-nowrap ${W[idx]}`}>
      {children}
    </td>
  );

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Size Chart</h3>
      <div className="rounded-2xl border border-gray-200">
        <table className="w-full table-fixed">
          <thead className="bg-gray-50">
            <tr>
              {hdr.map((h, i) => <HeadCell key={h} text={h} idx={i} />)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                <Cell idx={0}>{r.size}</Cell>

                {code === "A" ? (
                  <>
                    <Cell idx={1}>{r.usia}</Cell>
                    <Cell idx={2}>{r.lebar} cm</Cell>
                    <Cell idx={3}>{r.panjang} cm</Cell>
                  </>
                ) : code === "R" || code === "P" ? (
                  <>
                    <Cell idx={1}>{r.lebar} cm</Cell>
                    <Cell idx={2}>{r.lingkardada} cm</Cell>
                    <Cell idx={3}>{r.panjang} cm</Cell>
                  </>
                ) : (
                  <>
                    <Cell idx={1}>{r.lebar} cm</Cell>
                    <Cell idx={2}>{r.panjang} cm</Cell>
                    <Cell idx={3}>{r.lengan} cm</Cell>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-3 py-3 bg-gray-50 text-[10px] sm:text-[12px] text-gray-600 rounded-b-2xl">
          * Toleransi ukuran ±1–2 cm. Disarankan ukur kaos favorit kamu, lalu cocokkan dengan tabel.
        </div>
      </div>
    </div>
  );
}
/* ========================== END SIZE CHART ========================== */

export default function Produk() {
  const [selected, setSelected] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const products = [
    {
      id: "R",
      name: "Kaos Reguler",
      images: ["/KAOS/R (4).webp", "/KAOS/R (2).webp", "/KAOS/R (3).webp", "/KAOS/R (1).webp"],
      bahan: [
        "100% Cotton Combed BCI (24s & 20s putih)",
        "BCI : Better Cotton Initiative - Katun terbaik di dunia",
        "Teknologi BIOWASH : Tidak Berbulu",
        "Teknologi Coolbreeze : Adem dan tidak panas",
        "Gramasi 175 - 185 gsm (tidak setebal oversized)",
        "Premium & High Quality",
      ],
      warna: ["HITAM", "PUTIH", "BEIGE", "NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
    {
      id: "O",
      name: "Kaos Oversize",
      images: ["/KAOS/O (3).webp", "/KAOS/O (2).webp", "/KAOS/O (1).webp", "/KAOS/O (4).webp"],
      bahan: [
        "100% Cotton Aloe - Japan (20s)",
        "Anti Bacterial",
        "Teknologi Coolbreeze : Adem dan tidak panas",
        "Gramasi/ketebalan : 200-210 gsm, Heavywheight (Sangat tebal khusus untuk oversized)",
        "Premium & High Quality",
      ],
      warna: ["HITAM", "PUTIH", "BEIGE", "NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
    {
      id: "P",
      name: "Kaos Polo",
      images: ["/KAOS/P  (2).webp", "/KAOS/P  (3).webp", "/KAOS/P  (1).webp", "/KAOS/P (4).webp"],
      bahan: [
        "Pique CVC : campuran dari serat Cotton dan Polyester (Dominan Cotton)",
        "Gramasi/ketebalan : 200-210 gsm",
        "Teknologi Coolbreeze : Adem dan tidak panas",
        "Tebal dan tidak Mudah Kusut",
        "Berkerah & Pakai Karet Lengan",
      ],
      warna: ["HITAM", "PUTIH", "BEIGE", "NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
    {
      id: "L",
      name: "Kaos Lengan Panjang",
      images: ["/KAOS/L (2).webp", "/KAOS/L (1).webp", "/KAOS/L (3).webp", "/KAOS/L (4).webp"],
      bahan: [
        "100% Cotton Combed BCI (24s & 20s putih)",
        "BCI : Better Cotton Initiative - Katun terbaik di dunia",
        "Teknologi BIOWASH : Tidak Berbulu",
        "Teknologi Coolbreeze : Adem dan tidak panas",
        "Gramasi 175 - 185 gsm (tidak setebal oversized)",
        "Premium & High Quality",
      ],
      warna: ["HITAM", "PUTIH", "BEIGE", "NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
    {
      id: "A",
      name: "Kaos Anak",
      images: ["/KAOS/A (1).webp", "/KAOS/A (2).webp", "/KAOS/A (3).webp", "/KAOS/A (4).webp"],
      bahan: [
        "100% Cotton Combed BCI (24s & 20s putih)",
        "BCI : Better Cotton Initiative - Katun terbaik di dunia",
        "Teknologi BIOWASH : Tidak Berbulu",
        "Teknologi Coolbreeze : Adem dan tidak panas",
        "Gramasi 175 - 185 gsm (tidak setebal oversized)",
        "Premium & High Quality",
      ],
      warna: ["HITAM", "PUTIH", "BEIGE", "NAVY"],
      size: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    },
  ];

  const itemsPerPage = 5;
  const currentProducts = products.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);

  const nextImage = () => {
    if (selected) setImageIndex((prev) => (prev + 1) % selected.images.length);
  };
  const prevImage = () => {
    if (selected) setImageIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length);
  };

  const waHref = () => {
    const base = `Hallo Invic Production, saya mau order ${selected?.name}`;
    const withSize = selectedSize ? `${base} - Size: ${selectedSize}` : base;
    return `https://api.whatsapp.com/send?phone=6282211911170&text=${encodeURIComponent(withSize)}`;
  };

  return (
    <section id="produk" className="py-16 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-8">Produk Kami</h2>

      <div className="flex justify-center px-4">
        <div key={page} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fadeIn">
          {currentProducts.map((p) => (
            <div key={p.id} className="bg-gray-200 rounded-2xl shadow-md p-4 hover:shadow-lg transition text-center">
              <Image src={p.images[0]} alt={p.name} width={400} height={300} className="rounded-lg mx-auto" />
              <hr className="text-gray-600" />
              <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
              <button
                onClick={() => { setSelected(p); setImageIndex(0); setSelectedSize(null); }}
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
          {/* Modal agak lebih lebar supaya tabel nyaman */}
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative">
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
              <div className="flex flex-wrap justify-start gap-2 mt-2">
                {selected.warna.map((warna, index) => {
                  let buttonColor;
                  switch (warna.toLowerCase()) {
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
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
              {selected.size.map((sz) => {
                const active = selectedSize === sz;
                return (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`px-2 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-sm rounded-md sm:rounded-lg border transition
                      ${active ? 'bg-red-700 text-white border-red-700'
                              : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
                    aria-pressed={active}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
            </div>

            {/* Size Chart tampil langsung */}
            <SizeChart code={selected.id} />

            <div className="mt-6 text-center">
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition inline-block text-sm sm:text-base"
              >
                Pesan Sekarang
              </a>
              {selectedSize && (
                <p className="text-[12px] text-gray-600 mt-2">
                  Ukuran dipilih: <span className="font-medium">{selectedSize}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
