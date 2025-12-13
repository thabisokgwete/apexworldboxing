import React, { useState, useEffect, useRef } from 'react';
import { Building2, Target, TrendingUp, Upload, Image as ImageIcon, X, RefreshCw } from 'lucide-react';

const Corporate: React.FC = () => {
  // State to hold the image source
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // On load, check if we have a saved image, otherwise try the default file
  useEffect(() => {
    const savedImage = localStorage.getItem('abe_corporate_image');
    if (savedImage) {
      setImageSrc(savedImage);
    } else {
      // Default to trying the file system if no custom upload exists
      setImageSrc('/corporate.png');
    }
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageSrc(result);
        // Save to browser storage so it stays after refresh
        localStorage.setItem('abe_corporate_image', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    // If /corporate.png doesn't exist and no local upload, show the upload box
    setImageSrc(null);
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const resetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageSrc(null);
    localStorage.removeItem('abe_corporate_image');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20 px-4">
      {/* Main Card Container */}
      <div className="max-w-3xl w-full bg-white shadow-2xl relative overflow-hidden rounded-sm">
        
        {/* Top Orange Bar */}
        <div className="h-3 w-full bg-apex-orange"></div>

        <div className="p-8 md:p-16 text-center">
          
          {/* Header Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-50 mb-8">
            <Building2 className="text-apex-orange" size={40} />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-10 text-black">
            Corporate Member of<br />
            <span className="text-apex-orange">R500M+ Company</span>
          </h1>

          {/* IMAGE UPLOAD SECTION */}
          <div className="mb-12 flex justify-center w-full">
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleImageUpload} 
            />

            {imageSrc ? (
              <div 
                className="relative group cursor-pointer inline-block"
                onClick={triggerUpload}
                title="Click to change image"
              >
                <img 
                  src={imageSrc} 
                  alt="Corporate Member Badge" 
                  className="max-h-64 object-contain transition-opacity group-hover:opacity-50"
                  onError={handleImageError}
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="bg-black/70 text-white px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest flex items-center">
                     <RefreshCw size={14} className="mr-2" /> Change Image
                   </div>
                </div>

                {/* Remove Button */}
                <button 
                  onClick={resetImage}
                  className="absolute -top-2 -right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-700"
                  title="Remove Image"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              // UPLOAD PLACEHOLDER UI
              <div 
                onClick={triggerUpload}
                className="w-full h-64 border-2 border-dashed border-zinc-300 bg-zinc-50 hover:bg-orange-50 hover:border-apex-orange hover:text-apex-orange transition-all cursor-pointer flex flex-col items-center justify-center group rounded-lg"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Upload size={24} className="text-zinc-400 group-hover:text-apex-orange" />
                </div>
                <span className="text-zinc-500 font-heading font-bold uppercase tracking-widest text-sm group-hover:text-apex-orange">
                  Click to Upload Image
                </span>
                <span className="text-zinc-400 text-xs mt-2">
                  Supports PNG, JPG, WEBP
                </span>
              </div>
            )}
          </div>

          {/* PEYPA Text */}
          <p className="font-sans text-xl md:text-2xl text-zinc-800 leading-relaxed mb-12 font-light">
            ApexWorld Boxing Entertainment (ABE) is a corporate member of <span className="font-bold text-apex-orange">R500M+ Company</span>, an initiative instituted by Private Equity Youth Partners Association (PEYPA).
          </p>

          {/* Definition Box */}
          <div className="bg-zinc-50 border-l-8 border-apex-orange p-8 text-left mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-apex-orange" size={28} />
              <h3 className="font-heading font-bold text-3xl uppercase text-black">R500M+ Company</h3>
            </div>
            <p className="text-zinc-600 leading-relaxed text-lg">
              R500M+ Company is a network and growth program of companies, founders, and executives with a mission to build companies to the value of <span className="font-bold text-zinc-900">R500 million</span> and above, measured using various valuation methods and metrics.
            </p>
          </div>

          {/* Footer Link */}
          <div className="text-left border-t border-zinc-100 pt-8">
             <button className="inline-flex items-center text-zinc-400 font-bold uppercase tracking-widest text-sm hover:text-apex-orange transition-colors">
               <TrendingUp size={16} className="mr-2" /> Strategic Growth Initiative
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Corporate;