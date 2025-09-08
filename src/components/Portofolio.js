'use client';

import { useState, useEffect } from "react";

export default function Portofolio() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Project Event Kampus",
      desc: "Produksi kaos untuk event kampus dengan desain eksklusif, tema sesuai acara, dan kualitas premium.",
      img: "https://picsum.photos/1000/600?random=41",
    },
    {
      title: "Kaos Komunitas",
      desc: "Custom kaos untuk komunitas motor dengan bordir logo yang awet, nyaman dipakai, dan identitas komunitas tetap kuat.",
      img: "https://picsum.photos/1000/600?random=42",
    },
    {
      title: "Merchandise Brand Lokal",
      desc: "Produksi merchandise eksklusif untuk brand fashion lokal dengan material terbaik dan desain yang modern.",
      img: "https://picsum.photos/1000/600?random=43",
    },
  ];

  // Lock scroll ketika modal terbuka
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selected]);

  return (
    <section id="portofolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Portofolio</h2>
          <p className="text-gray-600 mt-2">
            Beberapa project yang pernah kami kerjakan
          </p>
        </div>

        {/* Project Showcase */}
        <div className="space-y-20">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-80 md:h-[500px] object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                <p className="text-gray-200 mt-2 max-w-2xl">{p.desc}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="mt-4 self-start px-6 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-500 transition"
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative animate-fadeIn">
            {/* Tombol Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              ✕
            </button>

            {/* Gambar */}
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full h-80 object-cover rounded-t-2xl"
            />

            {/* Konten */}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>
              <p className="text-gray-700 leading-relaxed">{selected.desc}</p>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <button className="px-5 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-600 transition">
                  Hubungi Kami
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
