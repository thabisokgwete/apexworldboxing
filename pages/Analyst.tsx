import React, { useState } from 'react';
import { FIGHTERS } from '../constants';
import { analyzeMatchup } from '../services/geminiService';
import { AnalysisResult } from '../types';
import { BrainCircuit, ChevronDown, Sparkles, Trophy, Crosshair } from 'lucide-react';

const Analyst: React.FC = () => {
  const [fighterAId, setFighterAId] = useState(FIGHTERS[0].id);
  const [fighterBId, setFighterBId] = useState(FIGHTERS[1].id);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async () => {
    setLoading(true);
    setResult(null);
    
    const fighterA = FIGHTERS.find(f => f.id === fighterAId);
    const fighterB = FIGHTERS.find(f => f.id === fighterBId);

    if (fighterA && fighterB) {
      const analysis = await analyzeMatchup(fighterA, fighterB);
      setResult(analysis);
    }
    setLoading(false);
  };

  const fighterA = FIGHTERS.find(f => f.id === fighterAId);
  const fighterB = FIGHTERS.find(f => f.id === fighterBId);

  return (
    <div className="min-h-screen bg-apex-dark pt-12 pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-apex-orange/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-apex-gold/5 rounded-full blur-[128px]" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-zinc-900 border border-zinc-800 rounded-full mb-6 shadow-2xl">
            <BrainCircuit className="text-apex-orange" size={32} />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">
            Apex Analyst <span className="text-transparent bg-clip-text bg-gradient-to-r from-apex-orange to-red-500">AI</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Powered by Google Gemini models. Select any two fighters from the roster to generate a comprehensive pre-fight analysis and outcome prediction.
          </p>
        </div>

        {/* Selection Area */}
        <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-lg p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Fighter A Select */}
            <div className="w-full md:w-1/3 text-center">
               <div className="relative mb-4 group">
                 <img 
                   src={fighterA?.image} 
                   alt="Fighter A" 
                   className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-zinc-800 group-hover:border-red-600 transition-colors"
                 />
                 <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    Red Corner
                 </div>
               </div>
               <div className="relative">
                 <select 
                   value={fighterAId}
                   onChange={(e) => setFighterAId(e.target.value)}
                   className="w-full appearance-none bg-zinc-950 text-white border border-zinc-800 py-3 px-4 pr-8 rounded-sm focus:outline-none focus:border-red-600 font-heading uppercase tracking-wide cursor-pointer text-center"
                 >
                   {FIGHTERS.map(f => (
                     <option key={f.id} value={f.id}>{f.name}</option>
                   ))}
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" size={16} />
               </div>
            </div>

            {/* VS */}
            <div className="flex flex-col items-center justify-center">
               <span className="font-heading font-bold text-4xl text-zinc-700 italic">VS</span>
            </div>

            {/* Fighter B Select */}
            <div className="w-full md:w-1/3 text-center">
               <div className="relative mb-4 group">
                 <img 
                   src={fighterB?.image} 
                   alt="Fighter B" 
                   className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-zinc-800 group-hover:border-blue-600 transition-colors"
                 />
                 <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
                    Blue Corner
                 </div>
               </div>
               <div className="relative">
                 <select 
                   value={fighterBId}
                   onChange={(e) => setFighterBId(e.target.value)}
                   className="w-full appearance-none bg-zinc-950 text-white border border-zinc-800 py-3 px-4 pr-8 rounded-sm focus:outline-none focus:border-blue-600 font-heading uppercase tracking-wide cursor-pointer text-center"
                 >
                   {FIGHTERS.map(f => (
                     <option key={f.id} value={f.id}>{f.name}</option>
                   ))}
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" size={16} />
               </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className={`relative overflow-hidden group bg-white text-black font-heading font-bold text-xl uppercase tracking-widest px-12 py-4 rounded-sm transition-all ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-apex-orange hover:text-white hover:scale-105'}`}
            >
               <span className="relative z-10 flex items-center justify-center">
                 {loading ? (
                    <>Analyzing Matchup...</>
                 ) : (
                    <>
                      <Sparkles className="mr-2 text-apex-orange group-hover:text-white transition-colors" /> Simulate Fight
                    </>
                 )}
               </span>
            </button>
          </div>
        </div>

        {/* Results Display */}
        {result && !loading && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-500">
             <div className="bg-zinc-900 border border-apex-gold/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.1)]">
                <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-6 border-b border-white/10 flex items-center justify-between">
                   <h3 className="font-heading text-2xl text-apex-gold uppercase tracking-widest">Analysis Report</h3>
                   <div className="text-xs text-zinc-500 font-mono">GENERATED BY GEMINI 2.5</div>
                </div>
                
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-6">
                      <div>
                         <h4 className="flex items-center text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">
                           <Trophy size={16} className="mr-2 text-apex-orange" /> Prediction
                         </h4>
                         <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                           {result.prediction}
                         </p>
                         {result.roundPrediction && (
                           <span className="inline-block mt-2 px-2 py-1 bg-zinc-800 text-gray-300 text-xs font-bold uppercase rounded">
                             Round {result.roundPrediction}
                           </span>
                         )}
                      </div>

                      <div>
                         <h4 className="flex items-center text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">
                           <Crosshair size={16} className="mr-2 text-blue-500" /> Key Strategy
                         </h4>
                         <p className="text-lg text-gray-300 italic border-l-2 border-blue-500 pl-4">
                           "{result.keyFactor}"
                         </p>
                      </div>
                   </div>

                   <div className="bg-zinc-950/50 p-6 rounded border border-white/5">
                      <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-4 font-bold">
                         Fight Summary
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                         {result.summary}
                      </p>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analyst;