
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FIGHTERS } from '../constants';
import FighterCard from '../components/FighterCard';
import { 
  Trophy, TrendingUp, TrendingDown, Minus, Shield, Medal, ArrowRight, Users, 
  Search, LayoutList, UserPlus, ClipboardCheck, Phone, Mail, User, Activity 
} from 'lucide-react';

// Enhanced mock data for league display
const LEAGUE_DATA = FIGHTERS.map((f, index) => {
  const points = 2500 - (index * 150) - Math.floor(Math.random() * 50);
  let movement: 'up' | 'down' | 'same' = 'same';
  if (index === 1) movement = 'up';
  if (index === 3) movement = 'down';

  // Generate random form L/W
  const forms = ['W', 'W', 'L', 'W', 'KO', 'TKO', 'D'];
  const fighterForm = Array(5).fill(0).map(() => forms[Math.floor(Math.random() * forms.length)]);

  return {
    ...f,
    weightClass: 'Lightweight',
    rank: index + 1,
    points,
    movement,
    matches: 20 + index,
    wins: 18 + index - 2,
    losses: 2,
    draws: 0,
    form: fighterForm,
    status: index === 0 ? 'Champion' : 'Active',
    nextFight: index < 4 ? 'In Negotiation' : 'TBA'
  };
}).sort((a, b) => a.rank - b.rank);

// Local roster with overwritten weight class for consistency on this page
const LOCAL_ROSTER = FIGHTERS.map(f => ({ ...f, weightClass: 'Lightweight' }));

