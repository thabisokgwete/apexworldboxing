
import React, { useState } from 'react';
import { Play, Radio, Flame, Mic2, MessageSquare, AlertTriangle, Users, ThumbsUp, Zap, Clock, Twitter, Camera } from 'lucide-react';

const FEATURED_STREAM = {
  title: "LIVE: Bad Boy Siba vs. Himothy Sizwe - The Final Confrontation",
  viewerCount: "12K",
  description: "Uncensored and unscripted. The two heavyweights meet face-to-face one last time before they enter the ring. Expect fireworks.",
  tags: ["Live Debate", "Heavyweight", "Explicit"]
};

const FEUD_TIMELINE = [
  {
    date: "YESTERDAY",
    type: "Weigh-In",
    icon: Camera,
    title: "THE WEIGH-IN PUSH",
    description: "Himothy Sizwe shoves Bad Boy Siba during the face-off. Security intervenes immediately. Fines expected.",
    hasClip: true
  },
  {
    date: "2 DAYS AGO",
    type: "Social Media",
    icon: Twitter,
    title: "TWITTER WAR",
    description: "Bad Boy Siba posts DMs from 2023 showing Himothy Sizwe asking for sparring advice. Himothy Sizwe calls them fake.",
    hasClip: false
  },
  {
    date: "1 WEEK AGO",
    type: "Event",
    icon: Mic2,
    title: "THE PERSONAL INSULT",
    description: "Sizwe brings up Siba's former trainer. The mood shifts from competitive to personal instantly.",
    hasClip: false
  }
];

const RECENT_CLIPS = [
  {
    id: 1,
    title: "Himothy Sizwe pushes Bad Boy Siba! CHAOS ERUPTS at Weigh-In",
    duration: "03:20",
    views: "2.4M",
    category: "Brawl",
    image: "", // Image removed
    hot: true
  },
  {
    id: 2,
    title: "King T: \"He's a paper champion and he knows it\"",
    duration: "08:15",
    views: "500K",
    category: "Trash Talk",
    image: "", // Image removed
    hot: false
  },
  {
    id: 3,
    title: "Magic Kelly Mic Drop Moment - Full Uncut Rant",
    duration: "05:50",
    views: "890K",
    category: "Interview",
    image: "", // Image removed
    hot: true
  },
  {
    id: 4,
    title: "The Gloves Off Podcast: Ep. 45 - Leaked Sparring Footage",
    duration: "45:10",
    views: "1.2M",
    category: "Podcast",
    image: "", // Image removed
    hot: false
  }
];

