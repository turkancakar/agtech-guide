'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-800 border border-slate-200/90 shadow-sm">
          {/* Yeşil Güvenlik İkonu */}
          <ShieldCheck className="w-6 h-6 text-emerald-600" />
          <span>Çiftçimiz İçin Profesyonel Gübreleme Rehberi</span>
        </div>
      </div>
    </section>
  );
}