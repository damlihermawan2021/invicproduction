'use client';

import Navbar from "@/components/Navbar";
import ImageSlider from "@/components/ImageSlider";
import Produk from "@/components/Produk";
import Layanan from "@/components/Layanan";
import Portofolio from "@/components/Portofolio";
import Galeri from "@/components/Galeri";
import Testimoni from "@/components/Testimoni";
import TentangKami from "@/components/TentangKami";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white via-gray to-black text-white"
      >
        <ImageSlider />
      </section>

      <Produk />
      <Layanan />
      <Galeri />
      <Testimoni />
      <Portofolio />
      <TentangKami />
    </>
  );
}
