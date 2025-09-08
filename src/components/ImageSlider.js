import { useEffect, useRef, useState } from "react";

const images = [
  "/KAOS/A (1).webp",
  "/KAOS/A (2).webp",
  "/KAOS/A (3).webp",
  "/KAOS/A (4).webp",
  "/KAOS/L (1).webp",
  "/KAOS/L (2).webp",
  "/KAOS/L (3).webp",
  "/KAOS/L (4).webp",
  "/KAOS/O  (1).webp",
  "/KAOS/O  (2).webp",
  "/KAOS/O  (3).webp",
  "/KAOS/O  (4).webp",
  "/KAOS/P  (1).webp",
  "/KAOS/P  (2).webp",
  "/KAOS/P  (3).webp",
  "/KAOS/P (4).webp",
  "/KAOS/R (1).webp",
  "/KAOS/R (2).webp",
  "/KAOS/R (3).webp"
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

  const handlePrev = () => {
    const track = trackRef.current;
    if (!track) return;
    const newPos = offset + 200;
    track.style.transform = `translateX(${newPos}px)`;
    setOffset(newPos);
  };

  const handleNext = () => {
    const track = trackRef.current;
    if (!track) return;
    const newPos = offset - 200;
    track.style.transform = `translateX(${newPos}px)`;
    setOffset(newPos);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="article-container order-1 md:order-2 w-full md:w-1/3 text-white px-4 md:px-0">
        <h2 className="text-xl font-bold mb-4">Artikel Tentang Kaos</h2>
        <p className="mb-2">
          Kaos ini terbuat dari bahan berkualitas tinggi dengan desain modern.
          Tersedia berbagai ukuran dan warna, cocok untuk dipakai sehari-hari
          maupun acara santai. Cocok dipadukan dengan jeans atau celana kasual.
        </p>
        <p>
          Dengan teknologi printing terbaru, gambar pada kaos tidak mudah pudar
          dan tetap nyaman dipakai. Segera miliki koleksi kaos favoritmu sekarang juga!
        </p>
      </div>
      <div className="slider-container order-2 md:order-1 w-full md:w-2/3 h-64 md:h-96 overflow-hidden relative">
        <div ref={trackRef} className="slider-track flex">
          {[...images, ...images].map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Kaos ${i}`}
              className="slider-image w-1/2 md:w-1/3 object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