const MotionLeague: React.FC = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'standings' | 'roster' | 'register'>('standings');
  const [activeTab, setActiveTab] = useState<'Overall' | 'Lightweight'>('Overall');
  const [rosterSearchTerm, setRosterSearchTerm] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  useEffect(() => {
    if (location.state?.openRegistration) {
      setViewMode('register');
    }
  }, [location]);

  const filteredLeagueData = activeTab === 'Overall' 
    ? LEAGUE_DATA 
    : LEAGUE_DATA.filter(f => f.weightClass === activeTab);

  const filteredRoster = LOCAL_ROSTER.filter(f => 
    f.name.toLowerCase().includes(rosterSearchTerm.toLowerCase()) || 
    f.nickname.toLowerCase().includes(rosterSearchTerm.toLowerCase()) ||
    f.weightClass.toLowerCase().includes(rosterSearchTerm.toLowerCase())
  );

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setRegisterSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      
      {/* Hero Header Section */}
      <div className="relative bg-black text-white py-24 overflow-hidden border-b border-zinc-200">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-zinc-800 rounded-sm border border-zinc-700">
              <Trophy className="text-apex-orange" size={32} />
            </div>
            <span className="font-black uppercase tracking-widest text-xl text-apex-orange">2026/27 League Season</span>
          </div>
          
          <h1 className="font-heading font-black text-7xl md:text-9xl uppercase tracking-tighter leading-none mb-6 text-white">
            Motion <span className="text-apex-orange">League</span>
          </h1>
          
          <p className="text-zinc-400 text-xl md:text-2xl max-w-3xl font-light leading-relaxed">
            The Official boxing league of ABE. Follow your favourite fighters. Track live standings, analyze fighter form, and follow the rise of the next champion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {/* View Toggle */}
        <div className="flex flex-wrap gap-1 bg-zinc-100 p-1 rounded-sm mb-8 w-fit">
          <button
            onClick={() => setViewMode('standings')}
            className={`flex items-center px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${
              viewMode === 'standings'
                ? 'bg-black text-white shadow-md'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-200'
            }`}
          >
            <LayoutList size={16} className="mr-2" /> League Standings
          </button>
          <button
            onClick={() => setViewMode('roster')}
            className={`flex items-center px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${
              viewMode === 'roster'
                ? 'bg-black text-white shadow-md'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-200'
            }`}
          >
            <Users size={16} className="mr-2" /> Official Fighters
          </button>
          <button
            onClick={() => setViewMode('register')}
            className={`flex items-center px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${
              viewMode === 'register'
                ? 'bg-apex-orange text-white shadow-md'
                : 'text-zinc-500 hover:text-black hover:bg-zinc-200'
            }`}
          >
            <UserPlus size={16} className="mr-2" /> Register to Fight
          </button>
        </div>

        {/* LEAGUE STANDINGS VIEW */}
        {viewMode === 'standings' && (
          <div className="animate-in fade-in slide-in-from-left-4 duration-300">
            {/* Filter Tabs */}
            <div className="flex justify-end mb-4">
              <div className="inline-flex bg-zinc-100 border border-zinc-200 rounded-sm p-1">
                  {['Overall', 'Lightweight'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`px-6 py-2 text-sm font-bold uppercase tracking-widest rounded-sm transition-all ${
                        activeTab === tab 
                          ? 'bg-black text-white shadow-md' 
                          : 'text-zinc-500 hover:text-black'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
              </div>
            </div>

            <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-50 text-zinc-500 uppercase text-xs font-bold tracking-widest border-b border-zinc-200">
                      <th className="p-4 text-center w-16">Rank</th>
                      <th className="p-4 text-center w-16">Trend</th>
                      <th className="p-4 w-1/3">Fighter</th>
                      <th className="p-4">Points</th>
                      <th className="p-4 text-center">Record</th>
                      <th className="p-4 hidden md:table-cell">Form</th>
                      <th className="p-4 hidden lg:table-cell">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {filteredLeagueData.map((fighter) => (
                      <tr key={fighter.id} className="group hover:bg-zinc-50 transition-colors">
                        {/* Rank */}
                        <td className="p-4 text-center">
                          <div className={`font-heading font-bold text-xl ${fighter.rank <= 3 ? 'text-apex-orange' : 'text-black'}`}>
                            {fighter.rank}
                          </div>
                        </td>

                        {/* Movement */}
                        <td className="p-4 text-center">
                          {fighter.movement === 'up' && <TrendingUp size={18} className="text-green-600 mx-auto" />}
                          {fighter.movement === 'down' && <TrendingDown size={18} className="text-red-600 mx-auto" />}
                          {fighter.movement === 'same' && <Minus size={18} className="text-zinc-400 mx-auto" />}
                        </td>

                        {/* Fighter Info */}
                        <td className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-12 h-12 flex-shrink-0">
                              <img src={fighter.image} alt={fighter.name} className="w-full h-full object-cover rounded-full border-2 border-zinc-200 group-hover:border-apex-orange transition-colors" />
                              {fighter.rank === 1 && (
                                <div className="absolute -top-1 -right-1 bg-apex-orange text-white rounded-full p-1">
                                  <Medal size={10} />
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-heading font-bold text-black uppercase text-lg leading-none mb-1 group-hover:text-apex-orange transition-colors">{fighter.name}</div>
                              <div className="text-xs text-zinc-500 uppercase tracking-wider">{fighter.weightClass}</div>
                            </div>
                          </div>
                        </td>

                        {/* Points */}
                        <td className="p-4">
                          <div className="font-mono font-bold text-zinc-900 text-lg">{fighter.points.toLocaleString()}</div>
                        </td>

                        {/* Record */}
                        <td className="p-4 text-center">
                          <span className="text-black font-bold">{fighter.wins}</span>
                          <span className="text-zinc-400 mx-1">-</span>
                          <span className="text-black font-bold">{fighter.losses}</span>
                          <span className="text-zinc-400 mx-1">-</span>
                          <span className="text-black font-bold">{fighter.draws}</span>
                        </td>

                        {/* Form */}
                        <td className="p-4 hidden md:table-cell">
                          <div className="flex space-x-1">
                            {fighter.form.map((res, i) => (
                              <span 
                                key={i} 
                                className={`w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded-sm border ${
                                  res === 'W' || res === 'KO' || res === 'TKO' ? 'bg-green-100 text-green-700 border-green-200' : 
                                  res === 'L' ? 'bg-red-100 text-red-700 border-red-200' : 
                                  'bg-zinc-100 text-zinc-500 border-zinc-200'
                                }`}
                              >
                                {res}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="p-4 hidden lg:table-cell">
                          <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                            fighter.status === 'Champion' ? 'bg-apex-orange text-white' : 'bg-zinc-100 text-zinc-500'
                          }`}>
                            {fighter.status === 'Champion' && <Shield size={10} className="mr-1" />}
                            {fighter.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center space-x-6 text-xs text-zinc-500 uppercase tracking-widest">
              <div className="flex items-center"><TrendingUp size={14} className="text-green-600 mr-2" /> Mover</div>
              <div className="flex items-center"><TrendingDown size={14} className="text-red-600 mr-2" /> Faller</div>
              <div className="flex items-center"><div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div> Win</div>
              <div className="flex items-center"><div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div> Loss</div>
            </div>
          </div>
        )}

        {/* OFFICIAL ROSTER VIEW */}
        {viewMode === 'roster' && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Search Bar */}
            <div className="mb-8">
               <div className="relative w-full md:max-w-md">
                  <input
                    type="text"
                    placeholder="Search fighters by name, nickname, or class..."
                    value={rosterSearchTerm}
                    onChange={(e) => setRosterSearchTerm(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 text-black px-4 py-3 pl-10 focus:outline-none focus:border-apex-orange transition-colors font-sans rounded-sm shadow-inner"
                  />
                  <Search className="absolute left-3 top-3.5 text-zinc-400" size={18} />
               </div>
            </div>

            {/* Roster Grid */}
            {filteredRoster.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredRoster.map(fighter => (
                  <FighterCard key={fighter.id} fighter={fighter} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-zinc-300 rounded-sm bg-zinc-50">
                <p className="text-zinc-500 font-heading uppercase tracking-widest">No fighters found matching criteria.</p>
              </div>
            )}
          </div>
        )}

        {/* FIGHTER REGISTRATION VIEW */}
        {viewMode === 'register' && (
          <div className="animate-in zoom-in duration-300 max-w-4xl mx-auto">
            {registerSuccess ? (
              <div className="bg-white border-2 border-apex-orange p-12 text-center shadow-2xl rounded-sm">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <ClipboardCheck size={40} />
                </div>
                <h2 className="font-heading text-4xl font-bold uppercase mb-4">Application Received</h2>
                <p className="text-zinc-600 text-lg mb-8 max-w-md mx-auto">
                  Your fighting profile has been submitted to ABE Matchmaking. Our scouts will review your record and reach out if there's a slot in the next card.
                </p>
                <button 
                  onClick={() => { setRegisterSuccess(false); setViewMode('standings'); }}
                  className="bg-black text-white px-10 py-4 font-heading font-bold uppercase tracking-widest hover:bg-apex-orange transition-all"
                >
                  Return to Standings
                </button>
              </div>
            ) : (
              <div className="bg-white border border-zinc-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-apex-orange"></div>
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <Activity className="text-apex-orange" size={32} />
                    <h2 className="font-heading text-4xl font-bold uppercase tracking-tighter">Fighter Registration</h2>
                  </div>
                  
                  <p className="text-zinc-500 mb-10 text-lg border-l-4 border-zinc-100 pl-6">
                    Aspiring to be an Apex Performer? Provide your combat credentials below. Only the elite will be scouted for the Motion League.
                  </p>

                  <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 text-zinc-400" size={18} />
                        <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 px-10 py-3 focus:border-apex-orange focus:outline-none transition-colors" placeholder="e.g. Thabiso Kgwete" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Fighting Alias / Nickname</label>
                      <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:border-apex-orange focus:outline-none transition-colors" placeholder='e.g. "The Juggernaut"' />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Weight Class</label>
                      <select required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:border-apex-orange focus:outline-none transition-colors">
                        <option value="">Select Weight</option>
                        <option>Heavyweight</option>
                        <option>Light Heavyweight</option>
                        <option>Middleweight</option>
                        <option>Welterweight</option>
                        <option>Lightweight</option>
                        <option>Bantamweight</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Amateur/Pro Record</label>
                      <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:border-apex-orange focus:outline-none transition-colors" placeholder="e.g. 15-0 (10 KO)" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-zinc-400" size={18} />
                        <input required type="email" className="w-full bg-zinc-50 border border-zinc-200 px-10 py-3 focus:border-apex-orange focus:outline-none transition-colors" placeholder="fighter@gym.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Phone / WhatsApp</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-zinc-400" size={18} />
                        <input required type="tel" className="w-full bg-zinc-50 border border-zinc-200 px-10 py-3 focus:border-apex-orange focus:outline-none transition-colors" placeholder="+27 ..." />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Why do you belong in ABE?</label>
                      <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:border-apex-orange focus:outline-none transition-colors resize-none" placeholder="Describe your style, your drive, and your hunger for the championship."></textarea>
                    </div>

                    <div className="md:col-span-2 pt-4">
                      <button 
                        type="submit"
                        disabled={isRegistering}
                        className="w-full bg-black text-white py-5 font-heading font-bold uppercase tracking-widest text-xl hover:bg-apex-orange transition-all disabled:opacity-50"
                      >
                        {isRegistering ? 'Processing Application...' : 'Submit Credentials'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default MotionLeague;
