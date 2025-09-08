'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  const isRegisterPage = pathname === '/daftar';

  useEffect(() => {
    if (isRegisterPage) {
      setActiveSection('daftar');
      return;
    }

    const sections = ['beranda', 'produk', 'layanan', 'portofolio', 'galeri', 'testimoni','tentangkami'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isRegisterPage]);

  const linkClasses = (section) =>
    `rounded-md px-3 py-2 ${
      activeSection === section
        ? 'bg-primary text-white'
        : 'text-gray-300 hover:bg-primary/80 hover:text-white'
    }`;

  return (
    <div className="navbar bg-cyan-950 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="navbar-start flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={25}   // bisa disesuaikan
          height={25}  // bisa disesuaikan
          className="rounded-md"
        />
        <Link href="/" className="normal-case text-lg sm:text-xl md:text-2xl text-white font-extrabold">
          Invic Production
        </Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">
          <li><Link href="/" className={linkClasses('home')}>Beranda</Link></li>
          {isRegisterPage ? (
            <li><Link href="/daftar" className={linkClasses('register')}>Register</Link></li>
          ) : (
            <>
              <li><Link href="#produk" className={linkClasses('produk')}>Produk</Link></li>
              <li><Link href="#layanan" className={linkClasses('layanan')}>Layanan</Link></li>
              <li><Link href="#portofolio" className={linkClasses('portofolio')}>Portofolio</Link></li>
              <li><Link href="#galeri" className={linkClasses('galeri')}>Galery</Link></li>
              <li><Link href="#testimoni" className={linkClasses('testimoni')}>Testimoni</Link></li>
              <li><Link href="#tentang" className={linkClasses('tentang')}>Tentang Kami</Link></li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end sm:hidden">
        <button onClick={() => setMenuOpen((prev) => !prev)} className="btn btn-ghost text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed top-0 absolute top-16 right-2 w-56 bg-cyan-900 rounded-lg shadow-lg p-3 sm:hidden">
          <ul className="menu menu-vertical space-y-1">
            <li><Link href="/" className={linkClasses('home')} onClick={() => setMenuOpen(false)}>Beranda</Link></li>
            {isRegisterPage ? (
              <li><Link href="/daftar" className={linkClasses('register')} onClick={() => setMenuOpen(false)}>Register</Link></li>
            ) : (
              <>
                <li><Link href="#produk" className={linkClasses('produk')} onClick={() => setMenuOpen(false)}>Produk</Link></li>
                <li><Link href="#layanan" className={linkClasses('layanan')} onClick={() => setMenuOpen(false)}>Layanan</Link></li>
                <li><Link href="#portofolio" className={linkClasses('portofolio')} onClick={() => setMenuOpen(false)}>Portofolio</Link></li>
                <li><Link href="#galeri" className={linkClasses('galeri')} onClick={() => setMenuOpen(false)}>Galeri</Link></li>
                <li><Link href="#testimoni" className={linkClasses('testimoni')} onClick={() => setMenuOpen(false)}>Testimoni</Link></li>
                <li><Link href="#tentang" className={linkClasses('tentang')} onClick={() => setMenuOpen(false)}>Tentang Kami</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
