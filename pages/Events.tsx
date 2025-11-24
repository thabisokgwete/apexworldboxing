import React, { useState } from 'react';
import { EVENTS, FIGHTERS } from '../constants';
import EventCard from '../components/EventCard';
import { Timer, Tv, Calendar, MapPin, Ticket, Info, ChevronRight, CheckCircle2 } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Upcoming' | 'Completed'>('Upcoming');

  const upcomingEvents = EVENTS.filter(e => e.status === 'Upcoming');
  const pastEvents = EVENTS.filter(e => e.status === 'Completed');
  
  const nextBigEvent = upcomingEvents[0];
  const nextEventFighterA = FIGHTERS.find(f => f.id === nextBigEvent.mainEvent.fighterAId);
  const nextEventFighterB = FIGHTERS.find(f => f.id === nextBigEvent.mainEvent.fighterBId);

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Cinematic Hero Section for Next Event */}
      {nextBigEvent && (
        <section className="relative h-[70vh] w-full flex items-center overflow-hidden bg-black text-white">
          {/* Background */}
          <div className="absolute inset-0 z-0">
             <img src="https://picsum.photos/1920/1080?grayscale&contrast=2" alt="Event Bg" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
             
             {/* Text Content */}
             <div className="mb-10 md:mb-0 md:w-1/2">
                <div className="inline-flex items-center bg-apex-orange text-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                   <Timer size={14} className="mr-2" /> Live in 30 Days
                </div>
                <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-none mb-2">
                  {nextBigEvent.title.split(':')[0]}
                </h1>
                <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase text-zinc-500 leading-none mb-6">
                  {nextBigEvent.title.split(':')[1]}
                </h2>
                
                <div className="flex items-center space-x-6 text-sm font-bold uppercase tracking-widest text-zinc-300 mb-8">
                   <span className="flex items-center"><Calendar size={16} className="mr-2 text-apex-orange" /> {nextBigEvent.date}</span>
                   <span className="flex items-center"><MapPin size={16} className="mr-2 text-apex-orange" /> {nextBigEvent.venue}</span>
                </div>

                <div className="flex gap-4">
                   <button className="bg-apex-orange text-white px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                      Buy PPV
                   </button>
                   <button className="border border-white text-white px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                      Fight Card
                   </button>
                </div>
             </div>

             {/* Fighter Faceoff Graphic (Mockup) */}
             <div className="hidden md:flex md:w-1/2 justify-center relative h-96 items-end">
                <img src={nextEventFighterA?.image} alt="Fighter A" className="h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 -mr-10 drop-shadow-2xl mask-image-gradient" />
                <div className="font-heading font-black text-9xl italic text-apex-orange z-20 relative -mb-4 drop-shadow-lg">VS</div>
                <img src={nextEventFighterB?.image} alt="Fighter B" className="h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 z-10 -ml-10 drop-shadow-2xl transform -scale-x-100" />
             </div>
          </div>
        </section>
      )}

      {/* How To Watch Bar */}
      <div className="bg-zinc-900 text-zinc-400 py-4 border-b border-zinc-800">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center mb-2 md:mb-0"><Tv size={16} className="mr-2 text-apex-orange" /> Where to Watch:</span>
            <div className="flex items-center space-x-8">
               <span className="hover:text-white cursor-pointer transition-colors">DAZN Worldwide</span>
               <span className="hover:text-white cursor-pointer transition-colors">ESPN+ (USA)</span>
               <span className="hover:text-white cursor-pointer transition-colors">Sky Sports Box Office (UK)</span>
               <span className="hover:text-white cursor-pointer transition-colors">ABE.TV (Global)</span>
            </div>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Tabs */}
        <div className="flex items-center justify-between mb-10">
           <h2 className="font-heading text-5xl font-bold text-black uppercase tracking-tighter">
              Fight <span className="text-apex-orange">Cards</span>
           </h2>
           <div className="flex space-x-2 bg-zinc-100 p-1 rounded-sm">
              <button 
                onClick={() => setActiveTab('Upcoming')}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${activeTab === 'Upcoming' ? 'bg-black text-white shadow' : 'text-zinc-500 hover:text-black'}`}
              >
                Upcoming
              </button>
              <button 
                onClick={() => setActiveTab('Completed')}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${activeTab === 'Completed' ? 'bg-black text-white shadow' : 'text-zinc-500 hover:text-black'}`}
              >
                Past Results
              </button>
           </div>
        </div>

        {/* Events List */}
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          {(activeTab === 'Upcoming' ? upcomingEvents : pastEvents).map(event => {
              const fighterA = FIGHTERS.find(f => f.id === event.mainEvent.fighterAId);
              const fighterB = FIGHTERS.find(f => f.id === event.mainEvent.fighterBId);
              
              if (activeTab === 'Completed') {
                // Past Event Card Style
                return (
                  <div key={event.id} className="bg-zinc-50 border border-zinc-200 flex flex-col md:flex-row group hover:border-zinc-300 transition-colors">
                      <div className="md:w-1/4 bg-zinc-200 grayscale group-hover:grayscale-0 transition-all duration-500 relative min-h-[200px]">
                         <img src={fighterA?.image} className="absolute inset-0 w-full h-full object-cover opacity-50" />
                         <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <span className="bg-black text-white text-xs font-bold uppercase px-3 py-1">Completed</span>
                         </div>
                      </div>
                      <div className="p-8 md:w-3/4 flex flex-col justify-center">
                         <div className="flex justify-between items-start mb-4">
                            <div>
                               <h3 className="font-heading text-2xl font-bold text-zinc-900 uppercase">{event.title}</h3>
                               <p className="text-zinc-500 text-sm">{event.venue} • {event.date}</p>
                            </div>
                            <div className="text-right">
                               <span className="block font-bold text-green-600 uppercase text-sm">Winner</span>
                               <span className="block font-heading font-bold text-xl uppercase">{fighterA?.name.split('"')[1] || fighterA?.name}</span>
                               <span className="text-xs text-zinc-500">via KO (Round 4)</span>
                            </div>
                         </div>
                         <div className="border-t border-zinc-200 pt-4 mt-2">
                            <p className="text-sm text-zinc-500 mb-2 font-bold uppercase tracking-widest">Main Card Results</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                               {event.undercard.map((fight, idx) => (
                                  <div key={idx} className="flex items-center text-zinc-600">
                                     <CheckCircle2 size={12} className="mr-2 text-zinc-400" /> {fight}
                                  </div>
                               ))}
                            </div>
                         </div>
                      </div>
                  </div>
                );
              }

              // Upcoming Event Card Style
              return (
                <div key={event.id} className="group">
                   <div className="flex flex-col md:flex-row border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                      {/* Date Box */}
                      <div className="bg-black text-white p-6 md:w-32 flex flex-col items-center justify-center text-center flex-shrink-0">
                         <span className="text-4xl font-heading font-bold leading-none">{event.date.split(' ')[1].replace(',','')}</span>
                         <span className="text-sm font-bold uppercase tracking-widest text-apex-orange">{event.date.split(' ')[0]}</span>
                      </div>

                      {/* Main Info */}
                      <div className="p-8 flex-grow border-r border-zinc-100">
                         <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                            <span className="text-apex-orange">{event.status}</span>
                            <span>•</span>
                            <span>{event.venue}</span>
                         </div>
                         <h3 className="font-heading text-3xl font-bold text-black uppercase mb-4 group-hover:text-apex-orange transition-colors">
                           {event.title}
                         </h3>
                         
                         {/* Undercard Preview */}
                         <div className="space-y-2 mb-6">
                            <div className="flex items-center text-sm font-bold text-zinc-900">
                               <span className="w-2 h-2 bg-apex-orange rounded-full mr-3"></span>
                               Main: {fighterA?.name} vs {fighterB?.name}
                            </div>
                            {event.undercard.slice(0,2).map((fight, idx) => (
                               <div key={idx} className="flex items-center text-sm text-zinc-500 ml-5">
                                  {fight}
                               </div>
                            ))}
                            <div className="text-xs text-zinc-400 italic ml-5">+ {event.undercard.length - 2} more prelim fights</div>
                         </div>
                      </div>

                      {/* Action */}
                      <div className="p-8 md:w-64 flex flex-col justify-center bg-zinc-50">
                         <div className="text-2xl font-heading font-bold text-black mb-1">{event.price}</div>
                         <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest mb-4">Pay-Per-View</div>
                         <button className="w-full bg-black text-white py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-apex-orange transition-colors flex items-center justify-center">
                            Get Tickets <Ticket size={16} className="ml-2" />
                         </button>
                         <button className="w-full mt-2 text-black py-2 text-xs font-bold uppercase tracking-widest hover:text-apex-orange transition-colors flex items-center justify-center">
                            Event Details <ChevronRight size={12} className="ml-1" />
                         </button>
                      </div>
                   </div>
                </div>
              );
            })}
            
            {upcomingEvents.length === 0 && activeTab === 'Upcoming' && (
               <div className="text-center py-20 bg-zinc-50 border border-dashed border-zinc-300">
                  <p className="text-zinc-500 font-heading uppercase tracking-widest">No upcoming events scheduled.</p>
               </div>
            )}
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-24 bg-zinc-900 text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
               <h3 className="font-heading text-3xl font-bold uppercase mb-4">Never Miss a Knockout</h3>
               <p className="text-zinc-400 mb-8">Sign up for fight alerts, ticket pre-sales, and exclusive locker room access.</p>
               <div className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-grow bg-white/10 border border-white/20 text-white px-6 py-3 focus:outline-none focus:border-apex-orange" />
                  <button className="bg-apex-orange text-black font-heading font-bold uppercase tracking-widest px-8 py-3 hover:bg-white transition-colors">
                     Subscribe
                  </button>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Events;