// src/types/calendar.ts

// Tablodaki her bir gübreleme satırının yapısı
export interface ScheduleItem {
  month: string;
  period: string;
  fertilizer: string;
  dosage: string;
  intensity: 'Yoğun' | 'Orta' | 'Hafif';
  notes: string;
}

// Tek bir tarım ürününe ait bilgiler
export interface CropData {
  id: string;
  name: string;
  icon: string;
  description: string;
  schedule: ScheduleItem[];
}

// Tüm ürünlerin veritabanı haritası
export type CropDatabase = Record<string, CropData>;