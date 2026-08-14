'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ImageSlider from '@/components/ImageSlider';
import Recommendations from '@/components/Recommendations';
import CropSelector from '@/components/CropSelector';
import CalendarTable from '@/components/CalendarTable';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [selectedCropKey, setSelectedCropKey] = useState<string>('bugday');

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow space-y-12">
        {/* 1. Slider Artık Sayfanın En Başında */}
        <div className="pt-4">
          <ImageSlider />
        </div>

        {/* 2. Saha Önerileri */}
        <div id="oneriler">
          <Recommendations />
        </div>

        {/* 3. Gübreleme Takvimi & Tablo */}
        <section id="takvim" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Gübreleme Takvimi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Bitki türlerine göre aylık gübreleme programı ve uygulama önerileri. Doğru zamanda, doğru gübre ile maksimum verim alın.
            </p>
          </div>

          <CropSelector 
            selectedCropKey={selectedCropKey} 
            onSelectCropKey={setSelectedCropKey} 
          />

          <CalendarTable 
            selectedCropKey={selectedCropKey} 
          />
        </section>

        {/* 4. Blog Makaleleri */}
        <div id="blog">
          <BlogSection />
        </div>

        {/* 5. Footer Öncesi Güvence / Rozet Alanı */}
        <HeroSection />
      </main>

      <Footer />
    </div>
  );
}