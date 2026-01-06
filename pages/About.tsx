import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';

const DIRECTORS = [
  {
    id: 1,
    name: "Thabiso Tharagi Kgwete",
    role: "Chief Executive Officer",
    image: "", // Image removed
    bio: "Founder and Executive Director of ABE. Corporate Finance Strategist. Visionary. Fighter. Performance Artist."
  },
  {
    id: 2,
    name: "",
    role: "Head of Boxing Operations",
    image: "", // Image removed
    bio: "Renowned matchmaker with an eye for talent. She ensures every fight card delivers maximum violence and skill."
  },
  {
    id: 3,
    name: "",
    role: "Head of Broadcast and Media",
    image: "", // Image removed
    bio: "The mind behind the cinematic production values and the controversial 'Vulgar' broadcasting division."
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-white border-b border-zinc-100">
        <div className="relative z-10 text-center max-w-4xl px-4 mt-0 md:mt-20">
          <h1 className="font-sans font-black text-6xl md:text-8xl text-black uppercase tracking-tighter mb-8 leading-none">
            We Are ABE<span className="text-apex-orange">.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-light max-w-3xl mx-auto">
            A world of apex performers, personalities, and competitors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-20 relative z-20">
        
        {/* Mission Statement (Text Only) */}
        <div className="bg-white p-10 md:p-16 border border-zinc-200 shadow-xl mb-12">
          <div className="w-full">
            <h2 className="font-heading text-4xl font-bold uppercase text-black mb-6">World of Fighters</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
              ABE is a boxing promotions company that treats every bout as a live spectacle rather than a simple sporting contest. We regard boxing as theatre: a stage where fighters are not just athletes, but characters with ambition, ego, fear, pride, and something to prove. Every fight is framed as a narrative of tension and consequence, where preparation, personality, and pressure collide under the lights. We do not sanitize conflict; we present it honestly, allowing the raw drama of competition to unfold in front of a watching world.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Through ABE, fighters are elevated into protagonists of their own stories, and audiences are drawn into a world of anticipation, rivalry, triumph, and loss. We design events, content, and experiences that amplify stakes, expose human edge, and celebrate the courage it takes to step forward and be judged in public combat. In the Theatre of Fighters, victory is memorable, defeat is defining, and every appearance leaves a mark on the story being written.
            </p>
          </div>
        </div>

        {/* Management Section */}
        <div>
          <div className="flex items-center justify-center mb-16">
            <div className="h-px bg-zinc-200 w-24 mr-8"></div>
            <h2 className="font-heading text-5xl font-bold text-black uppercase tracking-tight text-center">
              Leadership
            </h2>
            <div className="h-px bg-zinc-200 w-24 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DIRECTORS.map((director) => (
              <div key={director.id} className="group bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-72 overflow-hidden relative bg-zinc-50">
                  <img 
                    src={director.image} 
                    alt={director.name || director.role} 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 relative bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-apex-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <h3 className="font-heading text-2xl font-bold text-black uppercase mb-2 min-h-[32px]">{director.name}</h3>
                  <p className="text-apex-orange text-sm font-bold uppercase tracking-widest mb-6">{director.role}</p>
                  <p className="text-zinc-600 text-base leading-relaxed">
                    {director.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;