
import React from 'react';
import { Building2, TrendingUp, Target } from 'lucide-react';

const Corporate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24 pt-12">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50 to-transparent -z-10" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Container */}
        <div className="bg-white border border-zinc-200 shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-apex-orange to-black"></div>
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-zinc-50 rounded-full mb-6 border border-zinc-100">
              <Building2 className="text-apex-orange" size={32} />
            </div>
            
            <h1 className="font-heading font-black text-4xl md:text-6xl text-black uppercase tracking-tighter leading-tight mb-8">
              Corporate Member of <br/>
              <span className="text-apex-orange">R500M+ Company</span>
            </h1>

            {/* Image Placeholder */}
            {/* You must upload your image to the public folder and name it 'corporate.png' */}
            <div className="my-10 border border-zinc-100 bg-zinc-50 rounded-sm p-2 shadow-inner inline-block max-w-full">
              <img 
                src="/corporate.png" 
                alt="R500M+ Company and PEYPA Logos" 
                className="max-w-full h-auto object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<div class="p-8 text-zinc-400 text-sm font-bold uppercase tracking-widest border border-dashed border-zinc-300">Please upload corporate.png to display image</div>';
                }}
              />
            </div>
          </div>

          {/* Body Text */}
          <div className="prose prose-lg max-w-none text-zinc-600 leading-relaxed font-light">
            <p className="mb-10 text-xl md:text-2xl text-center font-normal text-black border-b border-zinc-100 pb-10">
              ApexWorld Boxing Entertainment (ABE) is a corporate member of <strong className="text-apex-orange">R500M+ Company</strong>, an initiative instituted by Private Equity Youth Partners Association (PEYPA).
            </p>

            <div className="mt-10 bg-zinc-50 p-8 md:p-10 border-l-4 border-apex-orange">
              <h2 className="font-heading font-bold text-3xl text-black uppercase mb-4 flex items-center">
                <Target className="mr-3 text-apex-orange" size={28} />
                R500M+ Company
              </h2>
              <p className="text-zinc-700">
                R500M+ Company is a network and growth program of companies, founders, and executives with a mission to build companies to the value of <strong className="text-black">R500 million</strong> and above, measured using various valuation methods and metrics.
              </p>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-zinc-400 font-bold uppercase tracking-widest">
              <TrendingUp size={16} className="mr-2" />
              Strategic Growth Initiative
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Corporate;
