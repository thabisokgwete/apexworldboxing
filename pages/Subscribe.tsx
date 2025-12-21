
import React, { useState } from 'react';
import { Check, Zap, Trophy, Video, Loader2, PartyPopper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Subscribe: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate a payment gateway delay
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2500);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-in fade-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600 border-4 border-white shadow-xl">
            <PartyPopper size={48} />
          </div>
          <h1 className="font-heading font-black text-5xl md:text-6xl text-black uppercase tracking-tighter mb-4">
            Welcome, <span className="text-apex-orange">Partner!</span>
          </h1>
          <p className="text-zinc-600 text-lg mb-10 leading-relaxed font-medium">
            Your buy-in is confirmed. You now hold the power to shape the future of ApexWorld.
          </p>
          <div className="space-y-4">
            <Link 
              to="/motion" 
              className="block w-full bg-black text-white py-4 font-heading font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center group"
            >
              Enter the League <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <button 
              onClick={() => setPaymentSuccess(false)}
              className="text-zinc-400 text-xs font-bold uppercase tracking-widest hover:text-black transition-colors"
            >
              View Subscription Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      {/* Processing Overlay */}
      {isProcessing && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center text-white">
          <Loader2 className="text-apex-orange animate-spin mb-6" size={64} />
          <h2 className="font-heading text-3xl font-bold uppercase tracking-widest animate-pulse">
            Connecting to Gateway...
          </h2>
          <p className="text-zinc-500 mt-2 uppercase text-xs font-bold tracking-widest">Do not refresh this page</p>
        </div>
      )}

      {/* Hero / Header Section */}
      <div className="relative bg-black pt-24 pb-20 px-4 overflow-hidden border-b border-zinc-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-apex-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-6">
            Become a <span className="text-apex-orange">Partner!</span>
          </h1>
          
          <p className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-zinc-300 mb-8">
            Subscribe to <span className="text-apex-orange">ABE PARTNERS</span> today for <span className="text-apex-orange">R29.99/pm</span>
          </p>

          <button 
            onClick={handlePayment}
            className="bg-apex-orange text-black px-12 py-4 font-heading font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors transform hover:scale-105 duration-200 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          >
            Shape Our Stories
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Manifesto / Definition Section */}
          <div className="order-1">
             <div className="bg-zinc-50 border-l-8 border-apex-orange p-10 md:p-12 shadow-xl">
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-black mb-8 leading-none">
                  What is a <span className="text-apex-orange">partner?</span>
                </h2>
                <p className="font-sans text-xl md:text-2xl text-zinc-800 leading-relaxed font-medium">
                  A partner is a fan with a buy-in that grants them the power of matchmaking, setting fighting conditions, and determining the stakes.
                </p>
             </div>
          </div>

          {/* Benefits / Form Section */}
          <div className="order-2">
             <div className="bg-white border border-zinc-200 p-8 shadow-lg">
                <h3 className="font-heading text-2xl font-bold uppercase mb-6 flex items-center">
                  <Zap className="text-apex-orange mr-3" /> Partner Benefits
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "The power to choose who fights who.",
                    "The power to choose the conditions of the fights.",
                    "The power to choose what fighters are fighting for."
                  ].map((perk, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-black text-white p-1 rounded-full mr-3 mt-1">
                        <Check size={12} />
                      </div>
                      <span className="text-zinc-600 font-medium">{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-zinc-50 p-6 border border-zinc-100 mb-6">
                  <div className="flex justify-between items-center mb-2">
                     <span className="font-bold uppercase text-sm">Monthly Subscription</span>
                     <span className="font-heading font-bold text-xl text-apex-orange">R29.99</span>
                  </div>
                  <p className="text-xs text-zinc-400">Billed monthly. Cancel anytime.</p>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-black text-white py-4 font-heading font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Connecting...' : 'Proceed to Payment'}
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Subscribe;
