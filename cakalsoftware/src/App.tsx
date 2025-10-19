import { Code2, Smartphone, Users, ArrowRight, Check, Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

function App() {
  const webPackages = [
    { name: 'Bütçe Dostu', price: '4,500', features: ['Responsive Tasarım', 'Temel SEO', '5 Sayfa', '1 Ay Destek'] },
    { name: 'Standart', price: '7,500', features: ['Responsive Tasarım', 'Gelişmiş SEO', '10 Sayfa', 'CMS Entegrasyonu', '3 Ay Destek'], popular: true },
    { name: 'Ultra', price: '10,500', features: ['Responsive Tasarım', 'Premium SEO', '20 Sayfa', 'CMS + E-Ticaret', 'Özel Animasyonlar', '6 Ay Destek'] },
    { name: 'Profesyonel', price: '13,500', features: ['Responsive Tasarım', 'Enterprise SEO', 'Sınırsız Sayfa', 'Özel Backend', 'API Entegrasyonları', '12 Ay Destek'] }
  ];

  const mobilePackages = [
    { name: 'Bütçe Dostu', price: '4,500', features: ['iOS veya Android', 'Temel Özellikler', 'Responsive UI', '1 Ay Destek'] },
    { name: 'Standart', price: '7,500', features: ['iOS + Android', 'Push Bildirimleri', 'API Entegrasyonu', 'Modern UI/UX', '3 Ay Destek'], popular: true },
    { name: 'Ultra', price: '10,500', features: ['iOS + Android', 'Gelişmiş Özellikler', 'Çevrimdışı Mod', 'Özel Animasyonlar', '6 Ay Destek'] },
    { name: 'Profesyonel', price: '13,500', features: ['iOS + Android', 'Enterprise Özellikler', 'Gelişmiş Güvenlik', 'Backend Dahil', '12 Ay Destek'] }
  ];

  const consultingPackages = [
    { name: '15 Dakika', price: '1,500', features: ['Hızlı Danışmanlık', 'Temel Sorular', 'Yönlendirme'] },
    { name: '30 Dakika', price: '3,500', features: ['Detaylı İnceleme', 'Proje Değerlendirmesi', 'Teknik Danışmanlık'], popular: true },
    { name: '45 Dakika', price: '5,500', features: ['Kapsamlı Analiz', 'Kod İncelemesi', 'Çözüm Önerileri'] },
    { name: '60 Dakika', price: '7,500', features: ['Derinlemesine İnceleme', 'Mimari Tasarım', 'Mentörlük'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">CAKAL SOFTWARE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition">Hakkında</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition">Hizmetler</a>
              <a href="#web" className="text-slate-600 hover:text-blue-600 transition">Web</a>
              <a href="#mobile" className="text-slate-600 hover:text-blue-600 transition">Mobil</a>
              <a href="#consulting" className="text-slate-600 hover:text-blue-600 transition">Danışmanlık</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">İletişim</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-4">
          <p className="text-blue-600 font-semibold text-lg tracking-wide uppercase">
            Güçlü Yazılım, Güçlü Gelecek
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Yazılım Çözümlerinde
          <span className="block text-blue-600 mt-2">Güvenilir Ortak</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Modern web ve mobil uygulamalar geliştiriyoruz. Fikirlerinizi hayata geçirmek için profesyonel ekibimiz her zaman yanınızda.
        </p>
        <a href="#services" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
          <span>Paketleri İncele</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">CAKAL SOFTWARE Nedir?</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              CAKAL SOFTWARE, Aysima Çakal tarafından kurulan bir yazılım şirketidir. 2 Temmuz 2025 tarihinde kurulan bu marka, kullanıcılara özel yazılım çözümleri sunarak ve geleceğe dair yazılım planları yaparak varlığını genişletmeyi amaçlamaktadır.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Aysima Çakal Kimdir?</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Aysima Çakal, Aralık 2022 tarihinden bu yana sosyal medya platformlarında "yazılım" ve "teknoloji" alanında içerik üreten ve henüz 15 yaşında olan genç bir influencer'dır. Çocukluğundan bu yana teknoloji ilgi ve merak duyan Aysima Çakal, hayatımın son 4 yılında yazılımı mercek altına almıştır.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Web Geliştirme</h3>
            <p className="text-slate-600 mb-4">Responsive, hızlı ve SEO uyumlu web siteleri ve uygulamaları geliştiriyoruz.</p>
            <a href="#web" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
              Detayları Gör <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Mobil Geliştirme</h3>
            <p className="text-slate-600 mb-4">iOS ve Android platformları için kullanıcı dostu mobil uygulamalar üretiyoruz.</p>
            <a href="#mobile" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
              Detayları Gör <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Birebir Seans</h3>
            <p className="text-slate-600 mb-4">Projeleriniz için teknik danışmanlık ve mentörlük hizmeti sağlıyoruz.</p>
            <a href="#consulting" className="text-orange-600 font-semibold hover:text-orange-700 inline-flex items-center">
              Detayları Gör <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Web Development Packages */}
      <section id="web" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Web Geliştirme Paketleri</h2>
          <p className="text-xl text-slate-600">İhtiyacınıza en uygun paketi seçin</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {webPackages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-6 ${pkg.popular ? 'ring-2 ring-blue-600 relative' : ''}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popüler
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                <span className="text-slate-600 ml-1">TL</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Başla
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Development Packages */}
      <section id="mobile" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Mobil Geliştirme Paketleri</h2>
          <p className="text-xl text-slate-600">iOS ve Android için profesyonel çözümler</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobilePackages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-6 ${pkg.popular ? 'ring-2 ring-green-600 relative' : ''}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popüler
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                <span className="text-slate-600 ml-1">TL</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${pkg.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Başla
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting Packages */}
      <section id="consulting" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Birebir Danışmanlık Seansları</h2>
          <p className="text-xl text-slate-600">Uzmanlarımızdan birebir destek alın</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultingPackages.map((pkg, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-md p-6 ${pkg.popular ? 'ring-2 ring-orange-600 relative' : ''}`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popüler
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-orange-600">{pkg.price}</span>
                <span className="text-slate-600 ml-1">TL</span>
              </div>
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition ${pkg.popular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                Randevu Al
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">İletişime Geçin</h2>
            <p className="text-xl text-slate-300">Projeleriniz için bugün bizimle iletişime geçin</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">E-posta</h3>
              <p className="text-slate-300">info@cakalsoftware.com</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-slate-300">+90 555 123 4567</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">Adres</h3>
              <p className="text-slate-300">İstanbul, Türkiye</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code2 className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-white">CAKAL SOFTWARE</span>
            </div>

            <div className="flex items-center justify-center space-x-6 mb-4">
              <a
                href="https://www.instagram.com/cakalsoftware?igsh=ZTZ6aXdocTg2b3k%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1CPS4ub1bT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/@cakalsoftware?si=2BExUqXvLY6kcOxY"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <p>&copy; 2025 CAKAL SOFTWARE. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/447537134976"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="WhatsApp İletişim"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

export default App;
