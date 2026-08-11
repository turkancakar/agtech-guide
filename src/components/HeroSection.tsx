import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-50/60 via-slate-50/30 to-slate-50 py-12 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Yol (Boş bırakıldı) */}

        {/* Turuncu Vurgulu Rozet */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-lg font-semibold bg-gray-100/20 text-slate-900 border border-slate-200/80 mb-15 shadow-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="bi bi-shield-check text-emerald-600 fill-current"
              viewBox="0 0 18 18"
            >
              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
              <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            </svg>
          </span>
          <span> Çiftçimiz İçin Profesyonel Gübreleme Rehberi </span>
        </div>

        {/* Ana Başlık */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-5">
          Gübreleme Takvimi
        </h1>

        {/* Alt Açıklama Metni */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-6">
          Bitki türlerine göre aylık gübreleme programı ve uygulama önerileri. Doğru zamanda, doğru gübre ile maksimum verim alın.
        </p>
      </div>
    </section>
  );
}