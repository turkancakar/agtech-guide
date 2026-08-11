'use client';

import React from 'react';
import { Sprout, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Logo & Açıklama */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-0.5">
                <span className="text-xl font-extrabold text-white tracking-tight">Ag</span>
                <span className="text-xl font-extrabold text-emerald-500 tracking-tight">Tech</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dijital tarım teknolojileri ve veriye dayalı akıllı bitki besleme çözümleri ile veriminizi maksimuma çıkarın.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Hızlı Menü</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#takvim" className="hover:text-emerald-400 transition-colors">Gübreleme Takvimi</a></li>
              <li><a href="#oneriler" className="hover:text-emerald-400 transition-colors">Saha Önerileri</a></li>
            </ul>
          </div>

          {/* Ürünler */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Desteklenen Ürünler</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>🌾 Buğday Yetiştiriciliği</li>
              <li>🌽 Mısır Besleme Programı</li>
              <li>🌻 Ayçiçeği Zirai Takvimi</li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">İletişim & Destek</h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Teknokent Dijital Tarım Laboratuvarı</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>destek@agtech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>+90 (850) 000 00 00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Telif & Çizgi */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 AgTech Dijital Tarım Teknolojileri. Tüm Hakları Saklıdır.</p>
          <p className="flex items-center gap-1">
            Çiftçilerimiz için sevgiyle geliştirildi <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}