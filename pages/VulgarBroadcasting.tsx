import React, { useState } from 'react';
import { Play, Radio, Flame, Mic2, MessageSquare, AlertTriangle, Clock, ThumbsUp, ThumbsDown, Zap } from 'lucide-react';

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
      <div className="bg-black text-white text-xs uppercase font-bold tracking-widest py-3 px-4 text-center flex flex-wrap items-center justify-center gap-2 border-b border-zinc-800">
        <AlertTriangle size={14} className="text-apex-orange flex-shrink-0" />
        <span>Viewer Discretion Advised: Contains Strong Language & Intense Scenes</span>
      </div>

      {/* Brand Header */}
      <div className="bg-white pt-16 pb-10 border-b border-zinc-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
            <h1 className="font-heading font-black text-6xl md:text-9xl text-apex-orange uppercase tracking-tighter leading-none mb-2">
              VULGAR BROADCAST
            </h1>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter leading-none">
              Uncensored & Unscripted
            </h2>
        </div>
      </div>

      {/* Hero / Live Player */}
      <div className="relative w-full bg-zinc-100 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-video w-full relative bg-black group cursor-pointer overflow-hidden">
             <img src="https://picsum.photos/1920/1080?random=50" alt="Live Stream" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
             
             {/* Play Overlay */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-apex-orange/90 rounded-full flex items-center justify-center pl-2 shadow-[0_0_40px_rgba(249,115,22,0.6)] transform group-hover:scale-110 transition-transform duration-300">
                   <Play size={40} className="text-white fill-white" />
                </div>
             </div>

             {/* Live Badge */}
             <div className="absolute top-6 left-6 flex items-center space-x-3">
                <span className="bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-sm animate-pulse">
                  Live Now
                </span>
                <span className="bg-black/80 backdrop-blur-sm text-white text-xs font-bold uppercase px-3 py-1 rounded-sm flex items-center">
                  <Radio size={12} className="mr-2" /> {FEATURED_STREAM.viewerCount} Watching
                </span>
             </div>

             {/* Content Info */}
             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 md:p-10">
                <div className="flex items-center space-x-2 mb-2">
                  {FEATURED_STREAM.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-white border border-white/30 px-2 py-0.5 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-heading text-3xl md:text-5xl font-bold text-white uppercase leading-none mb-2">
                  {FEATURED_STREAM.title}
                </h1>
                <p className="text-gray-300 max-w-2xl text-sm md:text-base line-clamp-2">
                  {FEATURED_STREAM.description}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Feud Feed & Fan Verdict Section */}
      <div className="bg-zinc-900 text-white py-16 border-b border-black">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
               
               {/* Feud Feed */}
               <div className="lg:col-span-2">
                  <div className="flex items-center mb-8">
                     <Flame className="text-apex-orange mr-4" size={40} />
                     <h2 className="font-heading text-5xl font-bold uppercase tracking-tight">Feud Feed: <span className="text-apex-orange">Bad Boy Siba vs. Himothy Sizwe</span></h2>
                  </div>
                  
                  <div className="relative border-l-2 border-zinc-700 ml-4 space-y-12">
                     {/* Timeline Item 1 */}
                     <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-red-600 rounded-full border-2 border-zinc-900"></div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 block">Yesterday</span>
                        <h3 className="font-heading text-xl font-bold text-white uppercase mb-2">The Weigh-In Push</h3>
                        <p className="text-zinc-400 text-sm mb-3">Himothy Sizwe shoves Bad Boy Siba during the face-off. Security intervenes immediately. Fines expected.</p>
                        <div className="bg-black border border-zinc-800 p-2 inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-apex-orange cursor-pointer">
                           <Play size={12} className="mr-2" /> Watch Clip
                        </div>
                     </div>

                     {/* Timeline Item 2 */}
                     <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-apex-orange rounded-full border-2 border-zinc-900"></div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 block">2 Days Ago</span>
                        <h3 className="font-heading text-xl font-bold text-white uppercase mb-2">Twitter War</h3>
                        <p className="text-zinc-400 text-sm mb-3">Bad Boy Siba posts DMs from 2023 showing Himothy Sizwe asking for sparring advice. Himothy Sizwe calls them fake.</p>
                     </div>

                     {/* Timeline Item 3 */}
                     <div className="relative pl-8">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-500 rounded-full border-2 border-zinc-900"></div>
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1 block">Last Month</span>
                        <h3 className="font-heading text-xl font-bold text-white uppercase mb-2">The Callout</h3>
                        <p className="text-zinc-400 text-sm">Himothy Sizwe interrupts Bad Boy Siba's post-fight interview to demand the title shot.</p>
                     </div>
                  </div>
               </div>

               {/* Fan Verdict (Poll) */}
               <div className="lg:col-span-1 bg-black border border-zinc-800 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-zinc-800 opacity-20">
                     <Zap size={120} />
                  </div>
                  <div className="relative z-10">
                     <h3 className="font-heading text-2xl font-bold text-apex-orange uppercase mb-2">Fan Verdict</h3>
                     <p className="text-zinc-400 text-sm mb-6 font-bold uppercase tracking-widest">Who is winning the psychological warfare?</p>
                     
                     {!pollVoted ? (
                        <div className="space-y-4">
                           <button 
                              onClick={() => setPollVoted('sterling')}
                              className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-700 p-4 hover:bg-zinc-800 hover:border-white transition-all group"
                           >
                              <span className="font-heading font-bold text-white uppercase">Bad Boy Siba</span>
                              <ThumbsUp size={18} className="text-zinc-500 group-hover:text-apex-orange" />
                           </button>
                           <button 
                              onClick={() => setPollVoted('rivera')}
                              className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-700 p-4 hover:bg-zinc-800 hover:border-white transition-all group"
                           >
                              <span className="font-heading font-bold text-white uppercase">Himothy Sizwe</span>
                              <ThumbsDown size={18} className="text-zinc-500 group-hover:text-red-600" />
                           </button>
                        </div>
                     ) : (
                        <div className="animate-in fade-in duration-500">
                           <div className="mb-4">
                              <div className="flex justify-between text-xs font-bold uppercase text-zinc-400 mb-1">
                                 <span>Bad Boy Siba</span>
                                 <span>42%</span>
                              </div>
                              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                 <div className="bg-apex-orange h-full w-[42%]"></div>
                              </div>
                           </div>
                           <div className="mb-6">
                              <div className="flex justify-between text-xs font-bold uppercase text-zinc-400 mb-1">
                                 <span>Himothy Sizwe</span>
                                 <span>58%</span>
                              </div>
                              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                 <div className="bg-red-600 h-full w-[58%]"></div>
                              </div>
                           </div>
                           <p className="text-center text-xs text-zinc-500 font-bold uppercase tracking-widest">Thanks for voting</p>
                        </div>
                     )}
                  </div>
               </div>

            </div>
         </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-zinc-200 pb-4">
           <div>
             <h2 className="flex items-center font-heading text-4xl font-bold text-black uppercase tracking-tighter">
               <Mic2 className="mr-3 text-apex-orange" size={32} /> 
               Vulgar <span className="text-zinc-400 ml-2">Shows</span>
             </h2>
             <p className="text-zinc-500 text-sm mt-1">Pre-fight debates, press conference chaos, and unfiltered trash talk.</p>
           </div>
           <div className="flex space-x-4 mt-4 md:mt-0">
             <button className="text-sm font-bold uppercase tracking-widest text-apex-orange border-b-2 border-apex-orange pb-1">Trending</button>
             <button className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors pb-1">Most Viewed</button>
             <button className="text-sm font-bold uppercase tracking-widest text-zinc-500 hover:text-black transition-colors pb-1">Recent</button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {RECENT_CLIPS.map(clip => (
             <div key={clip.id} className="group bg-white border border-zinc-200 hover:border-apex-orange transition-all duration-300 flex flex-col shadow-sm hover:shadow-md">
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                   <img src={clip.image} alt={clip.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                   
                   {/* Duration Badge */}
                   <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white rounded-sm">
                     {clip.duration}
                   </div>
                   
                   {/* Hot Badge */}
                   {clip.hot && (
                     <div className="absolute top-2 left-2 bg-apex-orange text-white px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm flex items-center">
                       <Flame size={10} className="mr-1" /> Hot
                     </div>
                   )}

                   {/* Play Icon Hover */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg">
                        <Play size={20} className="text-apex-orange fill-apex-orange" />
                      </div>
                   </div>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                   <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{clip.category}</span>
                      <span className="text-[10px] font-bold uppercase text-zinc-400 flex items-center">
                        <Clock size={10} className="mr-1" /> 2h ago
                      </span>
                   </div>
                   <h3 className="font-heading font-bold text-lg text-zinc-900 uppercase leading-tight mb-2 line-clamp-2 group-hover:text-apex-orange transition-colors">
                     {clip.title}
                   </h3>
                   <div className="mt-auto flex items-center text-xs text-zinc-500">
                      <span className="flex items-center">
                         124 comments
                      </span>
                      <span className="mx-2">•</span>
                      <span>{clip.views} views</span>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Show Schedule */}
        <div className="mt-20">
           <div className="flex items-center mb-8">
              <MessageSquare className="text-apex-orange mr-3" size={28} />
              <h2 className="font-heading text-3xl font-bold text-black uppercase tracking-tight">
                Upcoming Shows
              </h2>
           </div>
           
           <div className="bg-white border border-zinc-200 divide-y divide-zinc-100 shadow-sm">
              {[
                { time: "Tonight 8:00 PM", title: "The Weigh-In Live", host: "Mike 'The Mouth' Mercer", guest: "Marcus Sterling" },
                { time: "Tomorrow 6:00 PM", title: "Debate Club: Heavyweight History", host: "Sarah Lane", guest: "Panel" },
                { time: "Fri 9:00 PM", title: "Uncensored: Post-Fight Presser", host: "ABE Official", guest: "All Winners" }
              ].map((show, idx) => (
                <div key={idx} className="p-6 flex flex-col md:flex-row items-center md:justify-between hover:bg-zinc-50 transition-colors group cursor-pointer">
                   <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                      <div className="w-20 text-sm font-bold text-apex-orange uppercase tracking-widest flex-shrink-0">
                        {show.time}
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-bold text-zinc-900 uppercase group-hover:text-apex-orange transition-colors">{show.title}</h4>
                        <p className="text-sm text-zinc-500">Host: {show.host} <span className="mx-1">|</span> Featuring: {show.guest}</p>
                      </div>
                   </div>
                   <button className="px-6 py-2 border border-zinc-300 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:border-black group-hover:text-black transition-all rounded-sm">
                     Set Reminder
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default VulgarBroadcasting;