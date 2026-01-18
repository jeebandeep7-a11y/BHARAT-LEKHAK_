
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, CATEGORIES } from '../constants';
import { Search, Flame, TrendingUp, Sparkles, Heart, MessageCircle, Clock } from 'lucide-react';
import { Story } from '../types';

export const MOCK_STORIES: Story[] = [
  {
    id: '1',
    title: 'The Silent Bells of Varanasi',
    author: 'Aarav Sharma',
    authorId: 'a1',
    language: 'English',
    category: 'Mystery',
    subCategory: 'Whodunit',
    summary: 'A secret hidden within the ancient ghats for centuries begins to echo through the morning fog...',
    content: 'Varanasi, or Kashi, is a city where every stone tells a story. But the story I\'m about to tell you is one that even the oldest priests don\'t speak of aloud. It began on a cold winter morning at Dashashwamedh Ghat. The fog was so thick that the Ganga was just a shimmering ghost in the distance. I was waiting for Professor Chatterjee, who had promised to show me something that defied historical explanation. "Listen carefully," he whispered when he finally arrived. I leaned in, expecting some profound wisdom. But instead of words, I heard it—a faint, rhythmic tolling of a bell. But there was no bell in sight.',
    coverImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800',
    readingTime: 8,
    likes: 1240,
    comments: 89,
    tags: ['history', 'secret', 'spirituality'],
    createdAt: '2h ago'
  },
  {
    id: '2',
    title: 'प्रेम की एक अधूरी दास्तान',
    author: 'Priya Verma',
    authorId: 'p1',
    language: 'Hindi',
    category: 'Romance',
    subCategory: 'Contemporary',
    summary: 'क्या समय की दूरियां दो दिलों के बीच के प्यार को कम कर सकती हैं? देखिए एक अनकही प्रेम कहानी।',
    content: 'एक शहर जहाँ यादें रहती थीं, वहाँ राहुल और सीमा की कहानी शुरू हुई। सालों बाद जब वे फिर से मिले, तो दुनिया बदल चुकी थी, लेकिन उनके बीच की वह खामोशी आज भी बहुत कुछ कह रही थी। क्या समय फिर से उन्हें मिला पाएगा? यह कहानी है उन वादों की जो कभी पूरे नहीं हुए।',
    coverImage: 'https://images.unsplash.com/photo-1516589174184-c685266d4341?auto=format&fit=crop&q=80&w=800',
    readingTime: 12,
    likes: 850,
    comments: 45,
    tags: ['love', 'emotional', 'destiny'],
    createdAt: '5h ago'
  },
  {
    id: '3',
    title: 'অচেনা পথিকের গল্প',
    author: 'Subho Das',
    authorId: 's1',
    language: 'Bengali',
    category: 'Drama',
    subCategory: 'Contemporary Drama',
    summary: 'জীবন যেখানে থমকে দাঁড়ায়, সেখান থেকেই শুরু হয় এক নতুন লড়াই। এক অচেনা পথিকের জীবন কাহিনী।',
    content: 'বৃষ্টির দিনে দেখা হলো সেই মানুষটির সাথে। তার চোখে ছিল একরাশ স্বপ্ন আর হাতে ছিল একটি পুরনো ডায়েরি। কে জানত সেই ডায়েরির পাতায় লুকিয়ে আছে এক বিশাল ইতিহাস।',
    coverImage: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=800',
    readingTime: 6,
    likes: 560,
    comments: 23,
    tags: ['life', 'rain', 'struggle'],
    createdAt: '1d ago'
  }
];

const HomeFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-gray-50 min-h-full">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg px-5 py-4 flex items-center justify-between border-b border-gray-100 shadow-sm">
        <h1 className="text-xl font-heading font-black">
          BHARAT <span className="text-orange-500">LEKHAK</span>
        </h1>
        <div className="flex space-x-3">
          <button onClick={() => navigate('/search')} className="p-2 bg-gray-50 rounded-full text-gray-500 transition-transform active:scale-90">
            <Search size={20} />
          </button>
          <div onClick={() => navigate('/profile')} className="w-10 h-10 bg-orange-100 rounded-full border-2 border-orange-500 overflow-hidden cursor-pointer">
             <img src="https://picsum.photos/100" alt="user" />
          </div>
        </div>
      </div>

      {/* Language Chips */}
      <div className="flex overflow-x-auto no-scrollbar py-4 px-5 space-x-3 bg-white">
        <button className="px-5 py-2 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-lg shadow-orange-100">For You</button>
        {LANGUAGES.slice(0, 6).map(lang => (
          <button key={lang.id} className="px-5 py-2 rounded-full bg-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest whitespace-nowrap border border-gray-100 hover:bg-orange-50 hover:text-orange-600 transition-colors">
            {lang.nativeName}
          </button>
        ))}
      </div>

      {/* Main Categories Horizontal */}
      <div className="bg-white pb-5 border-b border-gray-100">
        <div className="flex overflow-x-auto no-scrollbar px-5 space-x-6">
          {CATEGORIES.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
              className="flex flex-col items-center flex-shrink-0 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-1.5 transition-all transform group-active:scale-95 ${selectedCategory === cat.id ? 'bg-orange-500 text-white shadow-xl rotate-3' : 'bg-gray-50 text-gray-400 grayscale group-hover:grayscale-0'}`}>
                {cat.icon}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-tighter ${selectedCategory === cat.id ? 'text-orange-600' : 'text-gray-400'}`}>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center px-5 py-6 space-x-8 bg-gray-50">
        {['trending', 'latest', 'challenges'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)} 
            className={`flex items-center space-x-2 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-orange-600 border-b-2 border-orange-600 pb-1' : 'text-gray-400'}`}
          >
            {tab === 'trending' && <TrendingUp size={14} />}
            {tab === 'latest' && <Sparkles size={14} />}
            {tab === 'challenges' && <Flame size={14} />}
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Story List */}
      <div className="px-5 space-y-8 pb-24">
        {MOCK_STORIES.map((story, index) => (
          <div 
            key={story.id} 
            onClick={() => navigate(`/reader/${story.id}`)}
            className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group cursor-pointer animate-in fade-in slide-in-from-bottom-8"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="relative h-56 overflow-hidden">
              <img src={story.coverImage} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" alt={story.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">
                {story.category}
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                 <div>
                   <h3 className="text-white text-xl font-heading font-bold mb-1 line-clamp-1 leading-tight">{story.title}</h3>
                   <div className="flex items-center space-x-3">
                     <div className="flex items-center text-white/80">
                       <Clock size={12} className="mr-1" />
                       <span className="text-[10px] font-bold uppercase tracking-widest">{story.readingTime} min</span>
                     </div>
                     <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                     <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest">{story.language}</span>
                   </div>
                 </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">{story.summary}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-orange-100 rounded-full border border-orange-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${story.authorId}`} alt={story.author} />
                  </div>
                  <div>
                    <span className="text-xs font-black text-gray-800 uppercase tracking-tighter">{story.author}</span>
                    <span className="text-[9px] text-gray-400 block font-bold uppercase tracking-widest">Top Contributor</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1.5 text-gray-400 group/btn hover:text-red-500 transition-colors">
                    <Heart size={18} className="transition-transform group-active/btn:scale-125" />
                    <span className="text-[11px] font-bold">{story.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-gray-400 group/btn hover:text-blue-500 transition-colors">
                    <MessageCircle size={18} className="transition-transform group-active/btn:scale-125" />
                    <span className="text-[11px] font-bold">{story.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
