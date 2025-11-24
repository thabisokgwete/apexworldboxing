import React, { useState } from 'react';
import { EVENTS, MERCHANDISE } from '../constants';
import { ShoppingBag, Ticket, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-white pt-12 pb-24">
      {/* Hero Banner */}
      <div className="relative bg-zinc-900 text-white mb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://picsum.photos/1920/600?grayscale" alt="Shop Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex items-center space-x-2 text-apex-orange mb-4">
            <ShoppingBag size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">Official Store</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase leading-none mb-6">
            World of <span className="text-apex-orange">Fighters</span>.
          </h1>
          <p className="text-zinc-400 max-w-xl text-lg mb-8">
            Official fight kits, training gear, and exclusive event tickets. 
            The only place to get authentic ABE merchandise.
          </p>
          <button className="bg-white text-black px-8 py-3 font-heading font-bold uppercase tracking-widest hover:bg-apex-orange hover:text-white transition-colors">
            View New Arrivals
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TICKETS SECTION */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
            <h2 className="font-heading text-4xl font-bold uppercase text-black flex items-center">
              <Ticket className="mr-3 text-apex-orange" /> Event Tickets
            </h2>
            <a href="/events" className="text-sm font-bold uppercase text-zinc-500 hover:text-apex-orange transition-colors">
              View Full Schedule
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EVENTS.map((event) => (
              <div key={event.id} className="bg-white border border-zinc-200 p-0 flex flex-col md:flex-row overflow-hidden hover:border-apex-orange transition-colors group shadow-sm hover:shadow-md">
                <div className="bg-zinc-900 text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-apex-orange opacity-0 group-hover:opacity-10 transition-opacity" />
                  <span className="text-3xl font-heading font-bold">{event.date.split(' ')[1]}</span>
                  <span className="text-sm uppercase tracking-widest text-zinc-400">{event.date.split(' ')[0]}</span>
                  <span className="mt-2 text-xs font-bold uppercase bg-white/10 px-2 py-1 rounded">{event.status}</span>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase leading-tight mb-2">{event.title}</h3>
                    <p className="text-zinc-500 text-sm flex items-center mb-4">
                      {event.venue}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-lg font-bold">From {event.price}</div>
                    <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-apex-orange transition-colors">
                      Select Seats
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MERCHANDISE SECTION */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="font-heading text-4xl font-bold uppercase text-black mb-2">Official Gear</h2>
              <p className="text-zinc-500">Equip yourself with the same gear used by ABE champions.</p>
            </div>
            
            <div className="flex space-x-2 mt-4 md:mt-0 overflow-x-auto pb-1">
              {['All', 'Apparel', 'Equipment', 'Accessories'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border rounded-sm transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white text-zinc-500 border-zinc-200 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MERCHANDISE
              .filter(item => activeCategory === 'All' || item.category === activeCategory)
              .map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-zinc-50 mb-4 aspect-square border border-zinc-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.tag && (
                    <div className="absolute top-4 left-4 bg-apex-orange text-white text-[10px] font-bold uppercase px-2 py-1">
                      {item.tag}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-black text-white py-3 font-heading font-bold uppercase tracking-widest text-sm hover:bg-apex-orange transition-colors shadow-xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{item.category}</div>
                  <h3 className="font-heading text-xl font-bold text-black uppercase leading-tight group-hover:text-apex-orange transition-colors">
                    {item.name}
                  </h3>
                  <div className="mt-1 font-sans font-bold text-zinc-900">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features / Trust Signals */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-100 pt-12">
          <div className="flex items-center space-x-4">
            <ShieldCheck size={32} className="text-apex-orange" />
            <div>
              <h4 className="font-heading font-bold uppercase text-black">Authentic Products</h4>
              <p className="text-xs text-zinc-500">Verified official merchandise directly from ABE.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Truck size={32} className="text-apex-orange" />
            <div>
              <h4 className="font-heading font-bold uppercase text-black">Global Shipping</h4>
              <p className="text-xs text-zinc-500">Delivery to over 150 countries worldwide.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <RefreshCw size={32} className="text-apex-orange" />
            <div>
              <h4 className="font-heading font-bold uppercase text-black">Easy Returns</h4>
              <p className="text-xs text-zinc-500">30-day return policy on all unworn gear.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;