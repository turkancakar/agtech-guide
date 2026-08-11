// src/app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Google Fonts'tan Poppins'i çağırıyoruz
import './globals.css';

// Poppins konfigürasyonu ve ağırlık tanımlamaları
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'], // Türkçe karakter desteği
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AgTech | Akıllı Çiftçi Gübreleme Takvimi',
  description: 'Buğday, mısır ve ayçiçeği için bilimsel verilere dayalı aylık gübreleme programı.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}