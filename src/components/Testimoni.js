'use client';

import { Quote } from "lucide-react";

export default function Testimoni() {
  const testimonies = [
    {
      name: "Andi Pratama",
      text: "Kaosnya nyaman banget dipakai dan sablonnya awet. Recommended!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Siti Aminah",
      text: "Pesanan untuk komunitas kami datang tepat waktu dan hasilnya memuaskan.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Budi Santoso",
      text: "Harga terjangkau tapi kualitas tetap premium. Mantap!",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="container text-center mb-16 mx-auto px-6">
        {/* Judul */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">Testimoni Pelanggan</h2>
          <p className="text-gray-600 mt-3">
            Apa kata mereka yang sudah mempercayakan produk kami.
          </p>
        </div>

        {/* Card Testimoni */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonies.map((t, i) => (
            <div
              key={i}
              className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              {/* Icon Quote */}
              <div className="absolute -top-6 bg-cyan-600 text-white p-3 rounded-full shadow-md">
                <Quote className="w-5 h-5" />
              </div>

              {/* Foto Profil */}
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-4"
              />

              {/* Text */}
              <p className="italic text-gray-700 mb-4">"{t.text}"</p>

              {/* Nama */}
              <h3 className="font-semibold text-lg text-cyan-900">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
