import React from 'react';
import { Fighter } from '../types';
import { Trophy, Ruler, Scale } from 'lucide-react';

interface FighterCardProps {
  fighter: Fighter;
  compact?: boolean;
  onClick?: () => void;
}

const FighterCard: React.FC<FighterCardProps> = ({ fighter, compact = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative bg-white border border-zinc-200 overflow-hidden rounded-sm cursor-pointer transition-all duration-300 hover:border-apex-orange hover:-translate-y-1 hover:shadow-xl flex flex-col ${compact ? 'h-64' : 'h-[450px]'}`}
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0 bg-zinc-100">
        <img 
          src={fighter.image} 
          alt={fighter.name}
          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto p-6">
        {/* Weight Class Badge */}
        <div className="mb-2 inline-block px-2 py-0.5 bg-apex-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
          {fighter.weightClass}
        </div>
        
        <h3 className={`font-heading font-bold text-white uppercase leading-none drop-shadow-md ${compact ? 'text-xl' : 'text-3xl mb-1'}`}>
          {fighter.name}
        </h3>
        <p className="text-zinc-200 font-heading uppercase tracking-wide text-sm mb-4 drop-shadow-sm">
          "{fighter.nickname}"
        </p>

        {!compact && (
          <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4">
            <div className="text-center">
              <div className="flex items-center justify-center text-zinc-300 mb-1">
                <Trophy size={14} />
              </div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Record</p>
              <p className="font-bold text-white">{fighter.record}</p>
            </div>
            <div className="text-center border-l border-white/20">
              <div className="flex items-center justify-center text-zinc-300 mb-1">
                <Ruler size={14} />
              </div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Height</p>
              <p className="font-bold text-white">{fighter.height}</p>
            </div>
            <div className="text-center border-l border-white/20">
              <div className="flex items-center justify-center text-zinc-300 mb-1">
                <Scale size={14} />
              </div>
              <p className="text-xs text-zinc-400 uppercase tracking-wider">Reach</p>
              <p className="font-bold text-white">{fighter.reach}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FighterCard;