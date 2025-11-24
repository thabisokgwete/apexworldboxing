import React, { useState } from 'react';
import { FIGHTERS } from '../constants';
import FighterCard from '../components/FighterCard';
import { Search } from 'lucide-react';

const Roster: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFighters = FIGHTERS.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.nickname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.weightClass.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-12 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-black uppercase tracking-tighter mb-2">
              The Roster
            </h1>
            <p className="text-zinc-500 max-w-xl">
              Meet the gladiators of ApexWorld. From heavyweight champions to lightning-fast bantamweights.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Find a fighter..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-50 border border-zinc-200 text-black px-4 py-3 pl-10 focus:outline-none focus:border-apex-orange transition-colors font-sans rounded-sm shadow-inner"
            />
            <Search className="absolute left-3 top-3.5 text-zinc-400" size={18} />
          </div>
        </div>

        {/* Grid */}
        {filteredFighters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFighters.map(fighter => (
              <FighterCard key={fighter.id} fighter={fighter} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-zinc-300 rounded-sm bg-zinc-50">
            <p className="text-zinc-500 font-heading uppercase tracking-widest">No fighters found matching criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Roster;