'use client';
import Image from "next/image";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Testimoni() {
  const testimonies = [
    {
      name: "Ani Sefriana Nadapdap",
      role: "Kepala Sekolah SMAN 2 BALIGE",
      text: "Awalnya kami memproduksi rompi di Invic Production, karna kualitas sangat bagus dan harga bersaing, kami juga memproduksi kebutuhan sekolah lainnya disini seperti baju Olahraga. Murid, Guru, dan bahkan Orang tua murid sangat suka dengan kualitas dari Invic Production.",
      img: "/Review/guru1.jpg",
    },
    {
      name: "Batak Hasian Official Store",
      role: "",
      text: "Semua kebutuhan toko kami diproduksi disini, kualitas sangat luar biasa. Terimakasih Invic Production sudah menjadi partner setia kami selama 3 tahun ini.",
      img: "/Review/guru4.jpg",
    },
    {
      name: "Rahmat Jumitar Sinaga",
      role: "Guru SMAN 1 PANGURURAN",
      text: "Kualitas tidak perlu diragukan lagi, tidak hanya berkualitas tinggi tetapi juga kualitas sangat premium dengan packaging dan bonus-bonus lainnya. Semoga bisa bekerja sama terus dengan Invic Production.",
      img: "/Review/guru2.jpg",
    },
    {
      name: "Single Katolik Official Store",
      role: "",
      text: "Dari awal brand kami dibuat, Invic Production sudah menjadi partner kami dalam mengembangkan brand kami hingga saat ini. Selalu improve dan memberikan pelayanan terbaik untuk kami. Terimakasih untuk semua Tim Invic Production.",
      img: "/Review/guru3.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const testimoniesLength = testimonies.length; // ✅ biar aman, const aja

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimoniesLength);
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, [testimoniesLength]); // ✅ dependency sudah bener

  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-cyan-900">Testimoni Pelanggan</h2>
          <p className="text-gray-600 mt-3">
            Apa kata mereka yang sudah mempercayakan produk kami.
          </p>
        </div>

        {/* Tampilan mobile */}
        <div className="sm:hidden relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonies.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full mt-7 px-4">
                <div className="relative p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-cyan-600 text-white p-3 rounded-full shadow-md z-10">
                    <Quote className="w-5 h-5" />
                  </div>
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={100}
                    height={100}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
                  />
                  <p className="italic text-gray-700 mb-6 leading-relaxed text-sm">
                    {t.text}
                  </p>
                  <h3 className="font-semibold text-lg text-cyan-900">{t.name}</h3>
                  {t.role && <p className="text-sm text-gray-500 mt-1">{t.role}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonies.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${index === i ? "bg-cyan-600 w-5" : "bg-gray-400"}`}
              />
            ))}
          </div>
        </div>

        {/* Tampilan desktop */}
        <div className="hidden sm:grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonies.map((t, i) => (
            <div
              key={i}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-red-600 text-white p-3 rounded-full shadow-md z-10">
                <Quote className="w-5 h-5" />
              </div>
              <Image
                src={t.img}
                alt={t.name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
              />
              <p className="italic text-gray-700 mb-6 leading-relaxed text-sm md:text-base">
                {t.text}
              </p>
              <h3 className="font-semibold text-lg text-cyan-900">{t.name}</h3>
              {t.role && <p className="text-sm text-gray-500 mt-1">{t.role}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
