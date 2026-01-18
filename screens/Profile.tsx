
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Edit3, Grid, Bookmark, ShieldCheck, Share2, Info } from 'lucide-react';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-5 py-6 flex justify-between items-center">
        <h2 className="text-xl font-heading font-black">My <span className="text-orange-500">Identity</span></h2>
        <div className="flex space-x-2">
           <button onClick={() => navigate('/admin')} className="p-2 bg-blue-50 rounded-full text-blue-600">
            <ShieldCheck size={22} />
          </button>
          <button className="p-2 bg-gray-50 rounded-full text-gray-500">
            <Settings size={22} />
          </button>
        </div>
      </div>

      <div className="px-6 flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <div className="w-28 h-28 rounded-full border-4 border-orange-500 p-1 overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/profile/200" className="w-full h-full rounded-full object-cover" alt="avatar" />
          </div>
          <button className="absolute bottom-0 right-0 bg-orange-500 text-white p-2 rounded-full border-4 border-white">
            <Edit3 size={16} />
          </button>
        </div>
        <h3 className="text-2xl font-heading font-bold">Aarav Sharma</h3>
        <p className="text-sm text-gray-500 font-medium">@aarav_the_writer</p>
        
        <div className="flex items-center space-x-2 mt-4 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
           <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">Level 12 • Senior Lekhak</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center space-x-12 mb-8 px-6">
        <div className="text-center">
          <div className="text-xl font-black text-gray-900">42</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Stories</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-black text-gray-900">12.5K</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Readers</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-black text-gray-900">2.8K</div>
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Following</div>
        </div>
      </div>

      {/* Quick Menu */}
      <div className="px-6 mb-8 grid grid-cols-2 gap-4">
        <button 
          onClick={() => navigate('/dev-docs')}
          className="flex items-center justify-center space-x-2 bg-gray-50 py-3 rounded-2xl border border-gray-100 text-gray-600"
        >
          <Info size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">App Strategy</span>
        </button>
        <button className="flex items-center justify-center space-x-2 bg-gray-50 py-3 rounded-2xl border border-gray-100 text-gray-600">
          <Share2 size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Share Profile</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-t border-gray-100">
        <button className="flex-1 py-4 flex items-center justify-center border-b-2 border-orange-500 text-orange-500">
          <Grid size={20} className="mr-2" />
          <span className="text-xs font-bold uppercase tracking-widest">My Works</span>
        </button>
        <button className="flex-1 py-4 flex items-center justify-center text-gray-400">
          <Bookmark size={20} className="mr-2" />
          <span className="text-xs font-bold uppercase tracking-widest">Library</span>
        </button>
      </div>

      <div className="p-5 space-y-4 pb-20">
         {[1, 2, 3].map(i => (
           <div key={i} className="flex space-x-4 items-center animate-in fade-in slide-in-from-left-2 duration-300">
             <div className="w-16 h-16 rounded-xl bg-gray-100 overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                <img src={`https://picsum.photos/seed/${i+100}/200`} className="w-full h-full object-cover" />
             </div>
             <div className="flex-1">
               <h5 className="font-bold text-gray-900 text-sm">Chapter {i}: The Hidden Path</h5>
               <div className="flex items-center space-x-3 mt-1">
                 <span className="text-[10px] text-gray-400 font-bold uppercase">24k Reads</span>
                 <span className="text-[10px] text-orange-400 font-bold uppercase">Trending #2</span>
               </div>
             </div>
             <button className="p-2 text-gray-300"><Share2 size={16} /></button>
           </div>
         ))}
      </div>
    </div>
  );
};

export default Profile;
