import React from 'react';
import { Event, Fighter } from '../types';
import { Calendar, MapPin, Ticket } from 'lucide-react';

interface EventCardProps {
  event: Event;
  fighterA?: Fighter;
  fighterB?: Fighter;
  featured?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, fighterA, fighterB, featured = false }) => {
  return (
    <div className={`relative bg-white border border-zinc-200 rounded-sm overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow ${featured ? 'md:flex-row md:h-96' : ''}`}>
      {/* Event Info Side (or Bottom for non-featured) */}
      <div className={`p-6 md:p-8 flex flex-col justify-between z-10 relative bg-white ${featured ? 'md:w-1/3 order-2 md:order-1' : 'order-2'}`}>
        <div>
          <div className="flex items-center space-x-2 text-apex-orange mb-4">
            <span className="flex items-center text-xs font-bold uppercase tracking-widest">
              <Calendar size={14} className="mr-1" /> {event.date}
            </span>
            <span className="text-zinc-300">|</span>
            <span className="flex items-center text-xs font-bold uppercase tracking-widest text-zinc-500">
              <MapPin size={14} className="mr-1" /> {event.venue}
            </span>
          </div>
          
          <h3 className={`font-heading font-bold uppercase leading-tight mb-4 text-black ${featured ? 'text-4xl' : 'text-2xl'}`}>
            {event.title}
          </h3>

          {featured && (
            <div className="space-y-2 mb-6">
              {event.undercard.map((fight, idx) => (
                <div key={idx} className="text-sm text-zinc-600 border-l-2 border-zinc-200 pl-3">
                  {fight}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-auto">
           <div className="text-2xl font-heading font-bold text-zinc-900 mb-4">{event.price} <span className="text-sm text-zinc-500 font-sans font-normal">PPV</span></div>
           <button className="w-full flex items-center justify-center bg-black text-white hover:bg-zinc-800 font-heading font-bold uppercase tracking-widest py-3 text-sm transition-colors">
             <Ticket size={16} className="mr-2" /> Buy Now
           </button>
        </div>
      </div>

      {/* Visual Side */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/3 order-1 md:order-2 h-64 md:h-full' : 'h-48 order-1'}`}>
         {/* Split Image Background */}
         <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full relative">
               {fighterA && <img src={fighterA.image} className="absolute inset-0 w-full h-full object-cover object-top" alt="Fighter A" />}
               <div className="absolute inset-0 bg-apex-red/10 mix-blend-multiply"></div>
            </div>
            <div className="w-1/2 h-full relative">
               {fighterB && <img src={fighterB.image} className="absolute inset-0 w-full h-full object-cover object-top" alt="Fighter B" />}
               <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply"></div>
            </div>
         </div>
         
         {/* VS Badge */}
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white border-2 border-black rotate-45 flex items-center justify-center shadow-xl z-20">
               <span className="-rotate-45 font-heading font-bold text-xl text-black">VS</span>
            </div>
         </div>

         {/* Gradient Overlay */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>
    </div>
  );
};

export default EventCard;