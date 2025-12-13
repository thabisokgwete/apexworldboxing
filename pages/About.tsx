import React from 'react';
import { Target, Award, Users, Zap } from 'lucide-react';
import ImageUploader from '../components/ImageUploader';

const DIRECTORS = [
  {
    id: 1,
    name: "Thabiso 'Dazille' Kgwete",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=800&auto=format&fit=crop", // Confident black man portrait
    bio: "Founder and executive director of ABE. Performance artist."
  },
  {
    id: 2,
    name: "Victoria Vance",
    role: "Head of Boxing Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // Business woman
    bio: "Renowned matchmaker with an eye for talent. She ensures every fight card delivers maximum violence and skill."
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Director of Broadcast & Media",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop", // Business man
    bio: "The mind behind the cinematic production values and the controversial 'Vulgar' broadcasting division."
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-white border-b border-zinc-100">
        <img 
          src="https://images.unsplash.com/photo-1591117207239-012581f5c68b?q=80&w=1920&auto=format&fit=crop" 
          alt="Empty Boxing Ring" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        
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
        
        {/* About Us Section */}
        <div className="bg-white p-10 md:p-16 border border-zinc-200 shadow-xl mb-24">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-heading text-5xl font-bold text-black uppercase mb-8 leading-tight">
                The Apex of <br/>Global Combat
              </h2>
              <p className="text-zinc-600 mb-6 leading-relaxed text-lg">
                ApexWorld Boxing Entertainment (ABE) was founded on a simple yet brutal premise: the best must fight the best. No protecting records, no ducking opponents, and no politics.
              </p>
              <p className="text-zinc-600 leading-relaxed text-lg">
                From our headquarters in Las Vegas to sold-out arenas in London, Tokyo, and Riyadh, we have established ourselves as the premier destination for professional boxing. We combine old-school grit with cutting-edge technology to bring fans closer to the action than ever before.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
                <Target className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                <div className="font-heading font-bold text-3xl text-black mb-2">1+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-widest">Events Hosted</div>
              </div>
              <div className="bg-zinc-50 p-8 text-center border border-zinc-100 hover:border-apex-orange transition-colors group">
                <Users className="mx-auto text-apex-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
                <div className="font-heading font-bold text-3xl text-black mb-2">10</div>
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
          </div>
        </div>

        {/* Our Attitude / IKANI Section */}
        <div className="mb-24 relative overflow-hidden bg-white p-12 md:p-20 border-t border-zinc-100">
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

        {/* Management Section */}
        <div>
          <div className="flex items-center justify-center mb-16">
            <div className="h-px bg-zinc-200 w-24 mr-8"></div>
            <h2 className="font-heading text-5xl font-bold text-black uppercase tracking-tight text-center">
              Management
            </h2>
            <div className="h-px bg-zinc-200 w-24 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {DIRECTORS.map((director) => (
              <div key={director.id} className="group bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-96 overflow-hidden relative">
                  <ImageUploader 
                    defaultSrc={director.image}
                    storageKey={`director_${director.id}`}
                    alt={director.name}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <div className="p-8 relative bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-apex-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <h3 className="font-heading text-2xl font-bold text-black uppercase mb-2">{director.name}</h3>
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