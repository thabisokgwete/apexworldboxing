import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, User, MessageSquare, Briefcase, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  const contactInfo = [
    {
      icon: Briefcase,
      title: "Corporate HQ",
      content: "ApexWorld Entertainment\n3400 Las Vegas Blvd S\nLas Vegas, NV 89109",
      action: "View Map"
    },
    {
      icon: Mail,
      title: "General Inquiries",
      content: "info@apexworld.com\npress@apexworld.com",
      action: "Email Us"
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (702) 555-0199\nMon-Fri, 9am - 6pm PST",
      action: "Call Now"
    },
    {
      icon: Globe,
      title: "Sponsorships",
      content: "partners@apexworld.com\nGlobal Brand Partnerships",
      action: "Apply"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-50 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-apex-orange/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter mb-4">
            Get In <span className="text-apex-orange">Touch</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-lg">
            Questions about tickets? Media accreditation? Sponsorship opportunities? 
            Our corner men are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 p-8 group hover:border-apex-orange transition-colors duration-300 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-6 group-hover:border-apex-orange transition-colors">
                  <info.icon className="text-apex-orange" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-zinc-900 uppercase mb-3">{info.title}</h3>
                <p className="text-zinc-500 text-sm whitespace-pre-line mb-6 leading-relaxed">
                  {info.content}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest text-zinc-900 border-b border-apex-orange pb-1 hover:text-apex-orange transition-colors">
                  {info.action}
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-zinc-200 p-8 md:p-10 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-apex-orange" />
            
            <h2 className="font-heading text-3xl font-bold text-black uppercase mb-8 flex items-center">
              <MessageSquare className="mr-3 text-apex-orange" /> Send a Message
            </h2>

            {submitted ? (
              <div className="h-96 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 border border-green-200">
                  <Send size={40} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-black uppercase mb-2">Message Sent</h3>
                <p className="text-zinc-500">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-bold uppercase tracking-widest text-apex-orange hover:text-black transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Your Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-300 text-black px-4 py-3 pl-10 focus:outline-none focus:border-apex-orange transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                      <User className="absolute left-3 top-3.5 text-zinc-400" size={16} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        required
                        className="w-full bg-zinc-50 border border-zinc-300 text-black px-4 py-3 pl-10 focus:outline-none focus:border-apex-orange transition-colors"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      <Mail className="absolute left-3 top-3.5 text-zinc-400" size={16} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Department</label>
                  <select 
                    className="w-full bg-zinc-50 border border-zinc-300 text-black px-4 py-3 focus:outline-none focus:border-apex-orange transition-colors appearance-none"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                  >
                    <option value="general">General Inquiries</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers (Fighters & Staff)</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-zinc-50 border border-zinc-300 text-black px-4 py-3 focus:outline-none focus:border-apex-orange transition-colors resize-none"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-black text-white hover:bg-apex-orange hover:text-white font-heading font-bold uppercase tracking-widest py-4 text-sm transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map Placeholder / Footer Area */}
        <div className="mt-20 border-t border-zinc-200 pt-12">
           <div className="w-full h-64 bg-zinc-100 flex items-center justify-center border border-zinc-200 grayscale hover:grayscale-0 transition-all duration-500 group cursor-pointer relative overflow-hidden">
             <img src="https://picsum.photos/1200/400?grayscale" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-20" />
             <div className="relative z-10 flex flex-col items-center">
                <MapPin className="text-apex-orange mb-2 group-hover:scale-110 transition-transform" size={40} />
                <span className="font-heading font-bold text-black uppercase tracking-widest bg-white/80 px-4 py-1 backdrop-blur-sm shadow-sm">View Headquarters Map</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;