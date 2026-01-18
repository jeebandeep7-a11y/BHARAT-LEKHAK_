
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Onboarding: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedLang) {
      navigate('/login');
    }
  };

  return (
    <div className="flex flex-col h-full bg-white p-6">
      <div className="mt-12 mb-8">
        <h2 className="text-3xl font-heading font-bold text-navy-900 leading-tight">
          Choose your <span className="text-orange-500">Language</span>
        </h2>
        <p className="text-gray-500 mt-2">अपनी भाषा चुनें और कहानियों की दुनिया में खो जाएं</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-24 overflow-y-auto pr-1 no-scrollbar">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            onClick={() => setSelectedLang(lang.id)}
            className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 transition-all ${
              selectedLang === lang.id
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-100 bg-gray-50'
            }`}
          >
            <span className="text-xl font-bold text-gray-800">{lang.nativeName}</span>
            <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{lang.name}</span>
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white shadow-2xl-top">
        <button
          onClick={handleContinue}
          disabled={!selectedLang}
          className={`w-full py-4 rounded-xl flex items-center justify-center font-bold text-lg transition-all ${
            selectedLang 
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 active:scale-95' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Explore Now
          <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
