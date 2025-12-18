
import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, NEWS_UPDATES, BROADCAST_HIGHLIGHTS } from '../constants';
import { Play, Newspaper, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const nextEvent = EVENTS[0];
  
  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-20 w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 bg-zinc-100">
          <div className="absolute inset-0 opacity-5"></div>
        </div>

        <div className="relative z-10 text-center w-full max-w-7xl px-4">
          <div className="inline-flex items-center justify-center px-5 py-2 mb-8 border border-zinc-300 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="w-2.5 h-2.5 bg-apex-orange rounded-full mr-3 animate-pulse"></span>
            <span className="text-zinc-800 text-sm font-bold uppercase tracking-widest">Next Event Live in 30 Days</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black uppercase tracking-tighter mb-4 leading-none whitespace-nowrap">
            Theatre of <span className="text-apex-orange">Fighters</span>
          </h1>
          
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-zinc-800 uppercase tracking-[0.2em] mb-10">
            Champions and Egos
          </h2>
          
          <p className="font-sans text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            A world of triumph and loss.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/events" className="w-full sm:w-auto px-10 py-5 bg-black hover:bg-zinc-800 text-white font-heading font-bold uppercase tracking-widest text-lg transition-all transform hover:scale-105 shadow-lg">
              See Fight Cards
            </Link>
            <Link to="/motion" className="w-full sm:w-auto px-10 py-5 bg-white border border-black/10 hover:bg-zinc-50 text-black font-heading font-bold uppercase tracking-widest text-lg transition-all backdrop-blur-sm shadow-sm">
              View Roster
            </Link>
          </div>
        </div>
      </section>

      {/* What's Happening Now! (Rich Article Grid) */}
      <section className="border-y border-zinc-200 bg-zinc-50">
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

      {/* Broadcast Highlights / Latest Clips */}
      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-apex-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
               <div>
                  <h2 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-2 flex items-center">
                    <Play className="text-apex-orange mr-4 fill-current" size={40} /> Vulgar Broadcast
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-xl">
                     Exclusive interviews, weigh-in drama, and fight highlights.
                  </p>
               </div>
               <Link to="/vulgar" className="mt-6 md:mt-0 text-white font-bold uppercase tracking-widest border-b border-apex-orange pb-1 hover:text-apex-orange transition-colors">
                  Watch All Clips
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {BROADCAST_HIGHLIGHTS.map(clip => (
                  <div key={clip.id} className="group cursor-pointer">
                     <div className="relative aspect-video bg-zinc-800 overflow-hidden mb-4 border border-zinc-800 group-hover:border-apex-orange transition-colors">
                        <img src={clip.image} alt={clip.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full bg-apex-orange/90 flex items-center justify-center transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                              <Play className="fill-black text-black ml-1" size={24} />
                           </div>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-sm">
                           {clip.duration}
                        </div>
                     </div>
                     <h3 className="font-heading text-2xl font-bold uppercase leading-tight group-hover:text-apex-orange transition-colors">
                        {clip.title}
                     </h3>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