const VulgarBroadcasting: React.FC = () => {
  const [pollVoted, setPollVoted] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Warning Banner */}
      <div className="bg-black text-white text-sm uppercase font-bold tracking-widest py-4 px-6 text-center flex flex-wrap items-center justify-center gap-2 border-b border-zinc-800">
        <AlertTriangle size={16} className="text-apex-orange flex-shrink-0" />
        <span>Viewer Discretion Advised: Contains Strong Language & Intense Scenes</span>
      </div>

      {/* Brand Header */}
      <div className="bg-black pt-20 pb-12 border-b border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <h1 className="font-heading font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-2 text-apex-orange">
              Vulgar Broadcast
            </h1>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-zinc-400 uppercase tracking-widest mb-6">
              FEED THE FEUD
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl font-light">
              The most uncensored and unscripted boxing feud content in South Africa. Speak your truth, defend your position, and unapologetically fight for your pride.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Live Stream Container */}
        <div className="bg-black border border-zinc-800 rounded-sm overflow-hidden mb-12 shadow-2xl relative group">
          <div className="aspect-video bg-zinc-900 relative">
             <img src="" alt="Stream Preview" className="w-full h-full object-cover opacity-60" />
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-apex-orange text-black rounded-full p-6 hover:scale-110 transition-transform shadow-[0_0_30px_rgba(234,179,8,0.5)]">
                   <Play size={40} className="fill-black" />
                </button>
             </div>
             <div className="absolute top-6 left-6 flex gap-3">
               <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest animate-pulse flex items-center">
                 <Radio size={12} className="mr-2" /> Live
               </span>
               <span className="bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center">
                 <Users size={12} className="mr-2" /> {FEATURED_STREAM.viewerCount}
               </span>
             </div>
          </div>
          <div className="p-8 bg-zinc-900 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                 <div className="flex gap-2 mb-3">
                   {FEATURED_STREAM.tags.map(tag => (
                     <span key={tag} className="text-xs font-bold uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-1">{tag}</span>
                   ))}
                 </div>
                 <h2 className="font-heading text-3xl font-bold uppercase italic text-white mb-2">{FEATURED_STREAM.title}</h2>
                 <p className="text-zinc-400 max-w-3xl">{FEATURED_STREAM.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FEUD FEED - MOVED ABOVE CLIPS */}
        <div className="bg-zinc-950 border border-zinc-800 p-8 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-apex-orange/5 rounded-full blur-3xl"></div>
            
            <h2 className="relative z-10 font-heading font-black text-4xl md:text-5xl uppercase leading-none text-white mb-8">
                Feud Feed: <span className="text-apex-orange">Bad <br className="hidden md:block" />Boy Siba vs. Himothy Sizwe</span>
            </h2>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-8">
                {FEUD_TIMELINE.map((event, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-zinc-800">
                        <div className={`absolute -left-[3.5px] top-1.5 w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-red-600 animate-pulse' : 'bg-apex-orange'}`}></div>
                        <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${idx === 0 ? 'text-white' : 'text-zinc-500'}`}>{event.date}</div>
                        <h3 className="font-heading text-xl font-bold text-white uppercase mb-2 leading-tight">{event.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                        {event.description}
                        </p>
                        {event.hasClip && (
                        <button className="bg-black border border-zinc-700 text-white text-[10px] font-bold uppercase px-3 py-2 hover:bg-white hover:text-black hover:border-white transition-colors flex items-center">
                            <Play size={10} className="mr-2" /> Watch Clip
                        </button>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Clips Column (Left) */}
           <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-heading text-3xl font-bold uppercase text-black flex items-center">
                   <Flame className="text-apex-orange mr-3" /> Vulgar Shows
                 </h3>
                 <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs font-bold uppercase bg-black text-white">Hot</button>
                    <button className="px-3 py-1 text-xs font-bold uppercase bg-zinc-100 text-zinc-500 hover:text-black">New</button>
                 </div>
              </div>

              <div className="space-y-6">
                 {RECENT_CLIPS.map((clip) => (
                   <div key={clip.id} className="flex flex-col sm:flex-row gap-6 group cursor-pointer border-b border-zinc-100 pb-6 last:border-0">
                      <div className="sm:w-64 aspect-video relative overflow-hidden bg-zinc-100 flex-shrink-0">
                         <img src={clip.image} alt={clip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                         <div className="absolute bottom-2 right-2 bg-black text-white text-[10px] font-bold px-1.5 py-0.5">
                            {clip.duration}
                         </div>
                      </div>
                      <div className="flex flex-col justify-center">
                         <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-bold uppercase text-apex-orange">{clip.category}</span>
                            <span className="text-xs text-zinc-400 uppercase">• {clip.views} Views</span>
                         </div>
                         <h4 className="font-heading text-xl font-bold uppercase text-black leading-tight group-hover:text-apex-orange transition-colors mb-2">
                            {clip.title}
                         </h4>
                         <div className="flex items-center text-zinc-400 hover:text-black transition-colors">
                            <Play size={14} className="mr-1 fill-current" /> <span className="text-xs font-bold uppercase tracking-wider">Watch Now</span>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
              
              <button className="w-full mt-8 py-4 border border-zinc-200 font-heading font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors">
                 Load More Clips
              </button>
           </div>

           {/* Sidebar: Polls (Right) */}
           <div className="space-y-12">
              
              {/* Daily Poll */}
              <div className="bg-zinc-50 p-8 border border-zinc-200 sticky top-24">
                 <div className="flex items-center gap-2 mb-6">
                    <Mic2 size={20} className="text-apex-orange" />
                    <h3 className="font-heading text-xl font-bold uppercase">Fan Verdict</h3>
                 </div>
                 <p className="font-bold text-lg mb-6 leading-tight">Who is winning the psychological warfare?</p>
                 
                 {!pollVoted ? (
                    <div className="space-y-3">
                       <button onClick={() => setPollVoted('siba')} className="w-full flex justify-between items-center p-4 bg-white border border-zinc-200 hover:border-black transition-colors font-bold uppercase text-sm">
                          <span>Bad Boy Siba</span>
                          <ThumbsUp size={16} />
                       </button>
                       <button onClick={() => setPollVoted('sizwe')} className="w-full flex justify-between items-center p-4 bg-white border border-zinc-200 hover:border-black transition-colors font-bold uppercase text-sm">
                          <span>Himothy Sizwe</span>
                          <ThumbsUp size={16} />
                       </button>
                    </div>
                 ) : (
                    <div className="space-y-4 animate-in fade-in">
                       <div>
                          <div className="flex justify-between text-xs font-bold uppercase mb-1">
                             <span>Siba</span>
                             <span>42%</span>
                          </div>
                          <div className="w-full bg-zinc-200 h-2">
                             <div className="bg-black h-2" style={{width: '42%'}}></div>
                          </div>
                       </div>
                       <div>
                          <div className="flex justify-between text-xs font-bold uppercase mb-1">
                             <span>Sizwe</span>
                             <span>58%</span>
                          </div>
                          <div className="w-full bg-zinc-200 h-2">
                             <div className="bg-apex-orange h-2" style={{width: '58%'}}></div>
                          </div>
                       </div>
                       <p className="text-xs text-center text-zinc-500 mt-4 italic">Thanks for voting. 15,402 votes total.</p>
                    </div>
                 )}
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default VulgarBroadcasting;
