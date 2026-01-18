
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, UserPlus, Sparkles } from 'lucide-react';

const Notifications: React.FC = () => {
  const navigate = useNavigate();

  const NOTIFS = [
    { id: '1', type: 'like', user: 'Priya Verma', target: 'The Silent Bells...', time: '2m ago' },
    { id: '2', type: 'follow', user: 'Vikram Seth', time: '15m ago' },
    { id: '3', type: 'comment', user: 'S. Chatterjee', message: 'Absolutely stunning prose!', time: '1h ago' },
    { id: '4', type: 'system', message: 'Weekly Challenge: Write a 100-word story on "The Rainy Ghats".', time: '2h ago' },
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'like': return <Heart size={16} className="text-red-500" fill="currentColor" />;
      case 'follow': return <UserPlus size={16} className="text-blue-500" />;
      case 'comment': return <MessageCircle size={16} className="text-green-500" />;
      default: return <Sparkles size={16} className="text-orange-500" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-500">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-gray-800">Alerts</h2>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {NOTIFS.map(notif => (
          <div key={notif.id} className={`px-5 py-4 flex items-start space-x-4 border-b border-gray-50 ${notif.id === '1' ? 'bg-orange-50/30' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center relative">
               <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                 {getIcon(notif.type)}
               </div>
               <span className="text-xs font-bold text-gray-400">
                 {notif.user ? notif.user.split(' ')[0][0] : 'BL'}
               </span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                {notif.type === 'like' && <span><span className="font-bold">{notif.user}</span> liked your story <span className="font-medium">"{notif.target}"</span></span>}
                {notif.type === 'follow' && <span><span className="font-bold">{notif.user}</span> started following you.</span>}
                {notif.type === 'comment' && <span><span className="font-bold">{notif.user}</span> commented: "{notif.message}"</span>}
                {notif.type === 'system' && <span className="text-orange-600 font-medium">{notif.message}</span>}
              </p>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 block">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
