import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-0 md:min-h-[90vh] pt-0 pb-16 md:py-24 w-full flex items-start md:items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 bg-zinc-100">
          <div className="absolute inset-0 opacity-5"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-7xl px-4 mt-10 md:mt-0">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 md:mb-10 border border-zinc-300 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 bg-apex-orange rounded-full mr-2 animate-pulse"></span>
            <span className="text-zinc-800 text-xs font-bold uppercase tracking-widest">Next Event Live in 30 Days</span>
          </div>
          
          {/* text-[9.5vw] ensures the title fits on one line on almost any mobile screen width */}
          <h1 className="font-heading text-[9.5vw] md:text-8xl font-black text-black uppercase tracking-tighter mb-4 leading-none whitespace-nowrap">
            Theatre of <span className="text-apex-orange">Fighters</span>
          </h1>
          
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-zinc-800 uppercase tracking-[0.2em] mb-12 md:mb-16">
            Champions and Egos
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/fighters" 
              state={{ openRegistration: true }}
              className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-zinc-800 text-white font-heading font-bold uppercase tracking-widest text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center group"
            >
              Be a Fighter <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/subscribe" 
              className="w-full sm:w-auto px-10 py-5 bg-white border-4 border-black hover:bg-zinc-50 text-black font-heading font-bold uppercase tracking-widest text-lg transition-all backdrop-blur-sm shadow-xl flex items-center justify-center group"
            >
              Be a Partner <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABE TOTAL TAKEOVER CAMPAIGN SECTION */}
      <section className="relative bg-white overflow-hidden py-16 md:py-24 border-b border-zinc-100">
        {/* Decorative background elements - lighter for light background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none select-none overflow-hidden">
          <div className="absolute -left-20 top-1/2 -rotate-12 font-heading font-black text-[20rem] text-black leading-none uppercase">TAKEOVER</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-apex-orange hidden md:block"></div>
              <span className="text-apex-orange font-heading font-bold uppercase tracking-[0.3em] text-xl md:text-2xl">2026 Fighters' Season</span>
              <div className="h-px w-12 bg-apex-orange hidden md:block"></div>
            </div>

            {/* Campaign Header Styling Reference */}
            <h2 className="font-heading text-[10.5vw] md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-4">
              ABE TOTAL <br />
              TAKEOVER CAMPAIGN
            </h2>
            
            <div className="bg-apex-orange text-black px-6 py-2 mb-4 transform -skew-x-12 inline-block">
              <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-widest skew-x-12 italic">
                EAST RAND
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* WORLD OF FIGHTERS SECTION */}
      <section className="pt-24 md:pt-32 pb-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Exactly matching text-[10.5vw] md:text-8xl lg:text-9xl for parity */}
            <h2 className="font-heading text-[10.5vw] md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-none mb-12 whitespace-nowrap">
              WORLD OF <span className="text-apex-orange">FIGHTERS</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase text-black mb-8">
                What is a <span className="text-apex-orange">fighter?</span>
              </h3>
              
              <p className="font-sans text-xl md:text-3xl text-black font-bold leading-relaxed md:leading-snug">
                A fighter is someone with the courage, audacity, conviction, and stubborn self-assuredness to relentlessly pursue and compete for what they want, and win.
              </p>

              {/* Manifesto List Section */}
              <div className="mt-16 md:mt-24 flex justify-center">
                <ul className="text-left font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter space-y-4 md:space-y-6 border-l-8 border-apex-orange pl-8 md:pl-12">
                  <li className="text-black">fighters are arrogant</li>
                  <li className="text-black">Fighters are stubborn</li>
                  <li className="text-black">Fighters are competitive</li>
                  <li className="text-black">Fighters are dominant</li>
                  <li className="text-black">Fighters are relentless</li>
                  <li className="text-black">Fighters are irrationally confident</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decorative background text */}
        <div className="absolute bottom-0 right-0 opacity-[0.03] select-none pointer-events-none translate-y-1/2 translate-x-1/4">
          <span className="font-heading font-black text-[25rem] leading-none uppercase">ABE</span>
        </div>
      </section>

      {/* FIGHTERS' ATTITUDE SECTION */}
      <section className="pt-16 pb-24 md:pb-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-black uppercase tracking-tighter leading-none">
              FIGHTERS' <span className="text-apex-orange">ATTITUDE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 max-w-6xl mx-auto">
            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The compulsion to resist, persist, and impose
              </p>
            </div>
            
            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The will to fight, compete, and win
              </p>
            </div>
            
            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The disposition to defy, dare, and dominate
              </p>
            </div>
            
            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The refusal to settle, submit, or concede
              </p>
            </div>

            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The impulse for chaos, madness, and intensity
              </p>
            </div>

            <div className="p-4 flex items-center justify-center text-center">
              <p className="font-heading text-xl md:text-2xl font-bold uppercase leading-tight text-black">
                The courage to lead through failure, pressure, and doubt
              </p>
            </div>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none">
          <span className="font-heading font-black text-[30rem] leading-none uppercase">ATTITUDE</span>
        </div>
      </section>
    </div>
  );
};

export default Home;