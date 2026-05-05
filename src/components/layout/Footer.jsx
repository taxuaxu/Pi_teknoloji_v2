import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-20 pb-10 border-t border-slate-700/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/images/logo.png" alt="Pi Teknoloji Logo" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-slate-300 text-lg max-w-md font-light leading-relaxed">
              25 yıllık tecrübe ile global standartlarda yüksek mühendislik ve entegre güvenlik çözümleri sunuyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Hızlı Menü</h3>
            <ul className="space-y-4">
              <li><Link to="/kurumsal" className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all inline-block">Kurumsal</Link></li>
              <li><Link to="/urunler" className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all inline-block">Teknoloji Kataloğu</Link></li>
              <li><Link to="/hizmetler" className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all inline-block">Hizmetlerimiz</Link></li>
              <li><Link to="/iletisim" className="text-slate-300 hover:text-accent hover:translate-x-1 transition-all inline-block">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg tracking-wide">Bize Ulaşın</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-accent mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">1940. Cadde Kuruçayırlı Tower<br/>81/29 Yenimahalle / ANKARA</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <a href="tel:+905063232223" className="text-slate-300 text-sm hover:text-white transition-colors">+90 506 323 22 23</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <a href="mailto:info@piteknoloji.net" className="text-slate-300 text-sm hover:text-white transition-colors">info@piteknoloji.net</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Pi Teknoloji. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Gizlilik Politikası</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
