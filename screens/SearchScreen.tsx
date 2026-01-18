
import React, { useState } from 'react';
import { Search, History, TrendingUp, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../constants';

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="p-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Search stories, authors, or genres..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-orange-500 transition-all"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 no-scrollbar pb-10">
        {!query ? (
          <div className="space-y-8 mt-4">
            {/* Recent Searches */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest">Recent Searches</h3>
                <button className="text-orange-500 text-[10px] font-bold">Clear All</button>
              </div>
              <div className="space-y-4">
                {['Horror in Hindi', 'Premchand Classics', 'Modern Shayari'].map(term => (
                  <div key={term} className="flex items-center text-gray-600 text-sm">
                    <History size={16} className="mr-3 text-gray-300" />
                    <span>{term}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Tags */}
            <section>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Trending Now</h3>
              <div className="flex flex-wrap gap-2">
                {['#VaranasiGhats', '#FreedomStruggle', '#MonsoonLove', '#StartupLife', '#VillageLore'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 rounded-full text-xs font-bold text-gray-700 border border-gray-100">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Categories Grid */}
            <section>
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Discover Genres</h3>
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.slice(0, 6).map(cat => (
                  <div key={cat.id} className="relative h-24 rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/10 z-10"></div>
                    <img 
                      src={`https://picsum.photos/seed/${cat.id}/300/200`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={cat.label} 
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end p-3">
                      <span className="text-xl mb-1">{cat.icon}</span>
                      <span className="text-white font-bold text-xs">{cat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          <div className="py-4">
            <p className="text-gray-400 text-sm">Showing results for "<span className="text-gray-900 font-bold">{query}</span>"</p>
            {/* Search results list would go here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchScreen;
