import React from 'react';
import { Link } from 'react-router-dom';
import { EVENTS, FIGHTERS, NEWS_UPDATES, VULGAR_TEASERS, MERCHANDISE } from '../constants';
import EventCard from '../components/EventCard';
import FighterCard from '../components/FighterCard';
import { ArrowRight, Zap, Trophy, Flame, Play, AlertTriangle, Newspaper, TrendingUp, ShoppingBag, Clock } from 'lucide-react';

const Home: React.FC = () => {
  const nextEvent = EVENTS[0];
  const featuredFighters = FIGHTERS.slice(0, 3);
  
  const mainEventFighters = {
    a: FIGHTERS.find(f => f.id === nextEvent.mainEvent.fighterAId),
    b: FIGHTERS.find(f => f.id === nextEvent.mainEvent.fighterBId),
  };

  // Determine mover of the week (Mock logic: just pick the second fighter)
  const moverOfTheWeek = FIGHTERS[1];

  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] py-20 w-full flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Placeholder */}
        <div className="absolute inset-0 z-0 bg-zinc-100">
          <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Boxing Arena" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 border border-zinc-300 rounded-full bg-white/80 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 bg-apex-orange rounded-full mr-2 animate-pulse"></span>
            <span className="text-zinc-800 text-xs font-bold uppercase tracking-widest">Next Event Live in 30 Days</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-8xl lg:text-9xl font-bold text-black uppercase tracking-tighter mb-2 leading-none">
            Theatre of <span className="text-apex-orange">Fighters</span>
          </h1>
          
          <h2 className="font-heading text-xl md:text-4xl font-bold text-zinc-800 uppercase tracking-[0.2em] mb-8">
            Champions and Egos
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            A world of personality clashes. A world of triumph and loss.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/events" className="w-full sm:w-auto px-8 py-4 bg-black hover:bg-zinc-800 text-white font-heading font-bold uppercase tracking-widest text-lg transition-all transform hover:scale-105 shadow-lg">
              See Fight Cards
            </Link>
            <Link to="/motion" className="w-full sm:w-auto px-8 py-4 bg-white border border-black/10 hover:bg-zinc-50 text-black font-heading font-bold uppercase tracking-widest text-lg transition-all backdrop-blur-sm shadow-sm">
              View Roster
            </Link>
          </div>
        </div>
      </section>

      {/* What's Happening Now! (Rich Article Grid) */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-black text-apex-orange flex items-center py-4 px-6 md:px-8 border-b-4 border-apex-orange border-r border-zinc-800">
            <Newspaper size={28} className="mr-4 animate-pulse" />
            <h2 className="font-heading font-black uppercase tracking-tighter text-3xl italic leading-none">
              What's Happening Now!
            </h2>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Featured Story (Left Large) */}
            <div className="lg:col-span-7 relative group cursor-pointer overflow-hidden h-[500px] lg:h-auto border-r border-zinc-200">
              <img 
                src={NEWS_UPDATES[0].image} 
                alt="News Featured" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                 <span className="inline-block bg-apex-orange text-black text-xs font-bold uppercase px-2 py-1 mb-3 rounded-sm">
                   {NEWS_UPDATES[0].category}
                 </span>
                 <h3 className="font-heading text-3xl md:text-5xl font-bold text-white uppercase leading-none mb-4 drop-shadow-lg">
                   {NEWS_UPDATES[0].headline}
                 </h3>
                 <p className="text-zinc-200 text-lg mb-4 line-clamp-2 font-medium max-w-xl leading-relaxed">
                   {NEWS_UPDATES[0].summary}
                 </p>
                 <div className="flex items-center text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    <span>By {NEWS_UPDATES[0].author}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center"><Clock size={12} className="mr-1"/> {NEWS_UPDATES[0].time}</span>
                 </div>
              </div>
            </div>

            {/* Secondary Stories (Right Stack) */}
            <div className="lg:col-span-5 flex flex-col">
               {NEWS_UPDATES.slice(1).map((news, index) => (
                 <div key={news.id} className={`flex-1 relative group cursor-pointer overflow-hidden bg-white p-6 border-b border-zinc-200 ${index === NEWS_UPDATES.length - 2 ? 'border-b-0' : ''} hover:bg-zinc-100 transition-colors`}>
                    <div className="flex gap-6 h-full">
                       <div className="w-1/3 relative overflow-hidden aspect-[4/3]">
                          <img src={news.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Thumbnail"/>
                       </div>
                       <div className="w-2/3 flex flex-col justify-center">
                          <div className="flex items-center justify-between mb-2">
                             <span className="text-[10px] font-bold uppercase tracking-widest text-apex-orange border border-apex-orange px-1 rounded-sm">{news.category}</span>
                             <span className="text-[10px] text-zinc-400 font-bold uppercase">{news.time}</span>
                          </div>
                          <h4 className="font-heading text-xl font-bold text-black uppercase leading-tight mb-2 group-hover:text-apex-orange transition-colors">
                            {news.headline}
                          </h4>
                          <p className="text-xs text-zinc-500 line-clamp-2 mb-3 leading-relaxed">
                            {news.summary}
                          </p>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors flex items-center">
                            Read Article <ArrowRight size={12} className="ml-1" />
                          </span>
                       </div>
                    </div>
                 </div>
               ))}
               
               {/* View All Link */}
               <div className="bg-zinc-900 p-4 text-center hover:bg-apex-orange transition-colors cursor-pointer group mt-auto">
                 <span className="text-white font-heading font-bold uppercase tracking-widest text-sm flex items-center justify-center">
                    View All News <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </span>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vulgar Highlights (Media Teaser) */}
      <section className="bg-black py-20 overflow-hidden relative">
        {/* Gritty Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10">
            <div>
              <h2 className="font-heading font-black text-6xl md:text-8xl text-apex-orange uppercase tracking-tighter mb-2 leading-none">
                Vulgar Broadcast
              </h2>
              <div className="flex items-center text-white mb-4">
                <AlertTriangle size={18} className="mr-1.5 text-apex-orange" />
                <span className="text-sm font-bold uppercase tracking-widest">Explicit Content</span>
              </div>
              <h3 className="font-heading text-4xl font-bold text-zinc-500 uppercase tracking-tighter leading-none">
                Uncensored <br/>Content
              </h3>
            </div>
            <Link to="/broadcasting" className="mt-6 md:mt-0 text-white hover:text-apex-orange font-heading font-bold uppercase tracking-widest flex items-center transition-colors">
              Enter Vulgar <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VULGAR_TEASERS.map((video) => (
              <Link to="/broadcasting" key={video.id} className="group relative aspect-video bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-apex-orange transition-colors">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-apex-orange group-hover:border-apex-orange transition-all">
                    <Play size={24} className="text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white uppercase italic">{video.title}</h3>
                    <span className="text-xs font-bold bg-red-600 text-white px-2 py-0.5 rounded-sm">18+</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold uppercase text-black flex items-center">
              <Zap className="text-apex-orange mr-2" size={24} /> Featured Event
            </h2>
          </div>
          <EventCard 
            event={nextEvent} 
            fighterA={mainEventFighters.a}
            fighterB={mainEventFighters.b}
            featured={true}
          />
        </div>
      </section>

      {/* Roster Preview & Mover of the Week */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-heading font-bold uppercase text-black tracking-tight">Top Fighters</h2>
          <Link to="/motion" className="group flex items-center text-zinc-500 hover:text-apex-orange transition-colors text-sm font-bold uppercase tracking-widest">
            Full Roster <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Mover of the Week Widget */}
          <div className="lg:col-span-1 bg-zinc-50 border border-zinc-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp size={20} className="text-green-600" />
                </div>
                <span className="font-heading font-bold uppercase text-zinc-900">Mover of the Week</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-black uppercase leading-none mb-1">{moverOfTheWeek.name}</h3>
              <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">"{moverOfTheWeek.nickname}"</p>
              <div className="text-4xl font-mono font-bold text-apex-orange">+150 <span className="text-sm text-zinc-400 font-sans font-normal">Points</span></div>
            </div>
            <div className="mt-6 pt-6 border-t border-zinc-200">
              <p className="text-xs text-zinc-500 leading-relaxed">
                Sizwe climbs the heavyweight rankings after a stunning KO victory in Mexico City last weekend.
              </p>
              <Link to="/motion" className="mt-4 block w-full text-center bg-white border border-zinc-300 py-2 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-colors">
                View Standings
              </Link>
            </div>
          </div>

          {/* Regular Fighter Cards */}
          {featuredFighters.map(fighter => (
            <FighterCard key={fighter.id} fighter={fighter} />
          ))}
        </div>
      </section>

      {/* Fight Kit Drops (Shop Integration) */}
      <section className="bg-white py-24 border-t border-zinc-100 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
             <div>
               <h2 className="font-heading text-4xl font-bold uppercase text-black mb-2">Fight Kit Drops</h2>
               <p className="text-zinc-500">Fresh gear from the lab.</p>
             </div>
             <Link to="/shop" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-black hover:text-apex-orange transition-colors">
               Visit Shop <ShoppingBag size={16} className="ml-2" />
             </Link>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex space-x-6 w-max">
              {MERCHANDISE.slice(0, 4).map((item) => (
                <div key={item.id} className="w-72 group cursor-pointer">
                  <div className="relative aspect-square bg-zinc-50 border border-zinc-100 mb-4 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {item.tag && <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold uppercase px-2 py-1">{item.tag}</span>}
                  </div>
                  <h4 className="font-heading font-bold uppercase text-lg leading-tight group-hover:text-apex-orange transition-colors">{item.name}</h4>
                  <p className="text-zinc-500 font-bold text-sm">{item.price}</p>
                </div>
              ))}
              {/* View All Card */}
              <Link to="/shop" className="w-48 bg-zinc-900 flex flex-col items-center justify-center text-white hover:bg-apex-orange transition-colors group">
                 <span className="font-heading font-bold uppercase text-xl mb-2">View All</span>
                 <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-zinc-100 overflow-hidden border-t border-zinc-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-apex-orange to-transparent opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="font-heading text-5xl font-bold text-black uppercase mb-6">Who is Number One?</h2>
          <p className="text-zinc-600 text-lg mb-8 max-w-2xl mx-auto">
            Track the season standings, analyze form guides, and see who is climbing the ranks in the Motion League.
          </p>
          <Link to="/motion" className="inline-flex items-center bg-black text-white px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-apex-orange transition-colors shadow-md">
            View Standings <Trophy className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;