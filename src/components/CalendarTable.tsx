'use client';

import React from 'react';
import rawCropData from '@/data/cropSchedules.json';
import { CropDatabase } from '@/types/calendar';
import { Wheat, Sprout, Sun, Calendar } from 'lucide-react';

interface CalendarTableProps {
  selectedCropKey: string;
}

export default function CalendarTable({ selectedCropKey }: CalendarTableProps) {
  const crops = rawCropData as unknown as CropDatabase;
  const activeCrop = crops[selectedCropKey] || crops['bugday'];

  const renderActiveIcon = (id: string) => {
    switch (id) {
      case 'bugday':
        return <Wheat className="w-6 h-6 text-emerald-600" />;
      case 'misir':
        return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'aycicegi':
        return <Sun className="w-6 h-6 text-emerald-600" />;
      default:
        return <Calendar className="w-6 h-6 text-emerald-600" />;
    }
  };

  if (!activeCrop) return null;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
            {renderActiveIcon(selectedCropKey)}
            <span>{activeCrop.name} Gübreleme Takvimi</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">{activeCrop.description}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-800 uppercase text-xs font-semibold">
            <tr>
              <th className="px-4 py-3.5 rounded-l-xl">Dönem / Ay</th>
              <th className="px-4 py-3.5">Gelişim Evresi</th>
              <th className="px-4 py-3.5">Önerilen Gübre</th>
              <th className="px-4 py-3.5">Dozaj (Dekar)</th>
              <th className="px-4 py-3.5 rounded-r-xl">Uygulama Notu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {activeCrop.schedule?.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/60 transition">
                <td className="px-4 py-4 font-semibold text-slate-900">{item.period}</td>
                <td className="px-4 py-4">{item.stage}</td>
                <td className="px-4 py-4 font-medium text-emerald-700">{item.fertilizer}</td>
                <td className="px-4 py-4 text-slate-800 font-semibold">{item.dosage}</td>
                <td className="px-4 py-4 text-slate-500 text-xs sm:text-sm">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}