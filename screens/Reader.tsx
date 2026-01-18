
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, MoreVertical, Heart, MessageCircle, Bookmark, Type as FontIcon, Volume2 } from 'lucide-react';
import { MOCK_STORIES } from './HomeFeed';
import { Story } from '../types';

const Reader: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [fontSize, setFontSize] = useState<'text-md' | 'text-lg' | 'text-xl' | 'text-2xl'>('text-lg');
  const [scrollProgress, setScrollProgress] = useState(0);

  const story = MOCK_STORIES.find(s => s.id === id) || MOCK_STORIES[0];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('reader-content');
      if (element) {
        const totalHeight = element.scrollHeight - element.clientHeight;
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(currentProgress, 100));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-100">
        <div 
          className="h-full bg-orange-500 transition-all duration-300" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl px-5 py-4 flex items-center justify-between border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="text-gray-800 p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => {
              const sizes: ('text-md' | 'text-lg' | 'text-xl' | 'text-2xl')[] = ['text-md', 'text-lg', 'text-xl', 'text-2xl'];
              const currentIdx = sizes.indexOf(fontSize);
              setFontSize(sizes[(currentIdx + 1) % sizes.length]);
            }} 
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors active:scale-90"
          >
            <FontIcon size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors active:scale-90">
            <Volume2 size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors active:scale-90">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div id="reader-content" className="flex-1 pb-32">
        <div className="px-6 pt-8 pb-4">
          <div className="flex items-center space-x-2 mb-4">
             <span className="px-3 py-1 bg-orange-100 text-orange-600 text-[9px] font-black uppercase tracking-widest rounded-full">
               {story.category}
             </span>
             <span className="text-[10px] text-gray-400 font-bold">•</span>
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
               {story.readingTime} Min Read
             </span>
          </div>
          
          <h1 className="text-3xl font-heading font-black mb-6 leading-[1.2] text-gray-900">
            {story.title}
          </h1>
          
          <div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-[2rem] border border-gray-100">
             <div className="w-12 h-12 bg-orange-100 rounded-2xl overflow-hidden border-2 border-white shadow-sm">
                <img src={`https://i.pravatar.cc/150?u=${story.authorId}`} alt={story.author} />
             </div>
             <div className="flex-1">
               <div className="text-sm font-black text-gray-900 uppercase tracking-tighter">{story.author}</div>
               <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Lekhak Gold • Verified</div>
             </div>
             <button className="bg-orange-500 text-white text-[10px] font-black px-5 py-2 rounded-full shadow-lg shadow-orange-100 uppercase transition-transform active:scale-90">Follow</button>
          </div>

          <div className="w-full h-64 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
             <img src={story.coverImage} className="w-full h-full object-cover" alt="story cover" />
          </div>

          <div className={`font-literary leading-[1.8] text-gray-800 ${fontSize} space-y-8 animate-in fade-in duration-1000`}>
             {story.content.split('\n').map((para, i) => (
               <p key={i} className="first-letter:text-4xl first-letter:font-heading first-letter:mr-2 first-letter:float-left">
                 {para}
               </p>
             ))}
             
             {/* Extended filler for scrolling effect demo */}
             <p>
                As the shadows grew longer, the mystery deepened. Every path in Bharat has a guardian, and every guardian has a story. Kashi was no different. The whispers of the past were now a roar in my ears.
             </p>
             <div className="flex flex-col items-center justify-center py-20 border-t border-gray-100 mt-12">
                <div className="text-4xl mb-4">🪷</div>
                <div className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">End of Preview</div>
                <button className="mt-8 bg-[#000080] text-white px-8 py-4 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl transition-transform active:scale-95">
                   Subscribe for Full Story
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Reader Actions Floating */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-2xl border border-white/50 px-6 py-3 rounded-full flex items-center space-x-10 shadow-2xl w-[90%] max-w-[340px] justify-around">
        <button 
          onClick={() => setLiked(!liked)} 
          className={`flex flex-col items-center transition-all ${liked ? 'text-red-500 scale-110' : 'text-gray-400'}`}
        >
          <Heart size={22} fill={liked ? 'currentColor' : 'none'} className="active:scale-125 transition-transform" />
          <span className="text-[9px] font-black mt-0.5">{liked ? 'Liked' : 'Like'}</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-blue-500">
          <MessageCircle size={22} />
          <span className="text-[9px] font-black mt-0.5">89</span>
        </button>
        <button className="flex flex-col items-center text-gray-400 hover:text-orange-500">
          <Bookmark size={22} />
          <span className="text-[9px] font-black mt-0.5">Save</span>
        </button>
        <div className="h-6 w-px bg-gray-200"></div>
        <button className="bg-orange-500 p-2.5 rounded-full text-white shadow-lg active:scale-90 transition-all">
          <Volume2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default Reader;
