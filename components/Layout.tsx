import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Tv, Users, Calendar, Trophy, Mail, Info, Radio, ShoppingBag } from 'lucide-react';

const NavItem = ({ to, icon: Icon, label, active, onClick }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 font-heading uppercase tracking-wider ${
      active
        ? 'text-apex-orange bg-zinc-100'
        : 'text-zinc-600 hover:text-apex-orange hover:bg-zinc-50'
    }`}
  >
    {Icon && <Icon size={20} />}
    <span>{label}</span>
  </Link>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: Tv },
    { to: '/events', label: 'Events', icon: Calendar },
    { to: '/broadcasting', label: 'Vulgar', icon: Radio },
    { to: '/motion', label: 'Motion', icon: Trophy },
    { to: '/shop', label: 'Shop', icon: ShoppingBag },
    { to: '/about', label: 'About', icon: Info },
    { to: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-apex-orange selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              {/* Using img tag as requested for the uploaded logo. Assuming logo.png is in public root. */}
              <img 
                src="/logo.png" 
                alt="ABE Logo" 
                className="h-12 w-auto object-contain" 
                onError={(e) => {
                  // Fallback in case image is missing, ensuring site remains usable
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-sans font-black text-5xl tracking-tighter text-black leading-none select-none">
                ABE<span className="text-apex-orange">.</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <NavItem
                  key={link.to}
                  {...link}
                  active={location.pathname === link.to}
                />
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-800 hover:text-apex-orange p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown (Website Style List) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 absolute top-20 left-0 w-full shadow-xl z-40">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 border-b border-zinc-100 font-heading font-bold uppercase tracking-widest text-sm transition-colors ${
                    location.pathname === link.to 
                      ? 'text-apex-orange bg-zinc-50' 
                      : 'text-zinc-900 hover:bg-zinc-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 border-t border-zinc-200 py-12 mt-auto text-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img src="/logo.png" alt="ABE Logo" className="h-10 w-auto mb-4 object-contain" />
              <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
                The world's premier combat sports organization. Bringing you the biggest fights, the brightest stars, and the most intense action from around the globe.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4 text-black">Connect</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="hover:text-apex-orange cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-apex-orange cursor-pointer transition-colors">Twitter / X</li>
                <li className="hover:text-apex-orange cursor-pointer transition-colors">YouTube</li>
                <li className="hover:text-apex-orange cursor-pointer transition-colors">TikTok</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-4 text-black">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="hover:text-apex-orange cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-apex-orange cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-apex-orange cursor-pointer transition-colors">Cookie Settings</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-xs text-zinc-400 uppercase tracking-widest">
            © 2025 ApexWorld Boxing Entertainment. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;