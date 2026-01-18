
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, ArrowLeft, Image as ImageIcon, Sparkles, Wand2, Tag, BookOpen, Layout } from 'lucide-react';
import { LANGUAGES, CATEGORIES } from '../constants';
import { getGeminiSuggestions } from '../geminiService';

const WriteStory: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lang, setLang] = useState('hi');
  const [cat, setCat] = useState('romance');
  const [subCat, setSubCat] = useState('');
  const [summary, setSummary] = useState('');
  const [tags, setTags] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  const handleAiAssist = async () => {
    if (!content && !title) {
        setAiFeedback("Please provide some context so I can assist you!");
        return;
    }
    setIsAiLoading(true);
    const feedback = await getGeminiSuggestions(`
      You are an Indian literature expert. Analyze this story draft:
      Title: ${title}
      Category: ${cat}
      Content: ${content.substring(0, 500)}
      Give 3 creative suggestions to improve the flow or narrative.
    `);
    setAiFeedback(feedback);
    setIsAiLoading(false);
  };

  const currentCategory = CATEGORIES.find(c => c.id === cat);

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4 text-gray-500 hover:bg-gray-50 p-1 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-sm font-black text-gray-900 uppercase tracking-tighter">Writer's Desk</h2>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Autosaving...</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
            <Eye size={22} />
          </button>
          <button 
            disabled={!title || !content}
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-100 active:scale-95 transition-all disabled:opacity-40 disabled:grayscale"
          >
            Publish
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-32">
        {/* Header Section */}
        <div className="p-6 space-y-8">
          <div className="w-full h-48 bg-gray-50 border-2 border-dashed border-gray-200 rounded-[2.5rem] flex flex-col items-center justify-center text-gray-400 group hover:border-orange-300 hover:bg-orange-50/30 transition-all cursor-pointer">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ImageIcon size={28} className="text-gray-300 group-hover:text-orange-400" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add Story Cover</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-orange-500 uppercase tracking-widest ml-1">Title of your Masterpiece</label>
              <input 
                type="text" 
                placeholder="Enter Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-3xl font-heading font-black outline-none border-none placeholder:text-gray-200 py-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Language</label>
                <div className="relative">
                  <select 
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-4 text-xs font-black uppercase tracking-tighter outline-none appearance-none focus:ring-2 focus:ring-orange-100 transition-all"
                  >
                    {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.name} ({l.nativeName})</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Genre</label>
                <div className="relative">
                  <select 
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-3 px-4 text-xs font-black uppercase tracking-tighter outline-none appearance-none focus:ring-2 focus:ring-orange-100 transition-all"
                  >
                    {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Short Summary</label>
              <textarea 
                placeholder="What is this story about? (Hook your readers here...)"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-[1.5rem] p-4 text-sm font-medium resize-none h-24 outline-none focus:ring-2 focus:ring-orange-100 transition-all"
              />
            </div>

            {/* Main Story Content Area - Unified Here */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between px-1">
                <label className="text-[10px] font-black text-orange-500 uppercase tracking-widest flex items-center">
                  <BookOpen size={14} className="mr-2" />
                  Write Your Story Below
                </label>
                <span className="text-[9px] font-bold text-gray-300 uppercase">{content.split(/\s+/).filter(x => x).length} Words</span>
              </div>
              
              <textarea 
                placeholder="The pen is yours... start writing your story here."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[600px] font-literary text-xl leading-[1.8] text-gray-800 outline-none border-t border-gray-100 py-8 resize-none placeholder:text-gray-100"
              />
            </div>
          </div>

          {/* AI Suggestions Section */}
          {aiFeedback && (
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-[2rem] relative animate-in fade-in slide-in-from-bottom-4">
              <button 
                onClick={() => setAiFeedback(null)} 
                className="absolute top-4 right-4 text-orange-400 text-[10px] font-black uppercase tracking-widest"
              >
                Dismiss
              </button>
              <div className="flex items-center mb-3 text-orange-600">
                <Sparkles size={16} className="mr-2" />
                <span className="text-[10px] font-black uppercase tracking-widest">Lekhak AI Editor</span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed font-medium">
                 {aiFeedback.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Assistant Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <button 
          onClick={handleAiAssist}
          disabled={isAiLoading}
          className="flex items-center space-x-2 bg-[#000080] text-white px-6 py-4 rounded-full shadow-[0_20px_40px_rgba(0,0,128,0.3)] transform active:scale-90 transition-all border-2 border-white/20 group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {isAiLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <Wand2 size={20} className="relative z-10" />
          )}
          <span className="font-black text-xs uppercase tracking-widest relative z-10">
            {isAiLoading ? 'Analyzing...' : 'Editorial Help'}
          </span>
        </button>
      </div>

      {/* Bottom Formatting Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center px-8 justify-between z-[45]">
         <div className="flex items-center space-x-8 text-gray-400">
           <button className="hover:text-orange-500 transition-colors font-black text-lg">B</button>
           <button className="hover:text-orange-500 transition-colors italic font-literary text-lg">I</button>
           <button className="hover:text-orange-500 transition-colors underline text-lg">U</button>
           <div className="h-6 w-px bg-gray-200"></div>
           <button className="hover:text-orange-500 transition-colors"><Layout size={20} /></button>
           <button className="hover:text-orange-500 transition-colors"><ImageIcon size={20} /></button>
         </div>
         <button className="flex items-center space-x-1.5 text-[9px] font-black text-gray-300 uppercase tracking-widest">
           <Save size={16} />
           <span>Draft Saved</span>
         </button>
      </div>
    </div>
  );
};

// Helper component for chevron
const ChevronDown: React.FC<{className?: string, size?: number}> = ({className, size}) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

export default WriteStory;
