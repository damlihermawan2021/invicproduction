'use client';

import { Phone, Instagram } from "lucide-react";

export default function TentangKami() {
  return (
    <section id="tentang" className="py-20 bg-gray-200">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Google Maps */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d395.04513171545275!2d110.8688772!3d-7.6152471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3d000b02253f%3A0x2c99b1944097af8f!2sInvic%20Production!5e0!3m2!1sid!2sid!4v1694438400000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Tentang Kami</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Invic Production</strong> adalah penyedia jasa pembuatan kaos
            berkualitas tinggi dengan harga terjangkau. Berpengalaman melayani
            ribuan pelanggan, mulai dari event komunitas, perusahaan, hingga
            brand fashion lokal.
          </p>
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

        </div>
      </div>
      <p className="text-lg text-gray-800 mb-6 text-center mt-5">
        Percayakan kebutuhan apparel Anda kepada kami. Saatnya wujudkan identitas komunitas dan brand Anda dengan produk berkualitas dari{" "}
        <strong>Invic Production</strong>.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="https://api.whatsapp.com/send?phone=6282211911170&text=Hallo%20Invic%20Production%2C%20saya%20mau%20order%20kaos"
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
    </section>
  );
}
