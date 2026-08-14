"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/images/slide-1.avif",
    tag: "Modern Hasat & Verim",
    title: "Doğru Gübreleme ile Maksimum Hasat",
    description:
      "Toprak analizine uygun besleme programlarıyla ürün kalitesini ve dönüm başına rekolteyi artırın.",
  },
  {
    id: 2,
    image: "/images/slide-2.avif",
    tag: "Akıllı Besleme",
    title: "Meyve Bahçelerinde Dengeli Gübreleme",
    description:
      "Çiçeklenme, meyve tutumu ve sürgün gelişimi için dönemsel mikro element desteği sağlayın.",
  },
  {
    id: 3,
    image: "/images/slide-3.avif",
    tag: "Modern Sera & Sulama",
    title: "Damla Sulama & Sıvı Gübreleme Rehberi",
    description:
      "Sıvı gübreleri damla sulama ile doğrudan kök bölgesine ulaştırarak sıfır israf ve maksimum besin emilimi sağlayın.",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    // max-w-[96%] veya tam ekran için w-full px-2 sm:px-4
    <section className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-2 sm:px-4 py-4">
      {/* Yükseklik 600px-680px seviyesine çıkarıldı */}
      <div className="relative w-full h-[480px] sm:h-[580px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
            />
            
            {/* Karartma Katmanı */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

            {/* Metinler */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-14 lg:p-16 text-white max-w-4xl space-y-3">
              <span className="inline-block px-3.5 py-1.5 bg-emerald-600/90 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wider">
                {slide.tag}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-md">
                {slide.title}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base lg:text-lg line-clamp-2 max-w-2xl leading-relaxed drop-shadow">
                {slide.description}
              </p>
            </div>
          </div>
        ))}

        {/* Sol Ok Butonu */}
        <button
          onClick={prevSlide}
          aria-label="Önceki"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md transition text-2xl border border-white/20 hover:scale-105 active:scale-95"
        >
          &#10094;
        </button>

        {/* Sağ Ok Butonu */}
        <button
          onClick={nextSlide}
          aria-label="Sonraki"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md transition text-2xl border border-white/20 hover:scale-105 active:scale-95"
        >
          &#10095;
        </button>

        {/* Alt Nokta Göstergeleri */}
        <div className="absolute bottom-6 right-8 sm:right-14 z-20 flex gap-2.5">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIndex
                  ? "w-10 bg-emerald-500 shadow-md shadow-emerald-500/50"
                  : "w-2.5 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}