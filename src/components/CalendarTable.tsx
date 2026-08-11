'use client';

import React from 'react';
import { CropData } from '@/types/calendar';
import { Wheat, Sprout, Sun } from 'lucide-react'; // Corn yerine Sprout kullandık

interface CalendarTableProps {
  activeCrop: CropData;
}

export default function CalendarTable({ activeCrop }: CalendarTableProps) {
  const getBadgeStyle = (intensity: string) => {
    switch (intensity) {
      case 'Yoğun':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Orta':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      default:
        return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  const renderActiveIcon = (id: string) => {
    const iconClass = "w-6 h-6 text-emerald-600 stroke-[1.75]";
    switch (id) {
      case 'wheat':
        return <Wheat className={iconClass} />;
      case 'maize':
      case 'corn':
        return <Sprout className={iconClass} />;
      case 'sunflower':
        return <Sun className={iconClass} />;
      default:
        return <Wheat className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Üst Başlık */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
            {renderActiveIcon(activeCrop.id)}
            <span>{activeCrop.name} Gübreleme Takvimi</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">{activeCrop.description}</p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
            Yoğun: Kritik Dönem
          </span>
          <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-300">
            Orta: Destek
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            Hafif: Düşük / Yok
          </span>
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold uppercase border-b border-slate-200">
            <tr>
              <th className="py-4 px-6">Ay</th>
              <th className="py-4 px-6">Gelişim Dönemi</th>
              <th className="py-4 px-6">Önerilen Gübre / Besin</th>
              <th className="py-4 px-6">Dozaj (Dekar)</th>
              <th className="py-4 px-6">Yoğunluk</th>
              <th className="py-4 px-6">Zirai Not</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {activeCrop.schedule.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50/80 transition">
                <td className="py-4 px-6 font-bold text-slate-900">{row.month}</td>
                <td className="py-4 px-6 font-medium text-slate-600">{row.period}</td>
                <td className="py-4 px-6 font-semibold text-emerald-700">{row.fertilizer}</td>
                <td className="py-4 px-6 font-mono text-slate-800 font-medium">{row.dosage}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getBadgeStyle(row.intensity)}`}>
                    {row.intensity}
                  </span>
                </td>
                <td className="py-4 px-6 text-slate-600 text-xs sm:text-sm">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}