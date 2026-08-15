'use client';

import React, { useState } from 'react';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Calendar, Clock, User, ArrowRight, X } from 'lucide-react';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Başlık Alanı */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Blog & Makaleler
        </h2>
        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
          Tarım teknikleri, gübre kullanımı ve bitki besleme hakkında uzman görüşleri ve faydalı bilgiler.
        </p>
      </div>

      {/* Blog Kartları Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col group"
          >
            {/* Kart Görseli ve Kategori Rozeti */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-100">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-md shadow-xs">
                {post.category}
              </span>
            </div>

            {/* Kart İçeriği */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                {/* Tarih ve Okuma Süresi */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Başlık */}
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Özet */}
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                  {post.description}
                </p>
              </div>

              {/* Yazar ve Oku Butonu */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <User className="w-3.5 h-3.5" />
                  {post.author}
                </span>
                <span className="text-amber-600 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Oku <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Detay Pop-Up (Modal) */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            {/* Kapat Butonu */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-slate-700 p-2 rounded-full shadow-md z-10 transition-transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Kapak Görseli */}
            <div className="relative h-64 w-full">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 left-6 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                {selectedPost.category}
              </span>
            </div>

            {/* Modal Gövde Metni */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-emerald-600" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-emerald-600" /> {selectedPost.readTime}</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4 text-emerald-600" /> {selectedPost.author}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mb-6 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index} className="bg-slate-50/60 p-4 rounded-xl border border-slate-100">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}