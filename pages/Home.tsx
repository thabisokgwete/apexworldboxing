import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, NEWS_UPDATES } from '../constants';
import { Newspaper, Clock, Target, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] py-24 w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 bg-zinc-100">
          <div className="absolute inset-0 opacity-5"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-7xl px-4">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-10 border border-zinc-300 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="w-3 h-3 bg-apex-orange rounded-full mr-3 animate-pulse"></span>
            <span className="text-zinc-800 text-base font-bold uppercase tracking-widest">Next Event Live in 30 Days</span>
          </div>
          
          {/* text-[8.2vw] ensures the title fits on one line on almost any mobile screen width */}
          <h1 className="font-heading text-[8.2vw] md:text-7xl font-black text-black uppercase tracking-tighter mb-4 leading-none whitespace-nowrap">
            Theatre of <span className="text-apex-orange">Fighters</span>
          </h1>
          
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-zinc-800 uppercase tracking-[0.2em] mb-12">
            Champions and Egos
          </h2>
          
          <p className="font-sans text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            A world of triumph and loss.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/events" className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-zinc-800 text-white font-heading font-bold uppercase tracking-widest text-lg transition-all transform hover:scale-105 shadow-2xl">
              See Fight Cards
            </Link>
            <Link to="/motion" className="w-full sm:w-auto px-10 py-5 bg-white border-4 border-black hover:bg-zinc-50 text-black font-heading font-bold uppercase tracking-widest text-lg transition-all backdrop-blur-sm shadow-xl">
              View Fighters
            </Link>
          </div>
        </div>
      </section>

      {/* ABE TOTAL TAKEOVER CAMPAIGN SECTION */}
      <section className="relative bg-white overflow-hidden border-b-4 border-apex-orange py-16 md:py-24">
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

            {/* Forced break and viewport-width sizing ensures exactly two lines on mobile */}
            <h2 className="font-heading text-[7.5vw] md:text-8xl lg:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-4">
              ABE TOTAL <br />
              TAKEOVER CAMPAIGN
            </h2>
            
            <div className="bg-apex-orange text-black px-6 py-2 mb-12 transform -skew-x-12 inline-block">
              <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-widest skew-x-12 italic">
                EAST RAND
              </h3>
            </div>

            {/* TWO ACTION BOXES (Buttons) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Link 
                to="/motion" 
                state={{ openRegistration: true }}
                className="bg-black text-white px-10 py-5 font-heading font-bold uppercase tracking-widest text-xl hover:bg-apex-orange transition-all flex items-center justify-center group shadow-xl"
              >
                Be a Fighter <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                to="/subscribe" 
                className="bg-white border-4 border-black text-black px-10 py-5 font-heading font-bold uppercase tracking-widest text-xl hover:bg-black hover:text-white transition-all flex items-center justify-center group shadow-xl"
              >
                Be a Partner <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom "Caution" Tape decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-apex-orange via-black to-apex-orange flex">
           {Array(20).fill(0).map((_, i) => (
             <div key={i} className="flex-1 h-full bg-apex-orange/20 border-r border-black/20"></div>
           ))}
        </div>
      </section>

      {/* What's Happening Now! (Rich Article Grid) */}
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-black text-apex-orange flex items-center py-6 px-6 md:px-8 border-b-4 border-apex-orange border-r border-zinc-800">
            <Newspaper size={32} className="mr-4 animate-pulse" />
            <h2 className="font-heading font-black uppercase tracking-tighter text-4xl italic leading-none">
              What's Happening Now!
            </h2>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Featured Story (Left Large) */}
            <div className="lg:col-span-7 relative group cursor-pointer overflow-hidden h-[600px] lg:h-auto border-r border-zinc-200">
              <img 
                src={NEWS_UPDATES[0].image} 
                alt="News Featured" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-10 w-full">
                 <span className="inline-block bg-apex-orange text-black text-sm font-bold uppercase px-3 py-1 mb-4 rounded-sm">
                   {NEWS_UPDATES[0].category}
                 </span>
                 <h3 className="font-heading text-4xl md:text-6xl font-bold text-white uppercase leading-none mb-6 drop-shadow-lg">
                   {NEWS_UPDATES[0].headline}
                 </h3>
                 <p className="text-zinc-200 text-xl mb-6 line-clamp-2 font-medium max-w-2xl leading-relaxed">
                   {NEWS_UPDATES[0].summary}
                 </p>
                 <div className="flex items-center text-zinc-400 text-sm font-bold uppercase tracking-widest">
                    <span>By {NEWS_UPDATES[0].author}</span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center"><Clock size={14} className="mr-2"/> {NEWS_UPDATES[0].time}</span>
                 </div>
              </div>
            </div>

            {/* Secondary Stories (Right Stack) */}
            <div className="lg:col-span-5 flex flex-col">
               {NEWS_UPDATES.slice(1).map((news, index) => (
                 <div key={news.id} className={`flex-1 relative group cursor-pointer overflow-hidden bg-white p-8 border-b border-zinc-200 ${index === NEWS_UPDATES.length - 2 ? 'border-b-0' : ''} hover:bg-zinc-100 transition-colors`}>
                    <div className="flex gap-6 h-full">
                       <div className="w-1/3 relative overflow-hidden">
                          <img src={news.image} alt={news.headline} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                       </div>
                       <div className="w-2/3 flex flex-col justify-between py-1">
                          <div>
                            <span className="text-apex-orange text-xs font-bold uppercase tracking-widest mb-2 block">{news.category}</span>
                            <h4 className="font-heading text-xl font-bold uppercase leading-tight text-zinc-900 group-hover:text-apex-orange transition-colors">
                              {news.headline}
                            </h4>
                          </div>
                          <div className="flex items-center text-xs text-zinc-400 font-bold uppercase tracking-widest mt-4">
                             <span>{news.time}</span>
                          </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;