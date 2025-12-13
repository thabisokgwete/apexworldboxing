import React, { useState, useEffect, useRef } from 'react';
import { Upload, X, RefreshCw, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  defaultSrc: string;
  storageKey: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ defaultSrc, storageKey, alt, className, imgClassName }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setImageSrc(saved);
    } else {
      setImageSrc(defaultSrc);
    }
  }, [storageKey, defaultSrc]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        try {
            localStorage.setItem(storageKey, result);
            setImageSrc(result);
        } catch (error) {
            console.error("Storage limit reached", error);
            alert("Image too large to save locally. It will display for this session but won't persist after reload.");
            setImageSrc(result); // Still set it in state so user sees it
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onInputClick = (e: React.MouseEvent) => {
    // CRITICAL: Stop propagation to prevent bubbling up to the container's onClick, 
    // which would trigger an infinite loop of clicks.
    e.stopPropagation();
    // Reset value to allow selecting the same file again if needed
    (e.target as HTMLInputElement).value = '';
  };

  const triggerUpload = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const removeImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImageSrc(null);
    localStorage.removeItem(storageKey);
  };

  const restoreDefault = (e: React.MouseEvent) => {
     e.preventDefault();
     e.stopPropagation();
     setImageSrc(defaultSrc);
     localStorage.removeItem(storageKey);
  };

  // If imageSrc is present (either default or uploaded)
  if (imageSrc) {
    return (
      <div 
        className={`relative group/uploader cursor-pointer ${className || ''}`} 
        onClick={triggerUpload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          onClick={onInputClick}
        />
        
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover ${imgClassName || ''}`}
          onError={() => setImageSrc(null)} 
        />

        {/* Persistent "Click to Upload" Badge */}
        <div className="absolute top-2 left-2 z-20">
           <div className="bg-black/60 text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm backdrop-blur-md flex items-center hover:bg-apex-orange transition-colors shadow-sm pointer-events-none">
              <Upload size={10} className="mr-1.5" /> Click to Upload
           </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/uploader:opacity-100 transition-opacity bg-black/40 z-10">
          <div className="bg-white text-black px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest flex items-center shadow-2xl transform scale-95 group-hover/uploader:scale-100 transition-transform">
            <RefreshCw size={14} className="mr-2" /> Change Image
          </div>
        </div>

        {/* Remove / Reset Button */}
        <div className="absolute top-2 right-2 z-30 flex space-x-1 opacity-0 group-hover/uploader:opacity-100 transition-opacity">
            <button
                onClick={removeImage}
                className="bg-red-600 text-white p-1.5 rounded-full shadow-md hover:bg-red-700"
                title="Remove Image"
            >
                <X size={12} />
            </button>
        </div>
      </div>
    );
  }

  // Placeholder State (When image is removed)
  return (
    <div 
        className={`relative cursor-pointer border-2 border-dashed border-zinc-300 bg-zinc-50 hover:bg-orange-50 hover:border-apex-orange hover:text-apex-orange transition-all flex flex-col items-center justify-center group/uploader ${className || ''}`}
        onClick={triggerUpload}
    >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          onClick={onInputClick}
        />
        
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm group-hover/uploader:scale-110 transition-transform">
            <Upload size={20} className="text-zinc-400 group-hover/uploader:text-apex-orange" />
        </div>
        <span className="text-zinc-500 font-heading font-bold uppercase tracking-widest text-[10px] md:text-xs text-center px-2 group-hover/uploader:text-apex-orange">
            Click to Upload Image
        </span>
        
        {/* Restore Default Link */}
        {defaultSrc && (
            <button 
                onClick={restoreDefault}
                className="absolute bottom-2 right-2 text-[10px] text-zinc-400 underline hover:text-black z-10"
            >
                Reset Default
            </button>
        )}
    </div>
  );
};

export default ImageUploader;