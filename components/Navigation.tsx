
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PenSquare, Search, User, Bell } from 'lucide-react';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 px-2 z-50">
      <button 
        onClick={() => navigate('/home')}
        className={`flex flex-col items-center ${isActive('/home') ? 'text-orange-500' : 'text-gray-400'}`}
      >
        <Home size={22} />
        <span className="text-[9px] mt-1 font-bold uppercase tracking-widest">Home</span>
      </button>
      
      <button 
        onClick={() => navigate('/search')}
        className={`flex flex-col items-center ${isActive('/search') ? 'text-orange-500' : 'text-gray-400'}`}
      >
        <Search size={22} />
        <span className="text-[9px] mt-1 font-bold uppercase tracking-widest">Search</span>
      </button>
      
      <button 
        onClick={() => navigate('/write')}
        className="flex flex-col items-center -mt-8 bg-orange-500 text-white p-3 rounded-full shadow-lg border-4 border-white transform transition-transform active:scale-90"
      >
        <PenSquare size={26} />
      </button>
      
      <button 
        onClick={() => navigate('/notifications')}
        className={`flex flex-col items-center ${isActive('/notifications') ? 'text-orange-500' : 'text-gray-400'}`}
      >
        <Bell size={22} />
        <span className="text-[9px] mt-1 font-bold uppercase tracking-widest">Alerts</span>
      </button>
      
      <button 
        onClick={() => navigate('/profile')}
        className={`flex flex-col items-center ${isActive('/profile') ? 'text-orange-500' : 'text-gray-400'}`}
      >
        <User size={22} />
        <span className="text-[9px] mt-1 font-bold uppercase tracking-widest">Me</span>
      </button>
    </div>
  );
};

export default Navigation;
