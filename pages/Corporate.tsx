
import React from 'react';
import { Building2, Target, TrendingUp } from 'lucide-react';

const Corporate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      {/* Main Card Container */}
      <div className="max-w-3xl w-full bg-white shadow-2xl relative overflow-hidden rounded-sm">
        
        {/* Top Orange Bar */}
        <div className="h-3 w-full bg-apex-orange"></div>

        <div className="p-8 md:p-16 text-center">
          
          {/* Header Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 mb-8">
            <Building2 className="text-apex-orange" size={40} />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-10 text-black">
            Corporate Member<br />
            of <span className="text-apex-orange">R500M+ Company</span>
          </h1>

          {/* PEYPA Text */}
          <p className="font-sans text-xl md:text-2xl text-zinc-800 leading-relaxed mb-12 font-light">
            ApexWorld Boxing Entertainment (ABE) is a corporate member of <span className="font-bold text-apex-orange">R500M+ Company</span>, an initiative instituted by Private Equity Youth Partners Association (PEYPA).
          </p>

          {/* Definition Box */}
          <div className="bg-zinc-50 border-l-8 border-apex-orange p-8 text-left mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-apex-orange" size={28} />
              <h3 className="font-heading font-bold text-3xl uppercase text-black">R500M+ Company</h3>
            </div>
            <p className="text-zinc-600 leading-relaxed text-lg">
              R500M+ Company is a network and growth program of companies, founders, and executives with a mission to build companies to the value of <span className="font-bold text-zinc-900">R500 million</span> and above, measured using various valuation methods and metrics.
            </p>
          </div>

          {/* Footer Link */}
          <div className="text-left border-t border-zinc-100 pt-8">
             <button className="inline-flex items-center text-zinc-400 font-bold uppercase tracking-widest text-sm hover:text-apex-orange transition-colors">
               <TrendingUp size={16} className="mr-2" /> Strategic Growth Initiative
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Corporate;
