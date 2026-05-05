import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Send, ChevronRight } from 'lucide-react';
import { allProducts } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = allProducts.find(p => p.slug === slug);
    if (found) {
      setProduct(found);
    } else {
      // If product not found, we can navigate to 404 or just render a not found state
      setProduct('not-found');
    }
  }, [slug]);

  if (!product) return <div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div></div>;

  if (product === 'not-found') {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-black text-slate-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-6">Ürün Bulunamadı</h2>
        <p className="text-slate-400 mb-8 text-center max-w-md">Aradığınız ürüne şu an ulaşılamıyor veya katalogdan kaldırılmış olabilir.</p>
        <button onClick={() => navigate('/urunler')} className="bg-accent text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-accent-dark transition-colors">
          <ArrowLeft className="w-5 h-5" /> Katalog'a Dön
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link to="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
        <Link to="/urunler" className="hover:text-accent transition-colors">Ürünler</Link>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
        <span className="text-slate-500">{product.category}</span>
        <ChevronRight className="w-4 h-4 flex-shrink-0" />
        <span className="text-white font-medium">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
          <div className="glass-card rounded-3xl overflow-hidden relative z-10 border border-slate-700/50 bg-slate-800">
            <div className="aspect-w-4 aspect-h-3 sm:aspect-h-4">
              <img 
                src={product.img} 
                alt={product.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Optional Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>

        {/* Right Column - Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col h-full"
        >
          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-wider uppercase mb-4 border border-accent/20">
              {product.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              {product.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-light mb-10">
              {product.desc}
            </p>
          </div>

          <div className="space-y-8 mb-12 flex-grow">
            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-accent rounded-full"></div>
                  Öne Çıkan Özellikler
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 bg-slate-600 rounded-full"></div>
                  Teknik Veriler
                </h3>
                <div className="glass-card rounded-2xl overflow-hidden border border-slate-700/50">
                  <table className="w-full text-left text-sm">
                    <tbody>
                      {Object.entries(product.specs).map(([key, value], idx) => (
                        <tr key={idx} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/30 transition-colors">
                          <th className="py-3 px-4 font-medium text-slate-400 w-1/3">{key}</th>
                          <td className="py-3 px-4 text-slate-200 font-semibold">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Action Area */}
          <div className="pt-8 border-t border-slate-700/50 mt-auto flex flex-col sm:flex-row gap-4 items-center">
            <Link 
              to="/iletisim" 
              className="w-full sm:w-auto flex-1 bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent text-slate-900 font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(234,218,165,0.2)] hover:shadow-[0_0_40px_rgba(234,218,165,0.4)] hover:scale-105 flex items-center justify-center gap-2 text-center"
            >
              Teklif İsteyin <Send className="w-5 h-5" />
            </Link>
            <button 
              onClick={() => navigate(-1)} 
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" /> Geri Dön
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
