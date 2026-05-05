import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ title, desc, img, link = "#" }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-20 transition-opacity z-10 mix-blend-overlay" />
      
      <div className="h-64 bg-slate-700 overflow-hidden relative flex-shrink-0">
        {img ? (
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
            <Zap className="w-12 h-12 text-slate-600" />
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow relative z-20 -mt-16 bg-gradient-to-t from-slate-800 via-slate-800 to-transparent pt-16">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-slate-300 mb-6 text-sm leading-relaxed flex-grow">{desc}</p>
        
        <Link to={link} className="inline-flex items-center text-accent font-medium group/btn mt-auto py-2 border-t border-slate-700/50 pt-4">
          <span className="group-hover/btn:mr-2 transition-all">Detaylı İncele</span>
          <ArrowRight className="w-4 h-4 opacity-0 group-hover/btn:opacity-100 transform -translate-x-4 group-hover/btn:translate-x-0 transition-all" />
        </Link>
      </div>
    </div>
  );
}
