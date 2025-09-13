'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Instagram, ShoppingBag, Store, Music, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portofolio() {
  const [selected, setSelected] = useState(null);
  const [viewImage, setViewImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageStates, setPageStates] = useState({});
  const [mobilePage, setMobilePage] = useState(0); // Pagination untuk mobile

  const projects = [
    {
      title: "Brand Yang Kami Support",
      desc: "Produksi merchandise eksklusif untuk brand fashion lokal dengan material terbaik dan desain yang modern.",
      children: [
        {
          title: "Single Katolik",
          images: Array.from({ length: 11 }, (_, i) => `/singka/${i + 1}.jpeg`),
          links: {
            instagram: "https://www.instagram.com/singlekatolik.store",
            tokopedia: "https://www.tokopedia.com/single-katolik--store",
            shopee: "https://shopee.co.id/singlekatolik",
            tiktok: "https://www.tiktok.com/@singlekatolik",
          }
        },
        {
          title: "Single Kristen",
          images: Array.from({ length: 8 }, (_, i) => `/singkri/${i + 1}.jpeg`),
          links: {
            tokopedia: "https://www.tokopedia.com/single-kristen-store",
            shopee: "https://shopee.co.id/singlekristen.store",
            tiktok: "https://www.tiktok.com/@singlekristen.store",
          }
        },
        {
          title: "Batak Hasian",
          images: Array.from({ length: 9 }, (_, i) => `/batak/${i + 1}.jpeg`),
          links: {
            instagram: "https://www.instagram.com/hasian_production/",
            tokopedia: "https://www.tokopedia.com/batak-hasian--store",
            tiktok: "https://www.tiktok.com/@batak.hasian",
            shopee: "https://shopee.co.id/batakhasian",
          }
        },
      ],
    }
  ];

  useEffect(() => {
    if (selected || viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [selected, viewImage]);

  const openImage = (img, index) => {
    setViewImage(img);
    setCurrentIndex(index);
  };

  const nextImage = (images) => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setViewImage(images[newIndex]);
  };

  const prevImage = (images) => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setViewImage(images[newIndex]);
  };

  const changePage = (childIndex, newPage) => {
    setPageStates((prev) => ({
      ...prev,
      [childIndex]: newPage,
    }));
  };

  const handleMobilePageChange = (direction) => {
    const totalPages = Math.ceil(selected.children[0].images.length / 6);
    if (direction === 'next') {
      setMobilePage((prev) => Math.min(prev + 1, totalPages - 1));
    } else {
      setMobilePage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <section id="portofolio" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-10">
          {projects
            .filter((p) => !p.children || (p.children && p.children.length > 0))
            .map((p, i) => (
              <div
                key={i}
                className="p-8 bg-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>
                <p className="text-gray-600 mt-2 max-w-4xl">{p.desc}</p>
                <button
                  onClick={() => setSelected(p)}
                  className="mt-4 px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500 transition"
                >
                  Lihat Detail
                </button>
              </div>
            ))}
        </div>
      </div>

      {/* Modal Project */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full relative animate-fadeIn overflow-y-auto max-h-[95vh]">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <X />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">{selected.title}</h2>
              <p className="text-gray-700 leading-relaxed">{selected.desc}</p>

              {selected.children && (
                <div className="mt-8 space-y-10">
                  {selected.children.map((child, idx) => {
                    const perPage = 6;
                    const page = pageStates[idx] || 0;
                    const startIndex = page * perPage;
                    const visibleImages = child.images.slice(startIndex, startIndex + perPage);
                    const totalPages = Math.ceil(child.images.length / perPage);

                    return (
                      <div key={idx}>
                        <h3 className="text-xl font-semibold mb-4">{child.title}</h3>

                        {/* 🔗 Social Links */}
                        {child.links && (
                          <div className="flex flex-wrap gap-3 mb-6">
                            {child.links.instagram && (
                              <a
                                href={child.links.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm hover:opacity-90 transition"
                              >
                                <Instagram size={16} /> Instagram
                              </a>
                            )}
                            {child.links.tokopedia && (
                              <a
                                href={child.links.tokopedia}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700 transition"
                              >
                                <Store size={16} /> Tokopedia
                              </a>
                            )}
                            {child.links.shopee && (
                              <a
                                href={child.links.shopee}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-orange-500 text-white text-sm hover:bg-orange-600 transition"
                              >
                                <ShoppingBag size={16} /> Shopee
                              </a>
                            )}
                            {child.links.tiktok && (
                              <a
                                href={child.links.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition"
                              >
                                <Music size={16} /> TikTok
                              </a>
                            )}
                          </div>
                        )}

                        {/* Desktop Gallery */}
                        <div className="hidden md:flex gap-4 overflow-x-auto">
                          {visibleImages.map((img, i2) => (
                            <div
                              key={i2}
                              onClick={() => openImage(img, startIndex + i2)}
                              className="relative group overflow-hidden rounded-xl shadow cursor-pointer hover:shadow-lg"
                            >
                              <Image
                                src={img}
                                alt={`${child.title} ${startIndex + i2 + 1}`}
                                width={300}
                                height={200}
                                className="w-[300px] h-[200px] object-contain transform group-hover:scale-110 transition duration-500"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Mobile Gallery */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
                          {visibleImages.map((img, i2) => (
                            <div
                              key={i2}
                              onClick={() => openImage(img, startIndex + i2)}
                              className="relative group overflow-hidden rounded-xl shadow cursor-pointer hover:shadow-lg"
                            >
                              <Image
                                src={img}
                                alt={`${child.title} ${startIndex + i2 + 1}`}
                                width={300}
                                height={200}
                                className="w-full aspect-[4/3] object-contain transform group-hover:scale-110 transition duration-500"
                              />
                            </div>
                          ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                          <div className="flex justify-center items-center gap-4 mt-4">
                            <button
                              onClick={() => changePage(idx, Math.max(0, page - 1))}
                              disabled={page === 0}
                              className="p-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300 transition"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <span className="text-gray-600 text-sm">
                              Hal {page + 1} / {totalPages}
                            </span>
                            <button
                              onClick={() => changePage(idx, Math.min(totalPages - 1, page + 1))}
                              disabled={page === totalPages - 1}
                              className="p-2 bg-gray-200 rounded-full disabled:opacity-50 hover:bg-gray-300 transition"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Image Viewer */}
      {viewImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
          <button
            onClick={() => setViewImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white text-black font-bold flex items-center justify-center shadow hover:bg-gray-200"
          >
            <X />
          </button>
          <button
            onClick={() =>
              prevImage(
                selected.children.find((c) => c.images.includes(viewImage)).images
              )
            }
            className="absolute left-6 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 transition"
          >
            <ChevronLeft size={36} />
          </button>
          <Image
            src={viewImage}
            alt="fullscreen"
            width={1200}
            height={800}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
          <button
            onClick={() =>
              nextImage(
                selected.children.find((c) => c.images.includes(viewImage)).images
              )
            }
            className="absolute right-6 text-white p-3 bg-black/40 rounded-full hover:bg-black/60 transition"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
