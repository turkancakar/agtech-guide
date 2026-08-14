'use client';

import React from 'react';
import rawCropData from '@/data/cropSchedules.json';
import { CropDatabase } from '@/types/calendar';
import { Wheat, Sprout, Sun } from 'lucide-react';

interface CropSelectorProps {
  selectedCropKey: string;
  onSelectCropKey: (key: string) => void;
}

export default function CropSelector({
  selectedCropKey,
  onSelectCropKey,
}: CropSelectorProps) {
  const crops = rawCropData as unknown as CropDatabase;

  const renderIcon = (id: string) => {
    switch (id) {
      case 'bugday':
        return <Wheat className="w-4 h-4" />;
      case 'misir':
        return <Sprout className="w-4 h-4" />;
      case 'aycicegi':
        return <Sun className="w-4 h-4" />;
      default:
        return <Sprout className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
      {Object.keys(crops || {}).map((key) => {
        const crop = crops[key];
        const isActive = selectedCropKey === key;

        return (
          <button
            key={key}
            onClick={() => onSelectCropKey(key)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 border ${
              isActive
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
            }`}
          >
            {renderIcon(key)}
            <span>{crop.name}</span>
          </button>
        );
      })}
    </div>
  );
}