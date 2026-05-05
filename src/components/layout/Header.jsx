import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Zap, Shield, Crosshair, Volume2, Factory, Flame, Server } from 'lucide-react';

const categories = [
  {
    title: "Güvenlik ve Geçiş",
    icon: <Shield className="w-4 h-4" />,
    items: ["CCTV Sistemleri", "Turnikeler", "X-Ray & Boy Dedektörü", "Bariyer Sistemleri"]
  },
  {
    title: "Savunma Sistemleri",
    icon: <Crosshair className="w-4 h-4" />,
    items: ["Zırhlı Nöbet Kulübesi", "Balistik Cam"]
  },
  {
    title: "Ses, Işık ve Görüntü",
    icon: <Volume2 className="w-4 h-4" />,
    items: ["Profesyonel Ses", "Profesyonel Işık", "Acil Anons", "Cephe Aydınlatma"]
  },
  {
    title: "Endüstriyel Kapılar",
    icon: <Factory className="w-4 h-4" />,
    items: ["Seksiyonel Kapılar", "Sarmal Kapılar", "Yüksek Hızlı Kapılar", "Yükleme Rampaları"]
  },
  {
    title: "Yangın Güvenliği",
    icon: <Flame className="w-4 h-4" />,
    items: ["Yangın Perdesi", "Duman Perdesi"]
  },
  {
    title: "Altyapı",
    icon: <Server className="w-4 h-4" />,
    items: ["Network Sistemleri", "Veri Merkezleri", "Sunucular"]
  }
];

export default function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="/images/logo.png" alt="Pi Teknoloji Logo" className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 items-center bg-slate-800/40 border border-slate-600/50 backdrop-blur-md rounded-full px-4 py-1.5">
            <Link to="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}>Ana Sayfa</Link>
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/urunler' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}>
                Çözümlerimiz <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-accent' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMegaMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[550px] lg:w-[650px] bg-slate-800/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-slate-600/50 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent-dark" />
                    
                    <div className="p-5">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
                        {categories.map((cat, idx) => (
                          <div key={idx} className="group/cat p-3 rounded-xl hover:bg-slate-700/40 transition-colors border border-transparent hover:border-slate-600/50">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="text-slate-400 group-hover/cat:text-accent transition-colors bg-slate-800 p-1.5 rounded-lg border border-slate-700">
                                {cat.icon}
                              </div>
                              <h3 className="font-semibold text-[11px] tracking-widest uppercase text-slate-300 group-hover/cat:text-accent transition-colors">{cat.title}</h3>
                            </div>
                            <ul className="space-y-1.5 pl-4 border-l border-slate-700/50 ml-3.5 mt-2">
                              {cat.items.map((item, i) => (
                                <li key={i}>
                                  <Link to="/urunler" className="text-[12px] text-slate-300 hover:text-white flex items-center gap-1.5 group/link">
                                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover/link:bg-accent transition-colors" />
                                    <span className="group-hover/link:translate-x-1 transition-transform">{item}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-5 pt-3 border-t border-slate-700 text-center">
                        <Link to="/urunler" className="text-[13px] text-accent hover:text-accent-light font-medium inline-flex items-center gap-1">
                          Tüm Kataloğu İncele &rarr;
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/iletisim" className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${location.pathname === '/iletisim' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}`}>İletişim</Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link to="/iletisim" className="relative group overflow-hidden bg-slate-700 text-white px-6 py-2.5 rounded-full font-medium transition-all border border-slate-600 hover:border-accent">
              <span className="relative z-10">Bize Ulaşın</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent to-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-700/50">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-[72px] bg-slate-900/95 backdrop-blur-2xl border-t border-slate-700 overflow-y-auto"
          >
            <div className="px-4 py-8 flex flex-col gap-4">
              <Link to="/" className="text-xl font-medium text-white py-3 border-b border-slate-700">Ana Sayfa</Link>
              <Link to="/urunler" className="text-xl font-medium text-white py-3 border-b border-slate-700 flex justify-between items-center">
                Çözümlerimiz
                <ChevronDown className="w-5 h-5 text-accent" />
              </Link>
              <div className="pl-4 border-l border-slate-700 ml-2 space-y-4 py-2">
                {categories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="text-accent text-sm font-bold mb-2">{cat.title}</div>
                    <div className="space-y-2 pl-2">
                      {cat.items.map((item, i) => (
                        <Link key={i} to="/urunler" className="block text-slate-300 text-sm py-1">{item}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/iletisim" className="text-xl font-medium text-white py-3 border-b border-slate-700">İletişim</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
