'use client';

import React from 'react';
import { CropDatabase } from '@/types/calendar';
import { Wheat, Sprout, Sun } from 'lucide-react'; // Corn yerine Sprout kullandık

interface CropSelectorProps {
  crops: CropDatabase;
  selectedCropKey: string;
  onSelectCrop: (key: string) => void;
}

export default function CropSelector({ crops, selectedCropKey, onSelectCrop }: CropSelectorProps) {
  const renderCropIcon = (key: string, isActive: boolean) => {
    const iconClass = `w-5 h-5 stroke-[1.75] ${isActive ? 'text-white' : 'text-emerald-700'}`;

    switch (key) {
      case 'wheat':
        return <Wheat className={iconClass} />;
      case 'maize':
      case 'corn':
        return <Sprout className={iconClass} />; // Mısır filizi ikonu
      case 'sunflower':
        return <Sun className={iconClass} />;
      default:
        return <Wheat className={iconClass} />;
    }
  };

  return (
    <div className="flex justify-center space-x-3 mb-8">
      {Object.keys(crops).map((key) => {
        const crop = crops[key];
        const isActive = selectedCropKey === key;

        return (
          <button
            key={key}
            onClick={() => onSelectCrop(key)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all shadow-xs border ${
              isActive
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200'
                : 'bg-white text-slate-700 hover:bg-emerald-50/60 border-slate-200/80'
            }`}
          >
            {renderCropIcon(key, isActive)}
            <span>{crop.name}</span>
          </button>
        );
      })}
    </div>
  );
}