"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaHome } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Swal from "sweetalert2";
const BASE_URL = "https://api-invic-management.org/invic-api/image";
export default function Register() {
    const [homepageImageUrl, setHomepageImageUrl] = useState('');
    useEffect(() => {
      const fetchImageUrl = async () => {
        try {
          const fetchImage = async (folder, name) => {
            const res = await fetch(`${BASE_URL}?folderName=${folder}&objectName=${encodeURIComponent(name)}`);
            if (!res.ok) throw new Error("Failed to fetch image");
            const blob = await res.blob();
            return URL.createObjectURL(blob);
          };
          const homepageImg = await fetchImage("HOMEPAGE", "Background Opsi 1.webp"); 
          setHomepageImageUrl(homepageImg);
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      };
      fetchImageUrl();
    }, []);
  const [showScroll, setShowScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    whatsapp: "",
    payment_type: "photo_only",
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.midtrans.com/snap/snap.js";
    script.setAttribute("data-client-key", "YOUR_CLIENT_KEY");
    document.body.appendChild(script);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openInstagramDM = () => {
    window.location.href =
      "instagram://messages?user_username=grup_singlekatolik";
    setTimeout(() => {
      window.open("https://instagram.com/grup_singlekatolik", "_blank");
    }, 1000);
  };
  const prices = {
    photo_only: 110000,
    photo_and_group: 160000,
  };
  const handleDaftar = async () => {
    try {
      const price = prices[userData.payment_type] || 0;

      const payload = {
        email: userData.email,
        full_name: userData.full_name,
        payment_type: userData.payment_type,
        price: price,
        whatsapp: `62${userData.whatsapp.replace(/^0+/, "")}`,
      };
      const response = await fetch(
        "https://api-invic-management.org/invic-api/payment/create",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (data.snap_token) {
        window.snap.pay(data.snap_token, {
        onSuccess: function (result) {
          Swal.fire({
            title: "Memverifikasi pembayaran...",
            text: "Tunggu sebentar ya...",
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading();
            },
            timer: 1500, 
          }).then(() => {
            Swal.fire({
              icon: "success",
              title: "Pembayaran Berhasil 🎉",
              text: "Terima kasih! Pendaftaranmu sudah berhasil. Admin akan segera menghubungi kamu via WhatsApp.",
              confirmButtonText: "Oke",
              confirmButtonColor: "#16a34a",
            });
          });
          console.log("Success:", result);
        },
          onPending: function (result) {
            console.log("Pending:", result);
          },
          onError: function (result) {
            console.error("Error:", result);
          },
          onClose: function () {
            Swal.fire({
              title: "Menutup pembayaran...",
              text: "Sedang memproses...",
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
              },
              timer: 1500, 
            }).then(() => {
              Swal.fire({
                icon: "info",
                title: "Belum Selesai 😅",
                text: "Kamu menutup popup pembayaran sebelum selesai. Yuk coba daftar lagi agar bisa join komunitas Invic Production.",
                confirmButtonText: "Daftar Ulang",
                confirmButtonColor: "#f97316",
              }).then((result) => {
                if (result.isConfirmed) {
                  setShowModal(true);
                }
              });
            });
          },
        });
      } else {
        alert("Gagal mendapatkan token pembayaran.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Terjadi kesalahan, coba lagi nanti.");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8 lg:px-16"
      style={{
        backgroundImage: homepageImageUrl ? `url('${homepageImageUrl}')` : '',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-6xl w-full bg-white/70 backdrop-blur-md p-8 rounded-2xl text-black shadow-xl space-y-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo/logo.png"
            alt="Invic Production Logo"
            width={300}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Syarat */}
        <div className="bg-white/90 border border-pink-300 rounded-2xl p-6 md:p-8 shadow-md scroll-mt-24">
          <h2 className="text-2xl font-bold text-center mb-4 border-b-2 border-pink-200 pb-2">
            📍 SYARAT UNTUK JOIN Invic Production
          </h2>
          <ul className="list-disc list-outside pl-6 space-y-2 text-gray-800 text-base md:text-lg leading-relaxed">
            <li>✅ Hanya untuk yang beragama katolik dan single usia 20 tahun ke atas</li>
            <li>💔 Belum pernah menikah (boleh jika cerai mati)</li>
            <li>🚫 Tidak sedang atau pernah cerai hidup</li>
            <li>💼 Sudah bekerja (bukan pengangguran)</li>
            <li>🎓 Bukan pelajar atau mahasiswa</li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            📌 LANGKAH-LANGKAH PENDAFTARAN
          </h2>

          <div className="grid gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-600">
              <h3 className="text-lg font-semibold mb-2">Pilih Tipe Pendaftaran</h3>
              <ul className="list-disc list-inside mt-2 text-gray-800">
                <li>Grup Chat (tanpa posting foto)</li>
                <li>
                  Posting Foto + Grup Chat
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-lg font-semibold mb-4">Konfirmasi Pembayaran</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-1">
                  <span className="">1.</span>
                  <p>Isi data lengkap kamu di form pendaftaran.</p>
                </div>
                <div className="flex items-start space-x-1">
                  <span className="">2.</span>
                  <p>Pilih metode pembayaran (VA) yang tersedia.</p>
                </div>
                <div className="flex items-start space-x-1">
                  <span className="">3.</span>
                  <p>Lakukan transfer sesuai nominal yang tertera.</p>
                </div>
                <div className="flex items-start space-x-1">
                  <span className="">4.</span>
                  <p>Tunggu hingga pembayaran diverifikasi otomatis.</p>
                </div>
                <div className="flex items-start space-x-1">
                  <span className="">5.</span>
                  <p>Lanjut konfirmasi di whatsapp admin Invic Production.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-2">Verifikasi KTP & Arahan Admin</h3>
              <p className="text-gray-700">
                Kami akan memverifikasi KTP kamu untuk memastikan keaslian data.
                Setelah itu, kamu akan diarahkan oleh admin via WhatsApp.
              </p>
              <p className="text-xs text-red-500 mt-4 italic">
                <strong>Catatan:</strong> Data KTP hanya digunakan untuk verifikasi dan tidak akan
                disebarkan ke pihak lain. Kami menjamin kerahasiaan data pribadi.
                (Kami hanya cek <span className="font-medium">Nama, Usia, Agama, dan Status Perkawinan</span> saja, 
                data selain itu wajib di <span className="font-medium">hide atau ditutup</span>).
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 flex flex-col items-center justify-center">
              <button
                onClick={() => setShowModal(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition"
              >
                Daftar Disini
              </button>
            </div>
          </div>
        </div>
      </div>
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-15 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-800 transition-all z-50"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
      <Link
        href="/"
        className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-all z-50"
      >
        <FaHome />
      </Link>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[420px]">
            <h2 className="text-2xl font-bold mb-4">Isi Data Pendaftaran</h2>
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="full_name"
                placeholder="Nama Lengkap"
                value={userData.full_name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="flex">
                <span className="flex items-center px-3 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-600">
                  +62
                </span>
                <input
                  type="text"
                  name="whatsapp"
                  placeholder="81234567890"
                  value={userData.whatsapp}
                  onChange={handleInputChange}
                  className="flex-1 p-2 border border-gray-300 rounded-r-md"
                />
              </div>
              <select
                name="payment_type"
                value={userData.payment_type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="photo_only">Grup Chat (tanpa posting foto) - Rp 110.000</option>
                <option value="photo_and_group">Posting Foto + Grup Chat - Rp 160.000</option>
              </select>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Batal
                </button>
                <button
                  onClick={handleDaftar}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
