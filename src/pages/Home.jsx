import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Wrench, Clock, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: "Danışmanlık",
      desc: "İhtiyaçları analiz ederek en doğru ve verimli çözümleri belirliyoruz.",
      icon: <Cpu className="w-8 h-8 text-accent" />
    },
    {
      title: "Projelendirme",
      desc: "Mühendislik hesapları ve teknik detayların kusursuz kurgulanması.",
      icon: <ShieldCheck className="w-8 h-8 text-accent" />
    },
    {
      title: "Bakım & Onarım",
      desc: "Sistemlerin verimli ve kesintisiz çalışmasını destekleyen süreçler.",
      icon: <Wrench className="w-8 h-8 text-accent" />
    },
    {
      title: "7/24 Servis",
      desc: "Hızlı, etkili ve çözüm odaklı servis desteğimizle her an yanınızdayız.",
      icon: <Clock className="w-8 h-8 text-accent" />
    }
  ];

  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src="/images/page1_img2.jpeg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80" />
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-accent/30 text-accent text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Yeni Nesil Teknolojiler
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-[1.1]"
          >
            Geleceğin <br />
            <span className="text-gradient">Güvenlik ve Geçiş</span> <br />
            Sistemleri
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light"
          >
            25 yıllık tecrübemizle kontrollü geçiş, savunma ve profesyonel sistemlerde yüksek mühendislik çözümleri sunuyoruz.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/urunler" className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-slate-800 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(234,218,165,0.4)] flex items-center justify-center gap-2">
              Kataloğu İncele <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/iletisim" className="w-full sm:w-auto glass hover:bg-slate-700/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Proje Danışmanlığı
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest mb-2">Keşfet</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Uzmanlık Alanlarımız</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Uçtan Uca Proje Yönetimi</h3>
            </div>
            <p className="text-slate-300 max-w-md text-lg">
              Kurumsal ihtiyaçlarınıza özel tasarlanan süreçlerimizle projelerinizi güvenle hayata geçiriyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700">
                  {service.icon}
                </div>
                
                <div className="w-16 h-16 bg-slate-700/80 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-slate-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.desc}</p>
                
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-32 relative border-t border-slate-700/50">
        <div className="absolute inset-0">
          <img src="/images/page2_img1.jpeg" alt="Global Map" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-600 text-slate-300 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 text-accent" />
                Uluslararası Güç
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Sınırları Aşan <br/><span className="text-accent">Teknoloji İhracatı</span></h2>
              <p className="text-slate-300 text-xl leading-relaxed mb-10 font-light">
                Yerel başarılarımızı global arenaya taşıdık. Libya'dan Kazakistan'a uzanan geniş coğrafyada prestijli projelere imza atıyoruz.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Libya', 'Irak', 'Azerbaycan', 'Özbekistan', 'Kazakistan', 'Makedonya', 'Kıbrıs'].map((country) => (
                  <span key={country} className="glass px-5 py-2.5 rounded-full text-sm font-medium text-slate-200 border-slate-600 hover:border-accent hover:text-white transition-colors cursor-default">
                    {country}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Glow behind grid */}
              <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full" />
              
              <div className="glass-card p-10 rounded-3xl text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-6xl font-black text-white mb-2 tracking-tighter">25<span className="text-accent">+</span></div>
                <div className="text-slate-300 font-medium">Yıllık Tecrübe</div>
              </div>
              <div className="glass-card p-10 rounded-3xl text-center mt-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-6xl font-black text-white mb-2 tracking-tighter">7</div>
                <div className="text-slate-300 font-medium">Aktif Ülke</div>
              </div>
              <div className="glass-card p-10 rounded-3xl text-center col-span-2 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-3xl font-bold text-white mb-3">100% Yerli Sermaye</div>
                <div className="text-slate-300 font-medium">Global standartlarda yüksek teknoloji üretimi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
