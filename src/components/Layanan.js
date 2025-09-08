'use client';

import { Palette, Scissors, Pencil } from "lucide-react"; // ✅ semua ada di lucide-react

export default function Layanan() {
  const services = [
    {
      title: "Sablon Kaos",
      desc: "Melayani sablon kaos satuan maupun partai besar dengan kualitas terbaik.",
      icon: Palette,
    },
    {
      title: "Bordir",
      desc: "Bordir komputer presisi tinggi untuk kaos, polo, dan jaket.",
      icon: Scissors,
    },
    {
      title: "Custom Desain",
      desc: "Bisa request desain sesuai kebutuhan event, komunitas, atau bisnis.",
      icon: Pencil,
    },
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="text-center mb-16 mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold">Layanan Kami</h2>
          <p className="text-gray-600 mt-3">
            Kami menyediakan berbagai layanan untuk mendukung kebutuhan apparel Anda,
            dari produksi hingga desain custom.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="w-full md:w-80 p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center"
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-cyan-600 to-cyan-800 text-white shadow-lg mb-6">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
