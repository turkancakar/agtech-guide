export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    category: 'Sulama Teknikleri',
    title: 'Damla Sulama Gübrelemesinde Dikkat Edilmesi Gerekenler',
    description: 'Damla sulama sistemlerinde gübre kullanımının püf noktaları ve yaygın hatalar...',
    date: '15 Aralık 2024',
    readTime: '5 dk',
    author: 'AgTech Tarım Ekibi',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=800',
    content: [
      'Damla sulama (fertigasyon) sistemi, gübrenin doğrudan bitki kök bölgesine etkin bir şekilde verilmesini sağlar.',
      'Suda tamamen çözünebilen yüksek kaliteli gübreler tercih edilmelidir. Aksi takdirde damlatıcı memelerde tıkanmalar meydana gelebilir.',
      'Gübreleme sonrasında sistem en az 15-20 dakika sadece temiz su ile çalıştırılarak hatlardaki gübre kalıntıları temizlenmelidir.'
    ]
  },
  {
    id: '2',
    category: 'Toprak Yönetimi',
    title: 'Toprak Analiz Sonuçlarına Göre Gübre Seçimi',
    description: 'Toprak analizinizi nasıl yorumlamalı ve hangi gübreleri tercih etmelisiniz...',
    date: '10 Aralık 2024',
    readTime: '7 dk',
    author: 'AgTech Tarım Ekibi',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=800',
    content: [
      'Toprak analizi yaptırmadan uygulanan gübreleme, hem maliyeti artırır hem de toprak pH dengesini bozabilir.',
      'Toprağın pH değerine göre azot ve fosfor formu seçilmelidir. Yüksek pH değerli topraklarda kükürt içerikli gübreler destekleyicidir.',
      'Kalsiyum ve potasyum oranları göz önünde bulundurularak taban ve üst gübreleme takvimi netleştirilmelidir.'
    ]
  },
  {
    id: '3',
    category: 'Sera Tarımı',
    title: 'Sera Üretiminde Kök Geliştirici Kullanımı',
    description: 'Sera bitkilerinde kök geliştiricilerin önemi ve uygulama teknikleri...',
    date: '5 Aralık 2024',
    readTime: '6 dk',
    author: 'AgTech Tarım Ekibi',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800',
    content: [
      'Kök bölgesi sağlıklı olmayan bir bitkiden yüksek verim alınması mümkün değildir.',
      'Fide dikiminden hemen sonra humik-fulvik asit ve aminoasit içerikli köklendiriciler uygulanmalıdır.',
      'Kök ortamının havalanması ve sıcaklığı düzenli olarak takip edilerek saçak kök oluşumu teşvik edilmelidir.'
    ]
  }
];