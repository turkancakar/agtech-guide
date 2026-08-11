'use client';

import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-xs">
      {/* Üst Duyuru Barı */}
      <div className="bg-emerald-700 text-white text-xs sm:text-sm py-2 text-center font-medium tracking-wide">
        🌱 AgTech Dijital Tarım Platformu &nbsp;|&nbsp; Toprak Analizine Göre Akıllı Gübreleme Rehberi
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Sadece PNG Logo (Yazı kaldırıldı) */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AgTech Logo"
            width={160}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        {/* Ana Navigasyon Menüsü */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-semibold text-slate-600">
          <a href="#" className="hover:text-emerald-600 transition-colors text-slate-900">
            Ana Sayfa
          </a>
          <a href="#takvim" className="hover:text-emerald-600 transition-colors">
            Gübreleme Takvimi
          </a>
          <a href="#oneriler" className="hover:text-emerald-600 transition-colors">
            Saha Önerileri
          </a>
          <a href="#blog" className="hover:text-emerald-600 transition-colors">
            Blog
          </a>
        </nav>

        {/* Sağ Buton */}
        <a
          href="#takvim"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-xs"
        >
          Takvimi İncele
        </a>
      </div>
    </header>
  );
}