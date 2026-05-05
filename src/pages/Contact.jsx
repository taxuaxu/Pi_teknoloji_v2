import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-6">Projenizi <span className="text-gradient">Konuşalım</span></h1>
        <p className="text-xl text-slate-300 font-light">Özel projeleriniz için danışmanlık ve teknik destek almak üzere bizimle iletişime geçin.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Contact Info */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group flex flex-col justify-between">
          <div className="absolute top-0 right-0 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
             <MapPin className="w-96 h-96" />
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-10 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
              Merkez Ofis
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-600 shadow-inner">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-slate-300 mb-1">Adres</h3>
                  <p className="text-white leading-relaxed">1940. Cadde Kuruçayırlı Tower 81/29<br />Yenimahalle / ANKARA</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-600 shadow-inner">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-slate-300 mb-1">Telefon</h3>
                  <a href="tel:+905063232223" className="text-white hover:text-accent transition-colors block">+90 506 323 22 23</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-600 shadow-inner">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-slate-300 mb-1">E-Posta</h3>
                  <a href="mailto:info@piteknoloji.net" className="text-white hover:text-accent transition-colors block">info@piteknoloji.net</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-600 shadow-inner">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-slate-300 mb-1">Çalışma Saatleri</h3>
                  <p className="text-white">Pzt - Cum: 09:00 - 18:00<br /><span className="text-accent text-sm mt-1 inline-block">7/24 Kesintisiz Servis</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 glass-card rounded-3xl p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          
          <h2 className="text-2xl font-bold text-white mb-8 relative z-10">Bize Mesaj Gönderin</h2>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Adınız</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-600 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder-slate-600 shadow-inner" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Soyadınız</label>
                <input type="text" className="w-full bg-slate-800/50 border border-slate-600 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder-slate-600 shadow-inner" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">E-posta Adresi</label>
              <input type="email" className="w-full bg-slate-800/50 border border-slate-600 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder-slate-600 shadow-inner" placeholder="ornek@sirket.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Mesajınız</label>
              <textarea rows="5" className="w-full bg-slate-800/50 border border-slate-600 text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder-slate-600 shadow-inner resize-none" placeholder="Projenizden veya ihtiyaçlarınızdan bahsedin..."></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button" 
              className="w-full bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-slate-800 font-bold py-4 rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2"
            >
              Mesajı Gönder <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </div>

      </div>
    </div>
  );
}
