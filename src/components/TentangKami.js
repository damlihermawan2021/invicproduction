'use client';

import { Phone, Instagram } from "lucide-react";
import Image from "next/image";

export default function TentangKami() {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://picsum.photos/600/550?random=16" // sementara contoh, bisa ganti foto produk asli
            alt="Invic Production"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          {/* Title */}
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Tentang Kami</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Invic Production</strong> adalah penyedia jasa pembuatan kaos
            berkualitas tinggi dengan harga terjangkau. Berpengalaman melayani
            ribuan pelanggan, mulai dari event komunitas, perusahaan, hingga
            brand fashion lokal.
          </p>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-cyan-900 mb-3">Visi</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Menjadi partner terpercaya dalam pembuatan apparel custom yang
                mendukung identitas komunitas, bisnis, dan brand lokal di seluruh
                Indonesia.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-cyan-900 mb-3">Misi</h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>Menyediakan produk berkualitas premium dengan harga bersaing.</li>
                <li>Memberikan layanan cepat, tepat, dan profesional.</li>
                <li>Mendukung kreativitas melalui custom desain yang fleksibel.</li>
              </ul>
            </div>
          </div>

          {/* Ajakan */}
          <p className="text-lg text-gray-800 mb-6">
            Percayakan kebutuhan apparel Anda kepada kami. Saatnya wujudkan
            identitas komunitas dan brand Anda dengan produk berkualitas dari{" "}
            <strong>Invic Production</strong>.
          </p>

          {/* Kontak */}
          <div className="flex gap-4">
            <a
              href="https://wa.me/6282211911170"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700 transition"
            >
              <Phone className="w-5 h-5" /> WhatsApp
            </a>
            <a
              href="https://www.instagram.com/invic.production/"
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-90 transition"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
