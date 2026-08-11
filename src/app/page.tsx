'use client';

import React, { useState } from 'react';
import rawCropData from '@/data/cropSchedules.json';
import { CropDatabase } from '@/types/calendar';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Recommendations from '@/components/Recommendations';
import BlogSection from '@/components/BlogSection'; // Yeni eklendi
import CropSelector from '@/components/CropSelector';
import CalendarTable from '@/components/CalendarTable';
import Footer from '@/components/Footer';

const cropData = rawCropData as CropDatabase;

export default function HomePage() {
  const [selectedCropKey, setSelectedCropKey] = useState<string>('wheat');
  const activeCrop = cropData[selectedCropKey];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      <Header />
      <HeroSection />
      <Recommendations />

      {/* Blog & Makaleler Alanı */}
      <BlogSection />

      {/* Gübreleme Takvimi */}
      <main id="takvim" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-grow">
        <CropSelector
          crops={cropData}
          selectedCropKey={selectedCropKey}
          onSelectCrop={(key) => setSelectedCropKey(key)}
        />

        {activeCrop && <CalendarTable activeCrop={activeCrop} />}
      </main>

      <Footer />
    </div>
  );
}