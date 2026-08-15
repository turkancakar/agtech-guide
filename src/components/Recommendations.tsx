'use client';

import React from 'react';
import { Droplets, Thermometer, Sun, TestTube2 } from 'lucide-react';

export default function Recommendations() {
  const cards = [
    {
      icon: <Droplets className="w-5 h-5 text-emerald-600 stroke-[1.75]" />,
      title: 'Sulama ile Birlikte Uygulama',
      desc: 'Sıvı gübreler damla sulama sistemiyle birlikte uygulanmalı. Sabah erken saatlerde veya akşam serinliğinde yapılan uygulamalar daha etkilidir.'
    },
    {
      icon: <Thermometer className="w-5 h-5 text-amber-600 stroke-[1.75]" />,
      title: 'Sıcaklık Kontrolü',
      desc: 'Yaprak gübrelerini 25°C üzerinde uygulamayın. Aşırı sıcakta yaprak yanıkları oluşabilir. İdeal uygulama sıcaklığı 15-25°C arasıdır.'
    },
    {
      icon: <Sun className="w-5 h-5 text-amber-600 stroke-[1.75]" />,
      title: 'Işık ve Dönem',
      desc: 'Bitkilerin aktif büyüme dönemlerinde gübreleme yapın. Kış dinlenmesindeki bitkilere gübre uygulamayın.'
    },
    {
      icon: <TestTube2 className="w-5 h-5 text-emerald-600 stroke-[1.75]" />,
      title: 'Toprak Analizi',
      desc: 'Gübreleme programına başlamadan önce toprak analizi yaptırın. Eksik besin elementlerini belirleyerek gereksiz gübrelemeden kaçının.'
    }
  ];

  return (
    <section id="oneriler" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-4xl font-bold text-slate-900 text-center mb-10 mt-6">
        Saha Önerileri
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            {/* İkon ve Başlığın Yan Yana Olduğu Header Alanı */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 bg-slate-100/80 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-slate-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                {item.title}
              </h3>
            </div>

            {/* Açıklama Metni */}
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}