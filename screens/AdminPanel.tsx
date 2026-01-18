
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, ShieldAlert, Users, TrendingUp, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white px-5 py-4 flex items-center border-b border-gray-100">
        <button onClick={() => navigate(-1)} className="mr-4 text-gray-500">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-lg font-bold text-gray-800">Admin Dashboard</h2>
      </div>

      <div className="p-6 space-y-6 overflow-y-auto no-scrollbar pb-20">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            <Users className="text-blue-500 mb-2" size={20} />
            <div className="text-2xl font-black text-gray-900">12.4K</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active Users</div>
          </div>
          <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
            <TrendingUp className="text-green-500 mb-2" size={20} />
            <div className="text-2xl font-black text-gray-900">452</div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">New Stories</div>
          </div>
        </div>

        {/* Content Moderation Queue */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center">
              <ShieldAlert size={14} className="mr-2" />
              Moderation Queue
            </h3>
            <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full font-bold">12 Pending</span>
          </div>

          <div className="space-y-3">
            {[1, 2].map(i => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-1">Reported: Why the hills cry</h4>
                  <span className="text-[8px] bg-gray-100 px-2 py-1 rounded text-gray-400 font-bold uppercase">Spam</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mb-3">User @sharma_ji reported this content for violating community guidelines regarding sensitive topics...</p>
                <div className="flex space-x-2">
                  <button className="flex-1 py-2 bg-green-50 text-green-600 text-[10px] font-bold rounded-lg flex items-center justify-center">
                    <CheckCircle size={12} className="mr-1" /> Approve
                  </button>
                  <button className="flex-1 py-2 bg-red-50 text-red-600 text-[10px] font-bold rounded-lg flex items-center justify-center">
                    <XCircle size={12} className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Platform Roadmap / Dev Docs Link */}
        <button 
          onClick={() => navigate('/dev-docs')}
          className="w-full p-4 bg-orange-500 text-white rounded-3xl shadow-lg shadow-orange-100 flex items-center justify-between"
        >
          <div className="flex items-center">
            <BarChart2 className="mr-3" />
            <div className="text-left">
              <div className="text-sm font-bold">View Platform Architecture</div>
              <div className="text-[10px] opacity-80 uppercase font-bold">CTO Roadmap & DB Schema</div>
            </div>
          </div>
          <ArrowLeft size={20} className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
