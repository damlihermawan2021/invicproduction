import { useEffect, useRef, useState } from "react";
import Image from "next/image"; // ✅ pakai Next Image

const images = [
  "/KAOS/A (1).webp", "/KAOS/A (2).webp", "/KAOS/A (3).webp", "/KAOS/A (4).webp",
  "/KAOS/L (1).webp", "/KAOS/L (2).webp", "/KAOS/L (3).webp", "/KAOS/L (4).webp",
  "/KAOS/O (1).webp", "/KAOS/O (2).webp", "/KAOS/O (3).webp", "/KAOS/O (4).webp",
  "/KAOS/P (1).webp", "/KAOS/P (2).webp", "/KAOS/P (3).webp", "/KAOS/P (4).webp",
  "/KAOS/R (1).webp", "/KAOS/R (2).webp", "/KAOS/R (3).webp"
];

export default function ImageSlider() {
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pos = 0;
    let frame;
    const move = () => {
      pos -= 1;
      if (Math.abs(pos) >= track.scrollWidth / 2) {
        pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      setOffset(pos);
      frame = requestAnimationFrame(move);
    };

    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pt-24 md:pt-12">
      
      {/* Text Section */}
      <div className="order-1 md:order-2 w-full md:w-1/3 px-4 md:px-0 max-w-md space-y-3">
        <div className="md:bg-transparent bg-black/60 md:p-0 p-4 rounded-lg">
          
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg">
            <span className="text-red-600">INVIC</span>{" "}
            <span className="text-white">PRODUCTION</span>
          </h2>

          {/* Descriptions */}
          <p className="text-lg md:text-xl font-semibold text-gray-100 leading-relaxed drop-shadow-md">
            Memproduksi Pakaian Premium &amp; High Quality untuk kebutuhanmu dan
            komunitasmu.
          </p>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md">
            Kami juga menyediakan Kaos Polos dengan berbagai varian warna dan
            style serta sablon satuan.
          </p>

          {/* Button */}
          <a href="#produk">
            <button className="mt-4 bg-red-800 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
              Lihat Koleksi
            </button>
          </a>
        </div>
      </div>

      {/* Slider Section */}
      <div className="order-2 md:order-1 w-full md:w-2/3 overflow-hidden relative flex items-center">
        <div ref={trackRef} className="flex transition-transform">
          {[...images, ...images].map((image, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-1/2 md:w-1/3 flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`Kaos ${i}`}
                width={300} // ✅ wajib diisi
                height={400} // ✅ wajib diisi
                className="w-auto max-h-64 sm:max-h-72 md:max-h-[400px] object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
