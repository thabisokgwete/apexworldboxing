
import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';

const DIRECTORS = [
  {
    id: 1,
    name: "Thabiso 'Dazille' Kgwete",
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
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white border-b border-zinc-100">
        <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
          <h1 className="font-sans font-black text-6xl md:text-8xl text-black uppercase tracking-tighter mb-8 leading-none">
            We Are ABE<span className="text-apex-orange">.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-600 font-light max-w-3xl mx-auto">
            A world of apex performers, personalities, and competitors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* Mission Statement (Text Only) */}
        <div className="bg-white p-10 md:p-16 border border-zinc-200 shadow-xl mb-12">
          <div className="w-full">
            <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
              ApexWorld Boxing Entertainment is built on the belief that boxing is fundamentally a human confrontation before it is a sporting contest. At ABE, fighters are presented as complete individuals, driven by ambition, pride, insecurity, and the pressure to prove themselves under public scrutiny. We Feed the Feud by giving fighters a platform to speak their truth, defend their position, and fight, verbally and physically, for pride, reputation, and legacy.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Every bout is framed as a human drama, every rivalry as a living narrative, and every fighter as more than a record. We do not sell fights in isolation; we build feuds, expose underlying motivations, and elevate conflict into spectacle. We develop protagonists and antagonists, highlight egos without shame, and allow authenticity to drive engagement. In contrast to promoters who ignore personalities and manage conflict cautiously, ABE amplifies it with structure and purpose, transforming competition into something visceral, engaging, and impossible to ignore. This is who we are.
            </p>
          </div>
        </div>

        {/* Our Attitude / IKANI Section */}
        <div className="mb-12 relative overflow-hidden bg-white p-12 md:p-20 border border-zinc-200 shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-apex-orange/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <h2 className="font-heading text-6xl md:text-8xl font-bold uppercase mb-20 tracking-tighter text-black">
              Our <span className="text-apex-orange">Attitude</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The compulsion to resist, persist, and impose.
                </p>
              </div>
              
              <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The will to fight, compete, and win.
                </p>
              </div>
              
              <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The disposition to defy, dare, and dominate.
                </p>
              </div>
              
               <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The refusal to settle, submit, or concede.
                </p>
              </div>

              <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The impulse for chaos, madness, and intensity.
                </p>
              </div>

              <div className="bg-white border-2 border-apex-orange p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[220px] md:col-span-2">
                <p className="font-heading text-2xl font-bold uppercase leading-tight text-black">
                  The courage to lead through failure, pressure, and doubt.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
            <Target className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <div className="font-heading font-bold text-3xl text-black mb-2">1+</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest">Events Hosted</div>
          </div>
          <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
            <Users className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <div className="font-heading font-bold text-3xl text-black mb-2">5</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest">Fighters Signed</div>
          </div>
          <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
            <Award className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <div className="font-heading font-bold text-3xl text-black mb-2">2</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest">League Titles</div>
          </div>
          <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
            <Zap className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <div className="font-heading font-bold text-3xl text-black mb-2">4K</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest">Production</div>
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
                <div className="h-96 overflow-hidden relative">
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
