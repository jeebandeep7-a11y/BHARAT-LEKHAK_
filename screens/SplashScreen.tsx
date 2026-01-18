
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [tagline, setTagline] = useState(false);

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => setTagline(true), 1200);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-[#000080] text-white relative overflow-hidden px-10 text-center">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 to-transparent"></div>
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-orange-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-green-500 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className={`transition-all duration-1000 transform ${animate ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
        {/* Cinematic 3D Book Animation */}
        <div className="relative w-40 h-52 mx-auto mb-10 perspective-1000 perspective-origin-center">
           <div className={`w-full h-full bg-white rounded-r-2xl shadow-[20px_20px_60px_rgba(0,0,0,0.5)] relative border-l-[12px] border-orange-600 transition-transform duration-1000 ${animate ? 'rotate-y-0' : 'rotate-y-[-120deg]'}`}>
             <div className="absolute top-6 left-6 right-6 h-1.5 bg-gray-100 rounded"></div>
             <div className="absolute top-12 left-6 right-12 h-1.5 bg-gray-100 rounded"></div>
             <div className="absolute top-18 left-6 right-8 h-1.5 bg-gray-100 rounded"></div>
             <div className="absolute top-24 left-6 right-10 h-1.5 bg-gray-100 rounded"></div>
             
             {/* Center Brand Icon */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center border border-orange-200">
                   <span className="text-3xl">🪷</span>
                </div>
             </div>
             
             {/* Page edge texture */}
             <div className="absolute right-1 top-0 bottom-0 w-1 bg-gray-50 rounded-r-2xl"></div>
           </div>
           
           {/* Glow behind book */}
           <div className="absolute -inset-4 bg-orange-500/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-heading font-black tracking-tighter leading-none flex flex-col">
            <span className="text-white drop-shadow-lg">BHARAT</span>
            <span className="text-orange-500 -mt-2">LEKHAK</span>
          </h1>
          
          <div className={`transition-all duration-1000 delay-500 transform ${tagline ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-sm font-bold tracking-[0.4em] uppercase opacity-70 mb-1">
              हर भाषा, हर कहानी
            </p>
            <div className="h-0.5 w-12 bg-orange-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center space-y-4">
         <div className="w-6 h-1 bg-white/20 rounded-full overflow-hidden">
            <div className={`h-full bg-orange-500 transition-all duration-[3000ms] ease-out ${animate ? 'w-full' : 'w-0'}`}></div>
         </div>
         <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
           Digital India • Startup Bharat
         </p>
      </div>
    </div>
  );
};

export default SplashScreen;
