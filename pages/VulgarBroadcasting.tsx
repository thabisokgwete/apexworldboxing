import React, { useState } from 'react';
import { Play, Radio, Flame, Mic2, MessageSquare, AlertTriangle, Users, ThumbsUp, Zap } from 'lucide-react';

const FEATURED_STREAM = {
  title: "LIVE: Bad Boy Siba vs. Himothy Sizwe - The Final Confrontation",
  viewerCount: "12K",
  description: "Uncensored and unscripted. The two heavyweights meet face-to-face one last time before they enter the ring. Expect fireworks.",
  tags: ["Live Debate", "Heavyweight", "Explicit"]
};

const RECENT_CLIPS = [
  {
    id: 1,
    title: "Himothy Sizwe pushes Bad Boy Siba! CHAOS ERUPTS at Weigh-In",
    duration: "03:20",
    views: "2.4M",
    category: "Brawl",
    image: "https://picsum.photos/800/450?random=20",
    hot: true
  },
  {
    id: 2,
    title: "Volkova: \"She's a paper champion and she knows it\"",
    duration: "08:15",
    views: "500K",
    category: "Trash Talk",
    image: "https://picsum.photos/800/450?random=21",
    hot: false
  },
  {
    id: 3,
    title: "Mensah Mic Drop Moment - Full Uncut Rant",
    duration: "05:50",
    views: "890K",
    category: "Interview",
    image: "https://picsum.photos/800/450?random=22",
    hot: true
  },
  {
    id: 4,
    title: "The Gloves Off Podcast: Ep. 45 - Leaked Sparring Footage",
    duration: "45:10",
    views: "1.2M",
    category: "Podcast",
    image: "https://picsum.photos/800/450?random=23",
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
      <div className="bg-white pt-20 pb-12 border-b border-zinc-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <h1 className="font-heading font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-4">
              Vulgar <span className="text-apex-orange">Broadcasting</span>
            </h1>
            <p className="text-zinc-500 text-xl max-w-2xl font-light">
              Where the PR team has no power. Raw audio, uncensored opinions, and backstage access that television networks won't touch.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Live Stream Container */}
        <div className="bg-black border border-zinc-800 rounded-sm overflow-hidden mb-16 shadow-2xl relative group">
          <div className="aspect-video bg-zinc-900 relative">
             <img src="https://picsum.photos/1200/675?grayscale&blur=2" alt="Stream Preview" className="w-full h-full object-cover opacity-60" />
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
              <div className="mt-6 md:mt-0 flex gap-4">
                 <button className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                    <MessageSquare size={18} /> <span>Chat</span>
                 </button>
                 <button className="flex items-center space-x-2 text-zinc-400 hover:text-apex-orange transition-colors text-sm font-bold uppercase tracking-widest">
                    <Zap size={18} /> <span>Subscribe</span>
                 </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Clips Column */}
           <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                 <h3 className="font-heading text-3xl font-bold uppercase text-black flex items-center">
                   <Flame className="text-apex-orange mr-3" /> Trending Clips
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
                            {clip.hot && <span className="text-[10px] font-bold uppercase bg-red-100 text-red-600 px-1.5 rounded-sm flex items-center"><Flame size={10} className="mr-1"/> Hot</span>}
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

           {/* Sidebar: Polls & Audio */}
           <div className="space-y-12">
              
              {/* Daily Poll */}
              <div className="bg-zinc-50 p-8 border border-zinc-200">
                 <div className="flex items-center gap-2 mb-6">
                    <Mic2 size={20} className="text-apex-orange" />
                    <h3 className="font-heading text-xl font-bold uppercase">The People's Voice</h3>
                 </div>
                 <p className="font-bold text-lg mb-6 leading-tight">Who wins the trash talk battle: Siba or Sizwe?</p>
                 
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

              {/* Audio Only Section */}
              <div className="bg-black text-white p-8 relative overflow-hidden group cursor-pointer">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2 text-apex-orange">
                       <Radio size={20} />
                       <span className="text-xs font-bold uppercase tracking-widest">Audio Only</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold uppercase mb-1">Apex Radio 24/7</h3>
                    <p className="text-zinc-500 text-sm mb-6">Classic fights, commentary & lo-fi beats.</p>
                    <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-sm">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center">
                             <div className="flex gap-0.5 items-end h-4">
                                <div className="w-1 bg-apex-orange h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
                                <div className="w-1 bg-apex-orange h-4 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                                <div className="w-1 bg-apex-orange h-3 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
                             </div>
                          </div>
                          <div>
                             <div className="text-xs font-bold uppercase text-zinc-400">Now Playing</div>
                             <div className="text-sm font-bold">Rumble in the Jungle (1974)</div>
                          </div>
                       </div>
                       <Play size={20} className="fill-white" />
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  );
};

export default VulgarBroadcasting;
