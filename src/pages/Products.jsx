import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/products/ProductCard';
import { Filter } from 'lucide-react';

import { categories, allProducts } from '../data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProducts = activeCategory === "Tümü" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-white mb-6">Teknoloji <span className="text-gradient">Kataloğu</span></h1>
        <p className="text-xl text-slate-300 font-light">İhtiyacınıza uygun, yüksek performanslı ve güvenilir mühendislik çözümlerimizi keşfedin.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="glass-card rounded-3xl p-6 sticky top-28">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-700">
              <Filter className="w-5 h-5 text-accent" />
              <h2 className="font-bold text-lg text-white">Kategoriler</h2>
            </div>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      activeCategory === cat 
                        ? 'bg-gradient-to-r from-accent to-accent-dark text-slate-800 shadow-lg shadow-accent/20 scale-105' 
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch"
            >
              {filteredProducts.map((product, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.title}
                >
                  <ProductCard 
                    title={product.title}
                    desc={product.desc}
                    img={product.img}
                    link={`/urunler/${product.slug}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 glass-card rounded-3xl mt-8"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2">Sonuç Bulunamadı</h3>
              <p className="text-slate-300">Bu kategoriye ait ürün henüz kataloga eklenmemiş olabilir.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
